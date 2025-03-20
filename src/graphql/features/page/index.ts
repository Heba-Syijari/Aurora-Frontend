import { gql } from 'graphql-request';

export const getPageById = gql`
  query GetPageById($pageId: Int!) {
    page(id: $pageId) {
      id
      projectId
      title
      description
      slug
      themeId
      components {
        id
        order
        data
        componentId
        component {
          name
          type
        }
      }
    }
  }
`;

export const createPage = gql`
  mutation CreatePage($createPageInput: CreatePageInput!) {
    createPage(input: $createPageInput) {
      id
      title
      description
      projectId
    }
  }
`;

export const regeneratePage = gql`
  mutation RegeneratePage($regeneratePageInput: RegeneratePageInput!) {
    regeneratePage(input: $regeneratePageInput)
  }
`;

export const deletePage = gql`
  mutation DeletePage($deletePageInput: DeletePageInput!) {
    deletePage(input: $deletePageInput)
  }
`;

export const changePageComponentLayout = gql`
  mutation ChangePageComponentLayout($changePageComponentInput: ChangeComponentLayoutInput!) {
    changePageComponentLayout(input: $changePageComponentInput) {
      id
      componentId
      pageId
      order
      data
    }
  }
`;

export const addPageComponent = gql`
  mutation AddComponent($addComponentInput: AddPageComponentInput!) {
    addPageComponent(input: $addComponentInput) {
      id
      pageId
      componentId
      order
      data
      component {
        id
        name
        type
      }
    }
  }
`;

export const removePageComponent = gql`
  mutation RemoveComponent($removeComponentInput: RemovePageComponentInput!) {
    removePageComponent(input: $removeComponentInput) {
      id
      componentId
      pageId
      order
      data
    }
  }
`;

export const swapPageComponents = gql`
  mutation SwapPageComponents($swapInput: SwapPageComponentsInput!) {
    swapPageComponents(input: $swapInput)
  }
`;

export const updatePageComponent = gql`
  mutation UpdatePageComponent($pageComponentInput: UpdatePageComponentInput!) {
    updatePageComponent(input: $pageComponentInput)
  }
`;
