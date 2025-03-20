import { gql } from 'graphql-request';

export const getPlans = gql`
  query GetPlans {
    plans {
      id
      name
      description
      periodType
      period
      price
      discount
      features {
        id
        featureId
        limitation
        description
        planId
      }
      extraFeatures
      createdAt
      updatedAt
    }
  }
`;

export const getPlan = gql`
  query GetPlan($planId: Int!) {
    plan(id: $planId) {
      id
      name
      description
      periodType
      period
      price
      discount
      features {
        id
        featureId
        limitation
        description
        planId
        feature {
          key
        }
      }
      extraFeatures
      createdAt
      updatedAt
    }
  }
`;
