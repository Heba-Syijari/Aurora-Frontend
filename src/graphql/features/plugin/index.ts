import { gql } from 'graphql-request';

export const updateAdamWidgetConfig = gql`
  mutation UpdateAdamWidgetConfig($updateAdamWidgetConfigInput: UpdateAdamWidgetConfigInput!) {
    updateAdamWidgetConfig(updateAdamWidgetConfigInput: $updateAdamWidgetConfigInput)
  }
`;
