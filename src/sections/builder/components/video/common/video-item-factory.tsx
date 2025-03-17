import { Box } from '@mui/material';
import { YoutubeEmbed } from './youtube';
import { isYoutubeURL } from './youtube/utils';

type Props = {
  url: string;
  height: string | number;
  borderRadius?: string | number;
};

export function VideoItemFactory({ height, url, borderRadius }: Props) {
  const isYoutube = isYoutubeURL(url);

  return (
    <Box sx={{ borderRadius, backgroundColor: 'black', overflow: 'hidden' }}>
      {isYoutube && <YoutubeEmbed url={url} width="100%" height={height} />}

      {!isYoutube && (
        <video width="100%" height={height} controls>
          <source src={url} type="video/mp4" />
          <track kind="captions" />
        </video>
      )}
    </Box>
  );
}
