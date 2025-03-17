import { Box, Stack, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';
import { FeaureFiveItemData } from '../types';

type Props = {
  data: FeaureFiveItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
};

export default function FeatureFiveItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
}: Props) {
  const { description, icon, title } = data;

  return (
    <Stack spacing={2} alignItems="flex-start" justifyContent="flex-start" py={2}>
      <Box
        sx={{
          mb: 2,
          bgcolor: iconColor,
          borderRadius: '50%',
          color: 'common.white',
          display: 'grid',
          placeItems: 'center',
        }}
        width={55}
        height={55}
      >
        <Iconify icon={icon} width={45} />
      </Box>
      <Typography
        variant="h6"
        color={titleTextColor}
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 1,
          textOverflow: 'ellipsis',
          overflowY: 'hidden',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color={descriptionTextColor}
        sx={{
          display: '-webkit-box',
          overflow: 'hidden',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 6,
          textOverflow: 'ellipsis',
          overflowY: 'hidden',
          maxWidth: 250,
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}
