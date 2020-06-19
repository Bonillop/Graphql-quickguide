import { makeExecutableSchema } from "graphql-tools"; // this joins our typeDefs and resolvers
import { resolvers } from "./resolvers";
// We define all the operations that can be done with this schema in graphql
const typeDefs = `

  type Query {
    hello: String
    greet(name: String): String
    tasks: [Task]
    users: [User]
  }

  type Mutation {
    createTask(input: TaskInput): Task
    createUser(input: UserInput): User
    deleteUser(_id: ID): User
    updateUser(_id: ID, input: UserInput): User
  }

  type Task {
    _id: ID
    title: String!
    description: String!
    number: Int
  }

  type User {
    _id: ID
    firstName: String!
    lastName: String!
    age: Int
  }

  input TaskInput {
    title: String!
    description: String!
    number: Int
  }

  input UserInput {
    firstName: String!
    lastName: String!
    age: Int
  }

`

export default makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});