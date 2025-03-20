import { gql } from 'graphql-request';

export const getGetContentTypes = gql`
  query GetContentType {
    ContentType(where: { parentId: { _is_null: true } }) {
      id
      parentId
      name
      type
      children {
        id
        name
      }
    }
  }
`;

export const getProjectGetContentTypes = gql`
  query GetContentTypesOnProjects($projectId: uuid!) {
    ContentTypesOnProjects(where: { projectId: { _eq: $projectId } }) {
      ContentType {
        id
        name
        parentId
      }
    }
  }
`;
