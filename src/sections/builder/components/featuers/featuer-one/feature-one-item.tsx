import { Card, CardContent, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { FeaureOneItemData } from '../types';

type Props = {
  data: FeaureOneItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
};

export default function FeatureOneItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
}: Props) {
  const { description, icon, title } = data;

  return (
    <Card
      sx={{
        borderTop: '4px solid',
        borderColor: 'primary.main',
        py: 2,
        minHeight: '270',
      }}
    >
      <CardContent>
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
              textAlign: 'center',
              mx: 1,
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
              mx: 1,
              maxWidth: 200,
            }}
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
