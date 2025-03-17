import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Iconify from 'src/components/iconify';
import { FeatureElevenItemData } from '../types';

type Props = {
  data: FeatureElevenItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
};

export default function FeaturTwelveItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
}: Props) {
  const { description, icon, title } = data;
  const theme = useTheme();

  return (
    <Card
      sx={{
        // py: 2,
        minHeight: 300,
        bgcolor: 'background.secondary',

        // bgcolor: darkenBg,
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" justifyContent="center" p={5}>
          <Box
            sx={{
              mb: 2,
              backgroundColor: `${theme.palette.background.neutral}`,
              borderRadius: 2,
              color: iconColor,
              display: 'grid',
              placeItems: 'center',
              opacity: 0.8,
            }}
            width={65}
            height={65}
          >
            <Iconify icon={icon} width={50} height={50} />
          </Box>

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
              textAlign: 'center',
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
              textAlign: 'center',
            }}
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
