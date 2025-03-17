import { Box } from '@mui/material';
import { extractYoutubeId } from './utils';

type YoutubeEmbedProps = {
  url: string;
  width: string | number;
  height: string | number;
};

export default function YoutubeEmbed({ url, width, height }: YoutubeEmbedProps) {
  const embedId = extractYoutubeId(url);

  return (
    <Box sx={{ width, height: { xs: 214, sm: height } }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={`Embedded youtube ${embedId}`}
        style={{ border: 'none' }}
      />
    </Box>
  );
}
