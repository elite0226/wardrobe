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

export const CREATE_SHIRT = gql`
  mutation createShirt($name: String!, $color: String!, $size: Int!) {
    createShirt(name: $name, color: $color, size: $size) {
      id
      name
      size
    }
  }
`;

export const DELETE_PANT = gql`
  mutation deletePant($id: ID!) {
    deletePant(id: $id)
  }
`;

export const DELETE_SHIRT = gql`
  mutation deleteShirt($id: ID!) {
    deleteShirt(id: $id)
  }
`;
