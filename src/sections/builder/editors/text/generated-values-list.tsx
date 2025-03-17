import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import { Chip, Stack, Typography } from '@mui/material';
import SimplePagination from 'src/components/pagination/simple-pagination';

type GeneratedTextChipProps = {
  selected?: boolean;
};

const GeneratedTextChip = styled(Chip)<GeneratedTextChipProps>(({ theme, selected }) => {
  const selectedAttributes = {
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.text.primary,
    boxShadow: `0 0 0 1px ${theme.palette.primary.main}`,
  };

  return {
    display: 'block',
    fontSize: '0.875rem',
    height: 'auto',
    padding: `${theme.spacing(2)} 0`,
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.spacing(1),
    '&:hover': { ...selectedAttributes },
    ...(selected ? selectedAttributes : {}),
    '& .MuiChip-label': {
      whiteSpace: 'initial',
      display: 'inline-block',
    },
  };
});

type GeneratedValuesListProps = {
  items: string[];
  onItemSelect: (v: string) => void;
  isLoading?: boolean;
};

const ITEMS_PER_CHUNK = 3;

export default function GeneratedValuesList({
  items,
  onItemSelect,
  isLoading,
}: GeneratedValuesListProps) {
  const [chunkNumber, setChunkNumber] = useState(0);

  const itemsChunk = items.slice(
    ITEMS_PER_CHUNK * chunkNumber,
    ITEMS_PER_CHUNK * (chunkNumber + 1)
  );

  return (
    <>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        {items.length} Result{items.length > 1 ? 's' : ''} generated with AI
      </Typography>
      <Stack spacing={2}>
        {itemsChunk.map((item, i) => (
          <GeneratedTextChip
            key={i}
            label={item}
            onClick={() => {
              onItemSelect(item);
            }}
            disabled={isLoading}
          />
        ))}
        <SimplePagination
          onPrevClick={() => {
            setChunkNumber((prev) => prev - 1);
          }}
          disabledPrev={chunkNumber === 0}
          onNextClick={() => {
            setChunkNumber((prev) => prev + 1);
          }}
          disabledNext={chunkNumber >= Math.floor((items.length - 1) / ITEMS_PER_CHUNK)}
        />
      </Stack>
    </>
  );
}
