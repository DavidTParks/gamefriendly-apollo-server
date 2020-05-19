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
        user: User
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
        user(id: ID!): User!
        users: [User]
        gameSession(id: ID!): GameSession!
        gameSessions: [GameSession]
    }
`;
module.exports = typeDefs;