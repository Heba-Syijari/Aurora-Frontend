import { ContentTypeVariationType } from 'src/types/website-content-type';

export type CategoryOptionType = {
  id: number;
  type: ContentTypeVariationType;
  name: string;
  children?: { id: number; name: string }[];
};
