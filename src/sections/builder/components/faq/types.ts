import { TextData } from '../../types';

export enum FAQComponentName {
  FAQ_ONE = 'FAQ_ONE',
  FAQ_TWO = 'FAQ_TWO',
  FAQ_THREE = 'FAQ_THREE',
  FAQ_FOUR = 'FAQ_FOUR',
  FAQ_FIVE = 'FAQ_FIVE',
  FAQ_SIX = 'FAQ_SIX',
  FAQ_SEVEN = 'FAQ_SEVEN',
  FAQ_EIGHT = 'FAQ_EIGHT',
}

export type FAQComponentNameType = `${FAQComponentName}`;

export type FAQItemData = {
  question: string;
  answer: string;
};

export type FAQConfig = {
  questionTextColor: string;
  answerTextColor: string;
  items: FAQItemData[];
};

type FAQData = {
  title: TextData;
  description: TextData;
  config: FAQConfig;
};

export type FAQOneData = FAQData;

export type FAQTwoData = FAQData;

export type FAQThreeData = FAQData;

export type FAQFourData = FAQData;

export type FAQFiveData = FAQData;

export type FAQSixData = FAQData;

export type FAQSevenData = FAQData;

export type FAQEightData = FAQData; 