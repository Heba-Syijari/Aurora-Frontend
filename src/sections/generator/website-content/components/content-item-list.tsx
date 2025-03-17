import { Button, Grid } from '@mui/material';
import React from 'react';
import Iconify from 'src/components/iconify/iconify';
import { ContentItemField } from '../types';
import ContentItem from './content-item';

interface Props extends React.PropsWithChildren {
  fields: ContentItemField[];
  onAdd: VoidFunction;
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

export default function ContentItemList({ fields, onAdd, onDelete, onEdit }: Props) {
  const hasFields = fields.length > 0;

  return (
    <Grid container spacing={2}>
      {fields.map((field, index) => {
        const isLastField = index === fields.length - 1;
        const itemGridSpan = 4;

        return (
          <Grid key={field.id} item xs={12} sm={6} md={itemGridSpan - (isLastField ? 1 : 0)}>
            <ContentItem
              field={field}
              onDeleteClick={() => onDelete(index)}
              onEditClick={() => onEdit(index)}
            />
          </Grid>
        );
      })}

      <Grid item xs={12} sm={hasFields ? 1 : 12}>
        <Button
          variant={hasFields ? 'outlined' : 'soft'}
          size="large"
          onClick={onAdd}
          sx={{
            gap: 1,
            width: '100%',
            ...(hasFields && { minWidth: 0, p: 1, height: '100%' }),
          }}
        >
          <Iconify icon="mdi:plus" />

          {!hasFields && 'Add your content'}
        </Button>
      </Grid>
    </Grid>
  );
}
