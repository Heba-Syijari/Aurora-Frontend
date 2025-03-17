import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import Iconify from 'src/components/iconify';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { FeaureThirteenItemData } from '../types';

type Props = {
  data: FeaureThirteenItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  iconColor: string;
  index: number;
};

export default function FeatureThirteenItem({
  data,
  titleTextColor,
  descriptionTextColor,
  iconColor,
  index,
}: Props) {
  const { description, icon, title } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const secondaryColor = paletteColorsMap['secondary.main'];
  const primaryColor = paletteColorsMap['primary.main'];
  const lightPrimary = lighten(primaryColor, 0.85);
  const lightSecondary = lighten(secondaryColor, 0.85);

  return (
    <Card
      sx={{
        boxShadow: '0px 18px 37.5px 0px rgba(0, 0, 0, 0.15)',
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Stack spacing={1} alignItems="flex-start" justifyContent="flex-start" minHeight={210}>
          <Box
            sx={{
              mb: 2,
              bgcolor: index % 2 === 0 ? lightPrimary : lightSecondary,
              borderRadius: 4,
              color: index % 2 === 0 ? primaryColor : secondaryColor,
              display: 'grid',
              placeItems: 'center',
            }}
            width={55}
            height={55}
          >
            <Iconify icon={icon} width={40} />
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
              textTransform: 'capitalize',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color={description}
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 3,
              textOverflow: 'ellipsis',
              overflowY: 'hidden',
            }}
          >
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
