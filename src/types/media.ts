export const mediaTypes = ['AUDIO', 'VIDEO'] as const;

export type MediaType = (typeof mediaTypes)[number];

export interface IMedia {
  id: number;
  type: MediaType;
  title: string;
  path: string;
  description?: string;
}

export interface IVideo extends IMedia {
  type: 'VIDEO';
}

export interface IAudio extends IMedia {
  type: 'AUDIO';
}
