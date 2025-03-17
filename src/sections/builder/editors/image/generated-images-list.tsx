import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import { Box, Chip, Grid, Typography } from '@mui/material';
import SimplePagination from 'src/components/pagination/simple-pagination';
import Image from 'src/components/image/image';

type GeneratedImageChipProps = {
  selected?: boolean;
};

const GeneratedImageChip = styled(Chip)<GeneratedImageChipProps>(({ theme, selected }) => {
  const selectedAttributes = {
    boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
  };

  return {
    display: 'block',
    height: 'auto',
    borderRadius: theme.spacing(1),
    overflow: 'hidden',
    ...(selected ? selectedAttributes : {}),
    '&:hover': { ...selectedAttributes },
    '& .MuiChip-label': {
      display: 'block',
      padding: 0,
    },
  };
});

type GeneratedImagesListProps = {
  items: string[];
  onItemSelect: (v: string) => void;
  selectedItem: string;
};

const ITEMS_PER_CHUNK = 4;

export default function GeneratedImagesList({
  items,
  onItemSelect,
  selectedItem,
}: GeneratedImagesListProps) {
  const [chunkNumber, setChunkNumber] = useState(0);

  const itemsChunk = items.slice(
    ITEMS_PER_CHUNK * chunkNumber,
    ITEMS_PER_CHUNK * (chunkNumber + 1)
  );

  return (
    <Box>
      <Typography variant="body2" fontWeight={500} sx={{ mb: 1 }}>
        {items.length} Result{items.length > 1 ? 's' : ''} generated with AI
      </Typography>

      <Grid container spacing={2}>
        {itemsChunk.map((item, i) => (
          <Grid item xs={6} key={i}>
            <GeneratedImageChip
              label={
                <Image
                  src={item}
                  alt={`image_${i}`}
                  sx={{ width: '100%', height: 128, objectFit: 'cover' }}
                />
              }
              onClick={() => {
                onItemSelect(item);
              }}
              selected={item === selectedItem}
            />
          </Grid>
        ))}

        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </Box>
  );
}
