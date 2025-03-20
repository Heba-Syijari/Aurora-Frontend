import { gql } from 'graphql-request';

export const createPost = gql`
  mutation CreatePost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
      id
      title
      slug
      description
      body
      imagePath
      projectId
    }
  }
`;

export const updatePost = gql`
  mutation UpdatePost($updatePostInput: UpdatePostInput!) {
    updatePost(updatePostInput: $updatePostInput) {
      id
      title
      slug
      description
      body
      imagePath
      projectId
    }
  }
`;

export const deletePost = gql`
  mutation DeletePost($postId: Int!) {
    deletePost(id: $postId) {
      id
      title
      slug
      description
      body
      imagePath
      projectId
    }
  }
`;

export const generatePost = gql`
  mutation GeneratePost($projectId: String!) {
    generatePost(projectId: $projectId) {
      id
      title
      slug
      description
      body
      imagePath
      projectId
    }
  }
`;
