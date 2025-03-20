import { IMedia } from 'src/types/media';

export class MediaMapper {
  static fromApi(media: any): IMedia {
    return {
      id: media.id,
      title: media.title,
      path: media.path,
      type: media.type,
    };
  }
}
