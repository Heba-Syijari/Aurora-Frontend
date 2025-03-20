import { gql } from 'graphql-request';

export const getGetVisualTypes = gql`
  query GetVisualType {
    VisualType {
      id
      name
      type
    }
  }
`;
