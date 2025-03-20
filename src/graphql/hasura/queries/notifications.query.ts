import { gql } from 'graphql-request';

export const getMyNotifications = gql`
  query GetMyNotifications {
    Notification(order_by: { createdAt: desc }) {
      id
      description
      title
      userId
      createdAt
      readAt
    }
  }
`;

export const markNotificationAsRead = gql`
  mutation MarkNotificationAsRead($id: Int!) {
    update_Notification(where: { id: { _eq: $id } }, _set: { readAt: "now()" }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const markAllNotificationsAsRead = gql`
  mutation MarkAllNotificationsAsRead {
    update_Notification(where: {}, _set: { readAt: "now()" }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
