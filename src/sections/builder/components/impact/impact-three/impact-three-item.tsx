import { Box, Stack, Typography } from '@mui/material';
import { ImpactItemData } from '../types';

type Props = {
  data: ImpactItemData;
  index: number;
  titleTextColor: string;
  descriptionTextColor: string;
};

export function ImpactThreeItem({ data, index, descriptionTextColor, titleTextColor }: Props) {
  const { description, title } = data;

  const renderIcon = (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: 48,
        height: 48,
        position: 'absolute',
        left: 0,
        right: 0,
        top: -24,
        margin: 'auto',
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        border: '6px solid #FFFFFF',
        boxSizing: 'content-box',
        color: 'common.white',
        fontSize: 20,
        fontWeight: 600,
      }}
    >
      {index}
    </Box>
  );

  return (
    <Box
      sx={{
        p: 4,
        pt: 7,
        height: '100%',
        borderRadius: '6px',
        position: 'relative',
        bgcolor: 'common.neutral',
        transition: 'background 0.15s',
        '&:hover': {
          bgcolor: 'background.neutral',
        },
      }}
    >
      {renderIcon}

      <Stack spacing={2}>
        <Typography variant="h5" color={titleTextColor}>
          {title}
        </Typography>

        <Typography variant="body1" color={descriptionTextColor}>
          {description}
        </Typography>
      </Stack>
    </Box>
  );
}
