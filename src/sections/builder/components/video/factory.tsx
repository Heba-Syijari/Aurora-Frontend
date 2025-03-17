import dynamic from 'next/dynamic';
import { IVideo } from 'src/types/media';
import { VideoComponentName } from './types';
import { VideoOneProps } from './video-one/video-one';
import { VideoTwoProps } from './video-two/video-two';

const VideoOne = dynamic(() => import('./video-one'), { ssr: false });
const VideoTwo = dynamic(() => import('./video-two'), { ssr: false });

type ComponentProps =
  | (VideoOneProps & {
      name: VideoComponentName.VIDEO_ONE;
    })
  | (VideoTwoProps & {
      name: VideoComponentName.VIDEO_TWO;
    });

type Props = ComponentProps & {
  videos: IVideo[];
  editMode?: boolean;
};

export default function VideoFactory({ name, videos, data, ...rest }: Props) {
  switch (name) {
    case VideoComponentName.VIDEO_ONE:
      return <VideoOne videos={videos} data={data} {...rest} />;

    case VideoComponentName.VIDEO_TWO:
      return <VideoTwo videos={videos} data={data} {...rest} />;

    default:
      return null;
  }
}
