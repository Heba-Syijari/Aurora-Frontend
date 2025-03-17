import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';
import { EditVideoConfig } from 'src/sections/builder/editors/video/config';
import { IVideo } from 'src/types/media';
import { VideoTwoData } from '../types';
import { VideoTwoItem } from './video-two-item';

export type VideoTwoProps = {
  data: VideoTwoData;
  setLocalData: (v: Partial<VideoTwoData>) => void;
  videos: IVideo[];
  editMode?: boolean;
};

export default function VideoTwo({ data, videos, editMode, setLocalData }: VideoTwoProps) {
  const video = useMemo(() => videos.find((v) => v.id === data.videoId), [data.videoId, videos]);

  if (!video) return null;

  return (
    <Box sx={{ py: 8 }}>
      <Container>
        <Stack spacing={1.5}>
          <Box sx={{ textAlign: 'center' }}>
            <Chip label="Video" />
          </Box>
          <Typography variant="h3" textAlign="start">
            {video.title}
          </Typography>
          <Box sx={{ width: '100%' }}>
            <EditVideoConfig
              defaultValue={data}
              videos={videos}
              editMode={editMode}
              onSave={setLocalData}
            >
              <VideoTwoItem video={video} height={600} />
            </EditVideoConfig>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
