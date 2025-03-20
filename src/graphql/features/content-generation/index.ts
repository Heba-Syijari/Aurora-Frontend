import { gql } from 'graphql-request';

export const suggestDomainNames = gql`
  mutation SuggestDomainNames($keyword: String!) {
    suggestDomainNames(keyword: $keyword)
  }
`;

export const enhanceText = gql`
  mutation EnhanceText($text: String!) {
    enhanceText(text: $text)
  }
`;

export const suggestLogoTexts = gql`
  mutation SuggestLogoTexts($keyword: String!) {
    suggestLogoTexts(keyword: $keyword)
  }
`;

export const generateImage = gql`
  mutation GenerateImage($generateImageInput: String!) {
    generateImage(description: $generateImageInput)
  }
`;

export const generateText = gql`
  mutation GenerateText($generateTextInput: String!) {
    generateText(text: $generateTextInput)
  }
`;

export const regenerateText = gql`
  mutation RegenerateText($regenerateTextInput: RegenerateTextInput!) {
    regenerateText(input: $regenerateTextInput)
  }
`;
