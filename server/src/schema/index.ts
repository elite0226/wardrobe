import { gql } from 'apollo-server-express';

import { typeDefs as pantTypeDefs } from './pant';
import { typeDefs as shirtTypeDefs } from './shirt';

const linkSchema = gql`
  scalar Date
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default [linkSchema, pantTypeDefs, shirtTypeDefs];
