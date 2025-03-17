import { Card, CardContent, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { FeaureNineItemData } from '../types';

type Props = {
  data: FeaureNineItemData;
  lightColor: string;
  darkColor: string;
};

export default function FeatureNineItem({ data, lightColor, darkColor }: Props) {
  const { description, icon, title } = data;

  return (
    <Card
      sx={{
        py: 2,
        minHeight: '290',
        bgcolor: darkColor,
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <Iconify icon={icon} width={55} color={lightColor} />

          <Typography
            variant="h6"
            color={lightColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
              mx: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color={lightColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
              mx: 1,
            }}
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
