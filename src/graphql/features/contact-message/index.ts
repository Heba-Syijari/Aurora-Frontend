import { gql } from 'graphql-request';

export const removeContactMessage = gql`
  mutation RemoveContactMessage($removeContactMessageInput: RemoveContactMessageInput!) {
    removeContactMessage(removeContactMessageInput: $removeContactMessageInput) {
      id
    }
  }
`;
