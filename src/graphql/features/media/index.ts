import { gql } from 'graphql-request';

export const getProjectMedia = gql`
  query GetProjectMedia($projectId: String!) {
    getProjectMedia(projectId: $projectId) {
      id
      type
      title
      path
      projectId
      viewTypes
    }
  }
`;

export const createProjectMedia = gql`
  mutation CreateProjectMedia($createMediaInput: CreateMediaInput!) {
    createMedia(createMediaInput: $createMediaInput) {
      id
      type
      title
      path
      projectId
      viewTypes
    }
  }
`;

export const updateProjectMedia = gql`
  mutation UpdateProjectMedia($updateMediaInput: UpdateMediaInput!) {
    updateMedia(updateMediaInput: $updateMediaInput) {
      id
      type
      title
      path
      projectId
      viewTypes
    }
  }
`;

export const deleteProjectMedia = gql`
  mutation DeleteProjectMedia($deleteMediaInput: DeleteMediaInput!) {
    deleteMedia(deleteMediaInput: $deleteMediaInput) {
      id
      type
      title
      path
      projectId
      viewTypes
    }
  }
`;
