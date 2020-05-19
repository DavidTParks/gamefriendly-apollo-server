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
        createdAt: DateTime!
        updatedAt: DateTime!
        title: String!
        user: User
        active: Boolean!
    }

    type Mutation {
        createGameSession(data: GameSessionCreateInput!): GameSessionPayload!
        signupUser(data: UserCreateInput!) : AuthPayLoad!
        loginUser(data: UserLoginInput!): AuthPayLoad!
    }

    input UserCreateInput {
        email: String!
        name: String!

        password: String!
    }

    input GameSessionCreateInput {
        active: Boolean!
        title: String!
    }

    input UserLoginInput {
        email: String!
        password: String!
    }
    type AuthPayLoad {
        token: String!
    }

    type GameSessionPayload {
        data: GameSession!
    }

    type Query {
        user(id: ID!): User!
        users: [User]
        gameSession(id: ID!): GameSession!
        gameSessions: [GameSession]
    }
`;
module.exports = typeDefs;