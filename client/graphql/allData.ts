import gql from 'graphql-tag';

export const ALL_DATA = gql`
  query allData {
    allShirts {
      id
      name
      color
      size
    }

    allPants {
      id
      name
      color
      width
      length
    }
  }
`;
