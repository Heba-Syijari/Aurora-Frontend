import { gql } from 'graphql-request';

export const login = gql`
  mutation Login($input: LoginInput!) {
    login(loginInput: $input) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const me = gql`
  query Me {
    me {
      id
      name
      email
      gender
      phoneNumber
      imagePath
      verified
      createdAt
      preferences {
        imageModel
        textModel
      }
    }
  }
`;

export const getMySubscription = gql`
  query GetMySubscription {
    getMySubscription {
      id
      cost
      expireAt
      createdAt
      planId
      userId
      status
      isExpired
      expirationDays
      imageGenerations
      textGenerations
    }
  }
`;

export const register = gql`
  mutation Register($input: RegisterInput!) {
    register(registerInput: $input) {
      id
      email
    }
  }
`;

export const verifyUserEmail = gql`
  mutation VerifyUserEmail($verifyUserEmailInput: VerifyUserEmailInput!) {
    verifyUserEmail(verifyUserEmailInput: $verifyUserEmailInput) {
      id
      email
    }
  }
`;

export const resendVerificationEmail = gql`
  mutation ResendVerificationEmail($resendInput: ResendVerificationEmailInput!) {
    resendVerificationEmail(resendVerificationEmailInput: $resendInput) {
      id
      email
    }
  }
`;

export const requestRecoverPassword = gql`
  mutation RequestRecoverPassword($requestRecoverPasswordInput: RequestRecoverPasswordInput!) {
    requestRecoverPassword(requestRecoverPasswordInput: $requestRecoverPasswordInput)
  }
`;

export const resetPassword = gql`
  mutation ResetPassword($resetPasswordInput: ResetPasswordInput!) {
    resetPassword(resetPasswordInput: $resetPasswordInput)
  }
`;

export const loginWithGoogle = gql`
  mutation LoginWithGoogle($googleToken: String!) {
    loginWithGoogle(token: $googleToken) {
      token
      user {
        id
        email
      }
    }
  }
`;
