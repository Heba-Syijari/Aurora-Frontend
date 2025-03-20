import { gql } from 'graphql-request';

export const getProject = gql`
  query GetProjectById($projectId: String!) {
    project(id: $projectId) {
      id
      name
      purpose
      description
      keywords
      similarWebsites
      websiteLocation
      mainLanguage
      intellectualPropertyType
      intellectualPropertyInfo
      presentationVolume
      visualTypes {
        visualType {
          id
          name
          type
        }
      }
      contentType
      audience {
        id
        age
        language
        gender
        organizations
        countries
        projectId
      }
      settings {
        id
        logoType
        logoValue
        fontFamily
        projectId
        palette {
          primary
          secondary
          neutral
          titles
          subTitles
        }
      }
      pages {
        id
        title
        slug
        description
        projectId
        themeId
        components {
          id
          data
          order
          pageId
          componentId
          component {
            name
            type
          }
        }
      }
      posts {
        id
        title
        description
        slug
        body
        imagePath
        imageAlt
        createdAt
      }
      contactMessages {
        id
        name
        email
        description
        createdAt
      }
      cdnPullZoneId
      publicURL
      media {
        id
        title
        path
        type
        viewTypes
      }
      plugins {
        id
        key
        value
        variation
        projectId
      }
      domainRegistration {
        domainRegistrationId
        projectId
        domainRegistration {
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
    }
  }
`;

export const createProject = gql`
  mutation CreateProject($createProjectInput: CreateProjectInput!) {
    createProject(createProjectInput: $createProjectInput) {
      id
      name
      purpose
      description
      keywords
      similarWebsites
      websiteLocation
      mainLanguage
      intellectualPropertyType
      intellectualPropertyInfo
    }
  }
`;

export const getProjectTargetTypes = gql`
  query GetProjectTargetTypes {
    projectTargetTypes {
      title
      description
      imageUrl
    }
  }
`;

export const updateProjectSettings = gql`
  mutation UpdateProjectSettings($updateProjectSettingsInput: UpdateProjectSettingsInput!) {
    updateProjectSettings(updateProjectSettingsInput: $updateProjectSettingsInput)
  }
`;

export const getMyProjects = gql`
  query GetMyProjects {
    projects {
      id
      name
      settings {
        logoType
        logoValue
      }
      cdnPullZoneId
      publicURL
      createdAt
    }
  }
`;

export const updateProject = gql`
  mutation UpdateProject($updateProjectInput: UpdateProjectInput!) {
    updateProject(updateProjectInput: $updateProjectInput)
  }
`;

export const exportProject = gql`
  mutation ExportProject($projectId: String!) {
    exportProject(id: $projectId)
  }
`;

export const publishProject = gql`
  mutation PublishProject($projectId: String!) {
    publishProject(id: $projectId)
  }
`;

export const deleteProject = gql`
  mutation DeleteProject($projectId: String!) {
    deleteProject(id: $projectId)
  }
`;

export const createAnalyticsProperty = gql`
  mutation CreateAnalyticsProperty($projectId: String!) {
    createAnalyticsProperty(id: $projectId)
  }
`;

export const getProjectAnalyticsProperty = gql`
  query GetProjectAnalyticsProperty($projectId: String!) {
    getProjectAnalyticsProperty(projectId: $projectId) {
      id
      displayName
      propertyName
      dataStreamName
      measurementId
      defaultUri
      parentAccountName
    }
  }
`;

export const getProjectGeneration = gql`
  query GetProjectGeneration($projectId: String!) {
    projectGeneration(projectId: $projectId) {
      id
      projectId
      status
      logs
      error
      createdAt
    }
  }
`;
