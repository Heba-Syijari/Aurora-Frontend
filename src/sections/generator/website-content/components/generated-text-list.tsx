import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

type GeneratedTextListProps = {
  generatedTexts: string[];
};

export default function GeneratedTextList({ generatedTexts }: GeneratedTextListProps) {
  if (generatedTexts.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        p: 2,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        borderRadius: (theme) => theme.spacing(1),
      }}
    >
      <Stack spacing={1}>
        {generatedTexts.map((text, i) => (
          <Typography
            key={i}
            variant="body1"
            sx={{
              ...(i > 0 && {
                borderTop: '1px solid',
                borderColor: (theme) => theme.palette.divider,
                paddingTop: (theme) => theme.spacing(1),
              }),
            }}
          >
            {text}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
