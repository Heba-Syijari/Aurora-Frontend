import React from 'react';
import { useFieldArray } from 'react-hook-form';
import { TextFieldProps } from '@mui/material/TextField';
import { Box, Grid } from '@mui/material';
import { AddButton, RemoveButton } from '../styled/button';
import Iconify from '../iconify/iconify';
import RHFTextField from './rhf-text-field';

// ----------------------------------------------------------------------

type Props = TextFieldProps & {
  name: string;
  AppendInputButton?: (props: { onClick: () => void }) => React.ReactElement;
  itemsInRow?: number;
  numberOfStaticFields?: number;
  unregisterOnUnmount?: boolean;
};

export default function RHFDynamicTextField({
  name,
  AppendInputButton,
  itemsInRow = 1,
  numberOfStaticFields = 0,
  unregisterOnUnmount,
  ...other
}: Props) {
  const { fields, append, remove } = useFieldArray({
    name, // unique name for your Field Array
    shouldUnregister: unregisterOnUnmount,
  });

  const handleAppend = () => {
    append({ value: '' });
  };

  return (
    <Grid container spacing={2}>
      {fields.map((field, index) => {
        const fieldName = `${name}.${index}.value`;
        const isLastField = fields.length - 1 === index;
        const gridItemSM = 12 / Math.min(Math.max(itemsInRow, 1), 12);

        return (
          <Grid item key={field.id} xs={12} sm={gridItemSM - (isLastField ? 1 : 0)}>
            <Box sx={{ position: 'relative' }}>
              {index >= numberOfStaticFields && (
                <RemoveButton title="remove the field" onClick={() => remove(index)}>
                  <Iconify icon="clarity:remove-line" />
                </RemoveButton>
              )}
              <RHFTextField name={fieldName} {...other} />
            </Box>
          </Grid>
        );
      })}

      <Grid item xs={12} sm={1}>
        {AppendInputButton && <AppendInputButton onClick={handleAppend} />}

        {!AppendInputButton && (
          <AddButton variant="soft" onClick={handleAppend}>
            +
          </AddButton>
        )}
      </Grid>
    </Grid>
  );
}
