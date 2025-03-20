import { gql } from 'graphql-request';

export const getThemes = gql`
  query GetThemes {
    themes {
      id
      name
      thumbnail
    }
  }
`;
