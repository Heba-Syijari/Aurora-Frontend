import { gql } from 'graphql-request';

export const updateProfile = gql`
  mutation UpdateProfile($input: UpdateProfileInput!) {
    updateProfile(updateProfileInput: $input) {
      id
      email
      gender
      name
      imagePath
      phoneNumber
    }
  }
`;

export const updatePassword = gql`
  mutation UpdatePassword($input: UpdatePasswordInput!) {
    updatePassword(updatePasswordInput: $input) {
      success
    }
  }
`;

export const updatePreferences = gql`
  mutation UpdatePreferences($input: UpdatePreferencesInput!) {
    updatePreferences(updatePreferencesInput: $input) {
      success
    }
  }
`;

export const getUserUsage = gql`
  query GetUserUsage {
    getUserUsage {
      projectsCount
      hasOneProjectFreeTrial
    }
  }
`;
