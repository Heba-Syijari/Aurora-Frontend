import { gql } from 'graphql-request';

export const getDomainPrices = gql`
  query GetDomainPricing($domainName: String!) {
    getDomainPricing(domainName: $domainName) {
      price
      duration
      durationType
    }
  }
`;

export const createDomainRegistration = gql`
  mutation CreateDomainRegistration(
    $createDomainRegistrationInput: CreateDomainRegistrationInput!
  ) {
    createDomainRegistration(createDomainRegistrationInput: $createDomainRegistrationInput) {
      redirectURL
    }
  }
`;

export const createFreeDomainRegistration = gql`
  mutation CreateFreeDomainRegistration(
    $createFreeDomainRegistrationInput: CreateFreeDomainRegistrationInput!
  ) {
    createFreeDomainRegistration(
      createFreeDomainRegistrationInput: $createFreeDomainRegistrationInput
    ) {
      success
    }
  }
`;

export const checkDomainAvailability = gql`
  query CheckDomainAvailability($domainName: String!) {
    checkDomainAvailability(domainName: $domainName)
  }
`;

export const getDomainRegistrations = gql`
  query GetDomainRegistrations {
    getDomainRegistrations {
      id
      years
      amount
      isFree
      status
      domainName
      userId
      createdAt
    }
  }
`;

export const getUnattachedDomains = gql`
  query GetUnattachedDomains {
    getUnattachedDomains
  }
`;

export const attachDomain = gql`
  mutation AttachDomain($attachDomainInput: AttachDomainInput!) {
    attachDomain(attachDomainInput: $attachDomainInput) {
      success
    }
  }
`;

export const detachDomain = gql`
  mutation DetachDomain($detachDomainInput: DetachDomainInput!) {
    detachDomain(detachDomainInput: $detachDomainInput) {
      success
    }
  }
`;

export const addFreeCertificateToDomain = gql`
  mutation AddFreeCertificateToDomain($projectId: String!) {
    addFreeCertificateToDomain(projectId: $projectId)
  }
`;
