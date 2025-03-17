export enum VideoComponentName {
  VIDEO_ONE = 'VIDEO_ONE',
  VIDEO_TWO = 'VIDEO_TWO',
}

export type VideoComponentNameType = `${VideoComponentName}`;

export type VideoOneData = {
  videoId: number;
  titleTextColor: string;
  descriptionTextColor: string;
};

export type VideoTwoData = {
  videoId: number;
};

export type VideoData = {
  videoId: number;
  titleTextColor?: string;
  descriptionTextColor?: string;
};
