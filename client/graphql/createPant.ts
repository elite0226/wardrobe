import { gql } from '@apollo/client';

export const CREATE_PANT = gql`
  mutation createPant(
    $name: String!
    $color: String!
    $width: Int!
    $length: Int!
  ) {
    createPant(name: $name, color: $color, width: $width, length: $length) {
      id
      name
      color
      width
      length
    }
  }
`;
