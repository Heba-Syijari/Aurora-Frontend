import { gql } from 'graphql-request';

export const getStatistics = gql`
  query GetStatistics {
    Project {
      cdnPullZoneId
      id
    }
    ContactMessage {
      id
    }
  }
`;
