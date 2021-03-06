module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateGameSession {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type GameSession {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  game: Int!
  description: String!
  discord: String!
  active: Boolean!
  user: User!
}

type GameSessionConnection {
  pageInfo: PageInfo!
  edges: [GameSessionEdge]!
  aggregate: AggregateGameSession!
}

input GameSessionCreateInput {
  id: ID
  title: String!
  game: Int!
  description: String!
  discord: String!
  active: Boolean!
  user: UserCreateOneWithoutGameSessionsInput!
}

input GameSessionCreateManyWithoutUserInput {
  create: [GameSessionCreateWithoutUserInput!]
  connect: [GameSessionWhereUniqueInput!]
}

input GameSessionCreateWithoutUserInput {
  id: ID
  title: String!
  game: Int!
  description: String!
  discord: String!
  active: Boolean!
}

type GameSessionEdge {
  node: GameSession!
  cursor: String!
}

enum GameSessionOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  game_ASC
  game_DESC
  description_ASC
  description_DESC
  discord_ASC
  discord_DESC
  active_ASC
  active_DESC
}

type GameSessionPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  game: Int!
  description: String!
  discord: String!
  active: Boolean!
}

input GameSessionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  game: Int
  game_not: Int
  game_in: [Int!]
  game_not_in: [Int!]
  game_lt: Int
  game_lte: Int
  game_gt: Int
  game_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  discord: String
  discord_not: String
  discord_in: [String!]
  discord_not_in: [String!]
  discord_lt: String
  discord_lte: String
  discord_gt: String
  discord_gte: String
  discord_contains: String
  discord_not_contains: String
  discord_starts_with: String
  discord_not_starts_with: String
  discord_ends_with: String
  discord_not_ends_with: String
  active: Boolean
  active_not: Boolean
  AND: [GameSessionScalarWhereInput!]
  OR: [GameSessionScalarWhereInput!]
  NOT: [GameSessionScalarWhereInput!]
}

type GameSessionSubscriptionPayload {
  mutation: MutationType!
  node: GameSession
  updatedFields: [String!]
  previousValues: GameSessionPreviousValues
}

input GameSessionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GameSessionWhereInput
  AND: [GameSessionSubscriptionWhereInput!]
  OR: [GameSessionSubscriptionWhereInput!]
  NOT: [GameSessionSubscriptionWhereInput!]
}

input GameSessionUpdateInput {
  title: String
  game: Int
  description: String
  discord: String
  active: Boolean
  user: UserUpdateOneRequiredWithoutGameSessionsInput
}

input GameSessionUpdateManyDataInput {
  title: String
  game: Int
  description: String
  discord: String
  active: Boolean
}

input GameSessionUpdateManyMutationInput {
  title: String
  game: Int
  description: String
  discord: String
  active: Boolean
}

input GameSessionUpdateManyWithoutUserInput {
  create: [GameSessionCreateWithoutUserInput!]
  delete: [GameSessionWhereUniqueInput!]
  connect: [GameSessionWhereUniqueInput!]
  set: [GameSessionWhereUniqueInput!]
  disconnect: [GameSessionWhereUniqueInput!]
  update: [GameSessionUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [GameSessionUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [GameSessionScalarWhereInput!]
  updateMany: [GameSessionUpdateManyWithWhereNestedInput!]
}

input GameSessionUpdateManyWithWhereNestedInput {
  where: GameSessionScalarWhereInput!
  data: GameSessionUpdateManyDataInput!
}

input GameSessionUpdateWithoutUserDataInput {
  title: String
  game: Int
  description: String
  discord: String
  active: Boolean
}

input GameSessionUpdateWithWhereUniqueWithoutUserInput {
  where: GameSessionWhereUniqueInput!
  data: GameSessionUpdateWithoutUserDataInput!
}

input GameSessionUpsertWithWhereUniqueWithoutUserInput {
  where: GameSessionWhereUniqueInput!
  update: GameSessionUpdateWithoutUserDataInput!
  create: GameSessionCreateWithoutUserInput!
}

input GameSessionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  game: Int
  game_not: Int
  game_in: [Int!]
  game_not_in: [Int!]
  game_lt: Int
  game_lte: Int
  game_gt: Int
  game_gte: Int
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  discord: String
  discord_not: String
  discord_in: [String!]
  discord_not_in: [String!]
  discord_lt: String
  discord_lte: String
  discord_gt: String
  discord_gte: String
  discord_contains: String
  discord_not_contains: String
  discord_starts_with: String
  discord_not_starts_with: String
  discord_ends_with: String
  discord_not_ends_with: String
  active: Boolean
  active_not: Boolean
  user: UserWhereInput
  AND: [GameSessionWhereInput!]
  OR: [GameSessionWhereInput!]
  NOT: [GameSessionWhereInput!]
}

input GameSessionWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createGameSession(data: GameSessionCreateInput!): GameSession!
  updateGameSession(data: GameSessionUpdateInput!, where: GameSessionWhereUniqueInput!): GameSession
  updateManyGameSessions(data: GameSessionUpdateManyMutationInput!, where: GameSessionWhereInput): BatchPayload!
  upsertGameSession(where: GameSessionWhereUniqueInput!, create: GameSessionCreateInput!, update: GameSessionUpdateInput!): GameSession!
  deleteGameSession(where: GameSessionWhereUniqueInput!): GameSession
  deleteManyGameSessions(where: GameSessionWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  gameSession(where: GameSessionWhereUniqueInput!): GameSession
  gameSessions(where: GameSessionWhereInput, orderBy: GameSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GameSession]!
  gameSessionsConnection(where: GameSessionWhereInput, orderBy: GameSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GameSessionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  gameSession(where: GameSessionSubscriptionWhereInput): GameSessionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  email: String!
  username: String
  name: String!
  password: String!
  gameSessions(where: GameSessionWhereInput, orderBy: GameSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GameSession!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  username: String
  name: String!
  password: String!
  gameSessions: GameSessionCreateManyWithoutUserInput
}

input UserCreateOneWithoutGameSessionsInput {
  create: UserCreateWithoutGameSessionsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutGameSessionsInput {
  id: ID
  email: String!
  username: String
  name: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  name_ASC
  name_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  email: String!
  username: String
  name: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  username: String
  name: String
  password: String
  gameSessions: GameSessionUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  username: String
  name: String
  password: String
}

input UserUpdateOneRequiredWithoutGameSessionsInput {
  create: UserCreateWithoutGameSessionsInput
  update: UserUpdateWithoutGameSessionsDataInput
  upsert: UserUpsertWithoutGameSessionsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutGameSessionsDataInput {
  email: String
  username: String
  name: String
  password: String
}

input UserUpsertWithoutGameSessionsInput {
  update: UserUpdateWithoutGameSessionsDataInput!
  create: UserCreateWithoutGameSessionsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  gameSessions_every: GameSessionWhereInput
  gameSessions_some: GameSessionWhereInput
  gameSessions_none: GameSessionWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`
      }
    