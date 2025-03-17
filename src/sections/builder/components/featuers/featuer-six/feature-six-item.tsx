import { Card, CardContent, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { FeaureSixItemData } from '../types';

type Props = {
  data: FeaureSixItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
};

export default function FeatureSixItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
}: Props) {
  const { description, icon, title } = data;

  return (
    <Card
      sx={{
        py: 2,
        minHeight: '230',
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="flex-start" justifyContent="center">
          <Typography
            variant="h5"
            color={titleTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textTransform: 'capitalize',
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
              WebkitLineClamp: 2,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
            }}
          >
            {description}
          </Typography>
          <Iconify icon={icon} color={iconColor} width={50} height={50} />
        </Stack>
      </CardContent>
    </Card>
  );
}
