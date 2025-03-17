import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import { FeaureTenItemData } from '../types';

type Props = {
  data: FeaureTenItemData;
  lightTextColor: string;
  darkTextColor: string;
  lightBackgroundColor: string;
  darkbackgroundColor: string;
  index: number;
};

export default function FeatureTenItem({
  data,
  lightTextColor,
  darkTextColor,
  lightBackgroundColor,
  darkbackgroundColor,
  index,
}: Props) {
  const { description, icon, title } = data;

  return (
    <Card
      sx={{
        py: 2,
        my: 4,
        minHeight: 260,
        mt: index % 2 === 0 ? 8 : 0,
        bgcolor: index % 2 !== 0 ? lightBackgroundColor : darkbackgroundColor,
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <Box
            sx={{
              mb: 2,
              bgcolor: index % 2 === 0 ? lightBackgroundColor : darkbackgroundColor,
              borderRadius: '50%',
              color: index % 2 !== 0 ? lightBackgroundColor : darkbackgroundColor,
              display: 'grid',
              placeItems: 'center',
            }}
            width={50}
            height={50}
          >
            <Iconify icon={icon} width={35} />
          </Box>
          <Typography
            variant="h6"
            color={index % 2 === 0 ? lightTextColor : darkTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 1,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
              textAlign: 'center',
              mx: 1,
              textTransform: 'capitalize',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color={index % 2 === 0 ? lightTextColor : darkTextColor}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
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
