const { gql } = require('apollo-server');
const { GraphQLDate, GraphQLDateTime, GraphQLTime } = require('graphql-iso-date');
const typeDefs = gql`
scalar Date
   scalar Time
   scalar DateTime
  type User {
    name: String!
    email: String!
    password: String!
    id: ID!
    gameSessions: [GameSession]
  }

type GameSession {
  id: ID!
  title: String!
  active: Boolean!
}
type Mutation {
  signupUser(data: UserCreateInput!) : AuthPayLoad!
  loginUser(data: UserLoginInput!): AuthPayLoad!
}
input UserCreateInput {
  email: String!
  name: String!
  password: String!
}
input UserLoginInput {
  email: String!
  password: String!
}
type AuthPayLoad {
  token: String!
}
  type Query {
    users: [User]
    gameSessions: [GameSession]
  }
`;
module.exports = typeDefs;