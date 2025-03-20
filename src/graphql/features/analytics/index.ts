import { gql } from 'graphql-request';

export const getActiveUsersByCountryInLast30Mins = gql`
  query GetActiveUsersByCountryInLast30Mins($projectId: String!) {
    getActiveUsersByCountryInLast30Mins(projectId: $projectId) {
      items {
        category
        value
      }
    }
  }
`;

export const getReportByDate = gql`
  query GetReportByDate($projectId: String!) {
    getReportByDate(projectId: $projectId) {
      activeUsers {
        date
        value
      }
      conversions {
        date
        value
      }
      eventCount {
        date
        value
      }
      newUsers {
        date
        value
      }
    }
  }
`;

export const getActiveUsersByContinent = gql`
  query GetActiveUsersByContinent($getActiveUsersInput: GetActiveUsersInput!) {
    getActiveUsersByContinent(getActiveUsersInput: $getActiveUsersInput) {
      items {
        category
        value
      }
    }
  }
`;

export const getActiveUsersByHour = gql`
  query GetActiveUsersByHour($getActiveUsersInput: GetActiveUsersInput!) {
    getActiveUsersByHour(getActiveUsersInput: $getActiveUsersInput) {
      items {
        category
        value
      }
    }
  }
`;

export const getActiveUsersByPage = gql`
  query GetActiveUsersByPage($getActiveUsersInput: GetActiveUsersInput!) {
    getActiveUsersByPage(getActiveUsersInput: $getActiveUsersInput) {
      items {
        category
        value
      }
    }
  }
`;
