import { Box, Stack, Typography } from '@mui/material';
import { ImpactItemData } from '../types';

type Props = {
  data: ImpactItemData;
  titleTextColor: string;
  descriptionTextColor: string;
};

export function ImpactFourItem({ data, descriptionTextColor, titleTextColor }: Props) {
  const { description, title } = data;

  return (
    <Box
      sx={{
        p: 4,
        height: '100%',
        borderRadius: '6px',
        bgcolor: 'common.neutral',
        textAlign: 'center',
        transition: 'background 0.15s',
        '&:hover': {
          bgcolor: 'background.neutral',
        },
      }}
    >
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
