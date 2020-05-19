const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { decodedToken } = require('./decodedToken');

const passwordValidator = require('password-validator');
const { isEmail } = require('validator');
const passwordSchema = new passwordValidator()
    .is().min(8)
    .is().max(20)
    .has().letters()
    .has().digits()
    .has().symbols()
    .has().not().spaces();

const resolvers = {
  Query: {
    users: async (root, args, { prisma, req }, info) => { 
        const decoded = decodedToken(req);
        return prisma.users();
    },
    gameSessions: async (root, args, { prisma, req }, info) => { 
        const decoded = decodedToken(req);
        return prisma.gameSessions();
    },
    gameSession: async (root, args, { prisma, req }, info) => { 
        const decoded = decodedToken(req);
        return prisma.gameSession({
          id: args.id,
      });
    },
    user: async (root, args, { prisma, req }, info) => { 
        const decoded = decodedToken(req);
        return prisma.user({
          id: args.id,
      });
    },
  },
  Mutation: {
    signupUser: async (root, args, { prisma }, info) => {
        const { data: { email, name, password } } = args;
        if(!isEmail(email)) {
          throw new Error('Invalid email');
        }
        if (!passwordSchema.validate(password)) {
          throw new Error('Password is not strong enough!');
        }

        const newUser = await prisma.createUser({
          email,
          name,
          password: bcrypt.hashSync(password, 3)
        });
        return {token : jwt.sign(newUser, "supersecret")};
    },
    createGameSession: async (root, args, { prisma, req }, info) => {
        const decoded = decodedToken(req);
        const { data : {title, user, active}} = args;
        const gameSession = await prisma.createGameSession({
          title: title,
          active: active,
          user: { connect: { id: decoded.id } },
        });
        return {data : gameSession};
    },
    loginUser: async (root, args, { prisma, req }, info)  => {
      const { data: { email, password } } = args;
      const [ theUser ] = await prisma.users({
        where: {
          email
        }
      })
      if (!theUser) throw new Error('Unable to Login');
      const isMatch = bcrypt.compareSync(password, theUser.password);
      if (!isMatch) throw new Error('Unable to Login');
      return {token : jwt.sign(theUser, "supersecret")};
    },

  }
};
module.exports = resolvers;