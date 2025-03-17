import { Stack, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';
import { FeaureTwoItemData } from '../types';

type Props = {
  data: FeaureTwoItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
};

export default function FeatureTwoItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
}: Props) {
  const { description, icon, title } = data;

  return (
    <Stack
      sx={{
        py: 2,
        minHeight: 100,
        minWidth: 100,
      }}
    >
      <Stack
        direction="row"
        alignItems="flex-start"
        spacing={2}
        justifyContent={{ md: 'flex-start', sm: 'flex-start', xs: 'center' }}
      >
        <Iconify icon={icon} color={iconColor} width={45} height={45} />
        <Stack spacing={2} alignItems="flex-start" justifyContent="flex-start">
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
              textTransform: 'capitalize',
              width: 150,
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
              WebkitLineClamp: 4,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              maxWidth: 150,
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
