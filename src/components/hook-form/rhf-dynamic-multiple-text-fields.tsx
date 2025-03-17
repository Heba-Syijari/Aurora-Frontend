import { Box, Stack } from '@mui/material';
import React from 'react';
import { useFieldArray } from 'react-hook-form';
import Iconify from '../iconify/iconify';
import { AddButton, RemoveButton } from '../styled/button';

// ----------------------------------------------------------------------

type Props = {
  name: string;
  renderField: (props: { fieldNamePrefix: string; index: number }) => React.ReactNode;
  defaultValuesForNewField: Record<string, any> | string;
  AppendInputButton?: (props: { onClick: () => void }) => React.ReactElement;
  numberOfStaticFields?: number;
  unregisterOnUnmount?: boolean;
  maxNumberOfFields?: number;
};

export default function RHFDynamicMultipleTextFields({
  name,
  renderField,
  defaultValuesForNewField,
  AppendInputButton,
  numberOfStaticFields = 0,
  maxNumberOfFields,
  unregisterOnUnmount,
}: Props) {
  const { fields, append, remove } = useFieldArray({
    name, // unique name for your Field Array
    shouldUnregister: unregisterOnUnmount,
  });

  const handleAppend = () => {
    append(
      typeof defaultValuesForNewField === 'object'
        ? { ...defaultValuesForNewField }
        : defaultValuesForNewField
    );
  };

  return (
    <Stack spacing={3}>
      {fields.map((field, index) => {
        const fieldNamePrefix = `${name}.${index}`;

        return (
          <Box key={field.id} sx={{ position: 'relative' }}>
            {index >= numberOfStaticFields && (
              <RemoveButton title="remove the field" onClick={() => remove(index)}>
                <Iconify icon="clarity:remove-line" />
              </RemoveButton>
            )}

            {renderField({ fieldNamePrefix, index })}
          </Box>
        );
      })}
      {maxNumberOfFields && maxNumberOfFields >= fields.length ? (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <></>
      ) : (
        <Box>
          {AppendInputButton && <AppendInputButton onClick={handleAppend} />}

          {!AppendInputButton && (
            <AddButton variant="soft" onClick={handleAppend}>
              +
            </AddButton>
          )}
        </Box>
      )}
    </Stack>
  );
}
