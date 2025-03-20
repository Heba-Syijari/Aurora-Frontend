import { gql } from 'graphql-request';

export const getComponents = gql`
  query GetComponent {
    Component {
      id
      image
      name
      type
    }
  }
`;
