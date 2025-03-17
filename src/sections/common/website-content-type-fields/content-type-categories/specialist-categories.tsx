import React from 'react';
import { Typography, Stack, MenuItem } from '@mui/material';
import { StyledRHFMultiCheckbox } from 'src/components/styled/checkbox';
import { RHFSelect } from 'src/components/hook-form';
import { CategoryOptionType } from './types';

function findSelectedOption(options: CategoryOptionType[], id?: number) {
  return options.find((option) => option.id === id);
}

type SpecialistCategoriesProps = {
  options: CategoryOptionType[];
  mainCategoryId?: number;
};

export default function SpecialistCategories({
  options,
  mainCategoryId,
}: SpecialistCategoriesProps) {
  const mainCategory = findSelectedOption(options, mainCategoryId);

  return (
    <Stack spacing={3}>
      <Stack spacing={1}>
        <Typography variant="body1" fontWeight={500}>
          Select related Islamic Categories
        </Typography>

        <RHFSelect name="mainCategory">
          <MenuItem value={0} disabled>
            Select main category
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </RHFSelect>
      </Stack>

      {!!mainCategory && (
        <Stack spacing={1}>
          <Typography variant="body1" fontWeight={500}>
            Related Sub Categories
          </Typography>

          <StyledRHFMultiCheckbox
            name="subCategories"
            options={(mainCategory.children ?? []).map(({ id, name }) => ({
              label: name,
              value: id,
            }))}
            row
            sx={{ gap: 1.5 }}
          />
        </Stack>
      )}
    </Stack>
  );
}
