import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Query {
    allPants: [Pant]
  }

  extend type Mutation {
    createPant(name: String!, color: String!, width: Int!, length: Int!): Pant
  }

  type Pant {
    id: ID!
    name: String!
    color: String!
    width: Int!
    length: Int!
  }
`;
