import { gql } from 'graphql-request';

export const createDonation = gql`
  mutation CreateDonation($createDonationInput: CreateDonationInput!) {
    createDonation(createDonationInput: $createDonationInput) {
      redirectURL
    }
  }
`;

export const getMyDonations = gql`
  query GetMyDonations {
    getMyDonations {
      id
      amount
      type
      status
      userId
      createdAt
    }
  }
`;
