import { IPost } from './blog';
import { IDomainRegistration } from './domain';
import { IIntellectualProperty } from './intellectual-property';
import { IMedia } from './media';
import { ContentTypeVariationType } from './website-content-type';
import { PresentationVolumeType } from './website-presentation';

export type IProjectTargetType = {
  title: string;
  description: string;
  imageUrl: string;
};

export type IProject = {
  id: string;
  name: string;
  purpose: string;
  description: string;
  contentType: ContentTypeVariationType;
  presentationVolume: PresentationVolumeType;
  keywords: string[];
  intellectualProperty: IIntellectualProperty;
  similarWebsites: string[];
  websiteLocation: string;
  mainLanguage: string;
  audience: IProjectAudience;
  settings: IProjectSettings;
  pages: IPage[];
  posts: IPost[];
  media: IMedia[];
  publicURL: string;
  contactMessages?: IContactMessage[];
  cdnPullZoneId?: number;
  plugins?: IPlugin[];
  domainRegistration?: IProjectDomainRegistration;
};

export interface IProjectAudience {
  age: string[];
  knowledge: string[];
  gender: string[];
  language: string[];
  organizations?: string[];
  countries?: string[];
}

export interface IProjectSettings {
  projectId: string;
  logoType: 'text' | 'image';
  logoValue: string;
  fontFamily: string;
  palette: {
    primary: string;
    secondary: string;
    neutral: string;
    titles: string;
    subTitles: string;
  };
}

export interface IProjectGeneration {
  id: number;
  projectId: string;
  status: ProjectGenerationStatusVariation;
  logs?: string;
  error?: string;
  createdAt: Date;
}

export enum ProjectGenerationStatus {
  RUNNING = 'RUNNING',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
}

export type ProjectGenerationStatusVariation = `${ProjectGenerationStatus}`;

export interface IContactMessage {
  id: number;
  name: string;
  email: string;
  description: string;
  createdAt: string;
}

export interface ITheme {
  id: number;
  name: string;
  thumbnail: string;
}

export interface IPage {
  id: number;
  title: string;
  description: string;
  projectId: string;
  themeId: number;
  slug?: string;
  components: IPageComponent[];
}

export interface IPageComponent {
  id: number;
  pageId: number;
  componentId: number;
  order: number;
  data: any;
  component: IComponent;
}

export interface IComponent {
  id: number;
  image: string;
  name: string;
  type: ComponentVariationType;
}

// ------ Component type ------------------------

export enum ComponentVariation {
  HERO = 'HERO',
  ABOUT = 'ABOUT',
  FAQ = 'FAQ',
  BLOGS = 'BLOGS',
  IMPACT = 'IMPACT',
  VIDEO = 'VIDEO',
  IMPORTANCE = 'IMPORTANCE',
  SPECIAL_TIMES = 'SPECIAL_TIMES',
  CONTACT = 'CONTACT',
  TEAM = 'TEAM',
  FEATURES = 'FEATURES',
  GALLERY = 'GALLERY',
  FOOTER = 'FOOTER',
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  TERMS_AND_SERVICES = 'TERMS_AND_SERVICES',
  COPY_WRITE = 'COPY_WRITE',
  SUBSCRIPTION = 'SUBSCRIPTION',
  HOW_IT_WORKS = 'HOW_IT_WORKS',
  SLIDER = 'SLIDER',
  OUR_CLIENTS = 'OUR_CLIENTS', // added by hsn
  OUR_SOLUTION = 'OUR_SOLUTION', // added by hsn
  MWSSAGE_WITH_ACTION = 'MESSAGE_WITH_ACTION',
}

export type ComponentVariationType = `${ComponentVariation}`;

// ------ Content type ------------------------

export type IProjectContentType = {
  id: number;
  name: string;
  parentId?: number | null;
};

// ------ Plugins ------------------------

export enum Plugin {
  IADAM = 'IADAM',
}

export const supportedPlugins = ['IADAM'] as const;

export type PluginVariation = (typeof supportedPlugins)[number];

export type IPlugin = {
  id: number;
  key: string;
  value: string;
  variation: PluginVariation;
  projectId: string;
};

export type IProjectDomainRegistration = {
  projectId: string;
  domainRegistrationId: number;
  domainRegistration?: IDomainRegistration;
};
