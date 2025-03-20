import { gql } from 'graphql-request';

export const getPayments = gql`
  query GetPayments {
    Payment(order_by: { createdAt: desc }) {
      id
      cost
      type
      status
      userId
      User {
        id
        name
        email
      }
      createdAt
      subscriptionId
      domainRegistrationId
      donationId
      transactionId
    }
  }
`;

export const getPaymentDetails = gql`
  query GetPaymentDetails($id: Int!) {
    Payment(where: { id: { _eq: $id } }) {
      id
      cost
      type
      status
      userId
      User {
        id
        name
        email
      }
      createdAt
      transactionId
      subscriptionId
      Subscription {
        id
        status
        expireAt
        Plan {
          name
          period
          periodType
        }
      }
      domainRegistrationId
      DomainRegistration {
        domainName
        years
        status
      }
      donationId
      Donation {
        type
        status
      }
    }
  }
`;
