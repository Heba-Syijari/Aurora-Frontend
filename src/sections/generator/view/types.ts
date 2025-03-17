import { IIntellectualProperty } from 'src/types/intellectual-property';
import { ComponentVariationType, PluginVariation } from 'src/types/project';
import { IWebsiteContentType } from 'src/types/website-content-type';
import { PresentationVolumeType } from 'src/types/website-presentation';

export type IWebsiteStory = {
  name: string;
  description: string;
  keywords: string[];
  generateContentByAi: boolean;

};

export type IWebsiteInfo = {
  similarWebsites: string[];
  websiteLocation: string;
  mainLanguage: string;
};

// ------ Website Presentation ---------------------------------------------------- //

export type WebsitePresentation = {
  volume: PresentationVolumeType;
  visualTypeIds: number[];
};

// ------ Website Content ---------------------------------------------------- //

export type PostContentItem = {
  title: string;
  description: string;
};

export const contentTypes = ['text', 'video', 'audio'] as const;

export type MediaContentItemType = (typeof contentTypes)[number];

export type MediaContentItem = {
  title: string;
  value: string;
  type: MediaContentItemType;
};

export type WebsiteContentDataType = {
  hasContent: boolean;
  items: MediaContentItem[];
};

// ------ Audience ---------------------------------------------------- //

export type WebsiteAudience = {
  age: string[];
  gender: string[];
  organizations?: string[];
  countries?: string[];
};

// ------ Plugins ---------------------------------------------------- //

export type IWebsitePlugins = {
  plugins: PluginVariation[];
};

// ------ Design ---------------------------------------------------- //

export type LogoType = 'text' | 'image';
export type LogoValue = string | File;
export type ModeType = 'dark' | 'light';
export type PaletteType = {
  primary: string;
  secondary: string;
  neutral: string;
  titles: string;
  subTitles: string;
};

export type WebsiteDesignType = {
  logoType: LogoType;
  logoValue: LogoValue;
  palette: PaletteType;
  fontFamily: string;
  themeId: number;
  mode: ModeType;
};

export type WebsiteSectionsType = {
  type: ComponentVariationType;
  component: number;
  order?: number;
}[];

// ------ Project Data Type ---------------------------------------------------- //

export type ProjectData = {
  type: string;
  purpose: string;
  websiteStory: IWebsiteStory;
  websiteInfo: IWebsiteInfo;
  intellectualProperty: IIntellectualProperty;
  websitePresentation: WebsitePresentation;
  websiteContentType: IWebsiteContentType;
  websiteContent: WebsiteContentDataType;
  websiteAudience: WebsiteAudience;
  websiteDesign: WebsiteDesignType;
  websitePlugins: IWebsitePlugins;
  WebsiteSections: WebsiteSectionsType;
};
