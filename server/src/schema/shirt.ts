import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Query {
    allShirts: [Shirt]
  }

  extend type Mutation {
    createShirt(name: String!, color: String!): Shirt
  }
  type Shirt {
    id: ID!
    name: String!
    color: String!
  }
`;
