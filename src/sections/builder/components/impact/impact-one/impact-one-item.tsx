import { Box, Stack, Typography } from '@mui/material';
import { ImpactItemData } from '../types';

type Props = {
  data: ImpactItemData;
  titleTextColor: string;
  descriptionTextColor: string;
  index: number;
};

export default function ImpactOneItem({
  data,
  titleTextColor,
  descriptionTextColor,
  index,
}: Props) {
  const { title, description } = data;

  return (
    <Box sx={{ height: '100%' }}>
      <Stack spacing={1} alignItems="flex-start">
        <Box
          sx={{
            mb: 1,
            width: 48,
            height: 48,
            bgcolor: 'primary.main',
            borderRadius: '50%',
            color: 'primary.contrastText',
            fontWeight: 600,
            fontSize: 20,
            textAlign: 'center',
            lineHeight: '48px',
          }}
        >
          {index}
        </Box>

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
