import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Iconify from 'src/components/iconify';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { FeatureElevenItemData } from '../types';

type Props = {
  data: FeatureElevenItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
};

export default function FeaturElevenItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
}: Props) {
  const { description, icon, title } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const primaryColor = paletteColorsMap['primary.main'];
  const secondaryColor = paletteColorsMap['secondary.main'];
  // const lighterColor = lighten(baseColor, 0.6);
  return (
    <Card
      sx={{
        // py: 2,
        minHeight: 300,
        bgcolor: theme.palette.background.secondary,
        borderRadius: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          width: '70px',
          height: '5px',
          background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
          borderRadius: '4px',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
        },
      }}
    >
      <CardContent>
        <Stack spacing={2} alignItems="center" justifyContent="center" p={5}>
          <Box
            sx={{
              mb: 2,
              background: `linear-gradient(to left, ${primaryColor}, ${secondaryColor})`,
              borderRadius: 2,
              color: 'common.white',
              display: 'grid',
              placeItems: 'center',
            }}
            width={55}
            height={55}
          >
            <Iconify icon={icon} width={45} height={45} color={iconColor} />
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
