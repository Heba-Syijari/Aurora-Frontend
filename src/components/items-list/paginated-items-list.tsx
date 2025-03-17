import React, { useState } from 'react';

import { Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import SimplePagination from 'src/components/pagination/simple-pagination';
import Iconify from '../iconify/iconify';

type PaginatedItemsListProps = {
  items: string[];
  renderItem: (item: string, index: number) => React.ReactNode;
  itemsPerChunk?: number;
  itemsInRow?: number;
  onClearClick?: () => void;
};

const ITEMS_PER_CHUNK = 3;

export default function PaginatedItemsList({
  items,
  renderItem,
  itemsPerChunk = ITEMS_PER_CHUNK,
  itemsInRow = 1,
  onClearClick,
}: PaginatedItemsListProps) {
  const [chunkNumber, setChunkNumber] = useState(0);

  const itemsChunk = items.slice(itemsPerChunk * chunkNumber, itemsPerChunk * (chunkNumber + 1));

  const itemRowSpan = 12 / (itemsInRow > 0 ? itemsInRow : 1);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
        <Typography variant="subtitle2">
          {items.length} Result{items.length > 1 ? 's' : ''} generated with AI
        </Typography>
        {onClearClick && (
          <Tooltip title="Clear results" placement="top">
            <IconButton onClick={onClearClick}>
              <Iconify icon="mdi:clear-box-outline" />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
      <Stack spacing={2}>
        <Grid container spacing={2}>
          {itemsChunk.map((item, i) => (
            <Grid key={i} item xs={12} sm={itemRowSpan}>
              {renderItem(item, i)}
            </Grid>
          ))}
        </Grid>
        <SimplePagination
          onPrevClick={() => {
            setChunkNumber((prev) => prev - 1);
          }}
          disabledPrev={chunkNumber === 0}
          onNextClick={() => {
            setChunkNumber((prev) => prev + 1);
          }}
          disabledNext={chunkNumber >= Math.floor((items.length - 1) / itemsPerChunk)}
        />
      </Stack>
    </>
  );
}
