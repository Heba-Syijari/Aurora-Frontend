import { TextData } from '../../types';
import { Socials } from '../common/socials/types';

export enum TeamComponentName {
  TEAM_ONE = 'TEAM_ONE',
  TEAM_TWO = 'TEAM_TWO',
  TEAM_THREE = 'TEAM_THREE',
  TEAM_FOUR = 'TEAM_FOUR',
}

export type BaseTeamMemberData = {
  name: string;
  specialization: string;
  image: string;
};

export type ContactData = {
  email: string;
  number: string;
  socials: Socials;
};

export type TeamMemberWithContact = BaseTeamMemberData & ContactData;

// team one types

export type TeamOneConfig = {
  nameTextColor: string;
  specializationTextColor: string;
  emailTextColor: string;
  numberTextColor: string;
  socialIconsColor: string;
  team: TeamOneItemData[];
};

export type TeamOneItemData = TeamMemberWithContact;
export type TeamOneData = {
  title: TextData;
  subTitle: TextData;
  description: TextData;
  config: TeamOneConfig;
};

// team two types
export type TeamTwoConfig = {
  nameTextColor: string;
  specializationTextColor: string;
  socialIconsColor: string;
  bioTextColor: string;
  team: TeamTwoItemData[];
};

export type TeamTwoItemData = BaseTeamMemberData &
  Omit<ContactData, 'number' | 'email'> & { bio: string };

export type TeamTwoData = {
  title: TextData;
  description: TextData;
  config: TeamTwoConfig;
};

// common types between team three and team four
export type TeamConfig = {
  nameTextColor: string;
  specializationTextColor: string;
  team: TeamItemData[];
};

export type TeamItemData = BaseTeamMemberData;

export type TeamThreeData = {
  title: TextData;
  description: TextData;
  config: TeamConfig;
};

export type TeamFourData = {
  title: TextData;
  config: TeamConfig;
};

export type GenericTeamConfig = TeamConfig | TeamOneConfig | TeamTwoConfig;
export type TeamComponentNameType = `${TeamComponentName}`;
