import { gql } from 'graphql-request';

export const createSubscription = gql`
  mutation CreateSubscription($createSubscriptionInput: CreateSubscriptionInput!) {
    createSubscription(createSubscriptionInput: $createSubscriptionInput) {
      redirectURL
    }
  }
`;

export const checkPaymentStatus = gql`
  mutation CheckPaymentStatus($transactionId: String!) {
    checkPaymentStatus(transactionId: $transactionId)
  }
`;
