import { gql } from 'graphql-request';

export const getProjectMenus = gql`
  query GetProjectMenus($projectId: String!) {
    getProjectMenus(projectId: $projectId) {
      id
      label
      pageId
      parentId
      projectId
      link
      pageSlug
      children {
        id
        label
        pageId
        parentId
        projectId
        link
      }
    }
  }
`;

export const createProjectMenu = gql`
  mutation CreateProjectMenu($createMenuInput: CreateMenuInput!) {
    createMenu(createMenuInput: $createMenuInput) {
      id
      label
    }
  }
`;

export const updateProjectMenu = gql`
  mutation UpdateProjectMenu($updateMenuInput: UpdateMenuInput!) {
    updateMenu(updateMenuInput: $updateMenuInput) {
      id
      label
    }
  }
`;

export const deleteProjectMenu = gql`
  mutation DeleteProjectMenu($deleteMenuInput: DeleteMenuInput!) {
    deleteMenu(deleteMenuInput: $deleteMenuInput) {
      id
      label
    }
  }
`;
