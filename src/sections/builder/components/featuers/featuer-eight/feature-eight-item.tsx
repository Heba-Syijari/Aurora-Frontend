import { Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { FeaureEightItemData } from '../types';

type Props = {
  data: FeaureEightItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
};

export default function FeatureEightItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
}: Props) {
  const { description, icon, title } = data;

  return (
    <Stack spacing={2} alignItems="center" justifyContent="center">
      <Iconify icon={icon} color={iconColor} width={45} height={45} />
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
          maxWidth: 200,
          textTransform: 'uppercase',
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
          textAlign: 'center',
          maxWidth: 200,
        }}
      >
        {description}
      </Typography>
    </Stack>
  );
}
