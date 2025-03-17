import React from 'react';
import { Typography, Stack } from '@mui/material';
import { StyledRHFMultiCheckbox } from 'src/components/styled/checkbox';
import { CategoryOptionType } from './types';

type DiversifiedCategoriesProps = {
  options: CategoryOptionType[];
};

export default function DiversifiedCategories({ options }: DiversifiedCategoriesProps) {
  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight={500}>
        Select related Islamic Categories
      </Typography>

      <StyledRHFMultiCheckbox
        name="categories"
        options={options.map(({ id, name }) => ({ label: name, value: id }))}
        row
        sx={{ gap: 1.5 }}
      />
    </Stack>
  );
}
