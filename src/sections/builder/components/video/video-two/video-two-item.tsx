import { IVideo } from 'src/types/media';
import { VideoItemFactory } from '../common';

type Props = {
  video: IVideo;
  height: string | number;
};

export function VideoTwoItem({ video, height }: Props) {
  return <VideoItemFactory url={video.path} height={height} borderRadius="24px" />;
}
