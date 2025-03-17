import { ImageData, TextData } from '../../types';

export enum OurSolutionComponentName {
  OUR_SOLUTION_ONE = 'OUR_SOLUTION_ONE',
  OUR_SOLUTION_TWO = 'OUR_SOLUTION_TWO',
  OUR_SOLUTION_THREE = 'OUR_SOLUTION_THREE',
  OUR_SOLUTION_FOUR = 'OUR_SOLUTION_FOUR',
}

export type OurSolutionComponentNameType = `${OurSolutionComponentName}`;

export type OurSolutionOneItemData = {
  icon: string,
  title: string;
  description: string;
};

export type OurSolutionConfig = {
  iconColor: string;
  titleColor: string;
  descriptionColor: string;
  items: OurSolutionOneItemData[];
};

// ---------------------- One --------------------
type OurSolutionData = {
  title: TextData;
  description: TextData;
};

export type OurSolutionOneData = OurSolutionData & {
  config: OurSolutionConfig;
  image: ImageData
};

// ---------------------- Two --------------------
export type OurSolutionTwoItemData = {
  title: string;
  description: string;
  image: string
};
export type OurSolutionTwoConfig = {
  titleColor: string;
  descriptionColor: string;
  content: OurSolutionTwoItemData[];
};

export type OurSolutionTwoData = {
  title: TextData;
  description: TextData;
  postTitle: TextData;
  config: OurSolutionTwoConfig;
};

// ---------------------- Three --------------------
export type OurSolutionThreeItemData = {
  title: string;
  description: string;
  image: string
};

export type OurSolutionThreeConfig = {
  titleColor: string;
  descriptionColor: string;
  content: OurSolutionThreeItemData[];
};
export type OurSolutionThreeData = {
  title: TextData;
  description: TextData;
  postTitle: TextData;
  config: OurSolutionThreeConfig;
};

// ---------------------- Three --------------------

export type OurSolutionFourData = {
  postTitle: TextData;
  title: TextData;
  description: TextData;
  image: ImageData;
  solutions_1: TextData
  solutions_2: TextData
  solutions_3: TextData
  solutions_4: TextData
};


export type GenericOurSolutionConfig =
  | OurSolutionConfig
  | OurSolutionTwoConfig