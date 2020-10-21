import { gql } from '@apollo/client';

export const CREATE_SHIRT = gql`
  mutation createShirt($name: String!, $color: String!, $size: Int!) {
    createShirt(name: $name, color: $color, size: $size) {
      id
      name
      size
    }
  }
`;
