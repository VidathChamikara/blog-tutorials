import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }

  type Mutation {
    registerUser(input: CreateUserInput!): User!
  }

  type Query {
    users: [User!]!
  }
`;

export default typeDefs;
