import { Box, FormHelperText, Stack, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { RHFRadioGroup, RHFTextField, RHFUpload } from 'src/components/hook-form';
import { TextButton } from 'src/components/styled/button';
import { useBoolean } from 'src/hooks/use-boolean';
import { LogoType, LogoValue } from 'src/sections/generator/view/types';
import { GenerateLogoDialog } from '../../generate-logo-dialog';
import { logoOptions } from '../data';

type LogoFieldsProps = {
  defaultType: LogoType;
  onValueChange: (value: LogoValue) => void;
  onTypeChange: (value: LogoType) => void;
};

export default function LogoFields({ defaultType, onValueChange, onTypeChange }: LogoFieldsProps) {
  const [selectedLogoType, setSelectedLogoType] = useState<LogoType>(defaultType);

  const logoDialog = useBoolean();

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        onValueChange(newFile);
      }
    },
    [onValueChange]
  );

  const handleLogoTypeChange = (type: LogoType) => {
    setSelectedLogoType(type);
    onTypeChange(type);
  };

  const handleSelectLogoValue = (logo: { type: LogoType; value: string }) => {
    handleLogoTypeChange(logo.type);

    onValueChange(logo.value);
    logoDialog.onFalse();
  };

  return (
    <>
      <Stack spacing={2}>
        <Typography variant="body1" fontWeight={500} textTransform="capitalize">
          Logo
        </Typography>

        <RHFRadioGroup
          name="logoType"
          options={logoOptions.map((option) => ({
            label: option.title,
            value: option.name,
          }))}
          row
          onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleLogoTypeChange(e.target.value as LogoType);
          }}
        />

        <Box>
          {selectedLogoType === 'text' && <RHFTextField name="logoValue" placeholder="Type here" />}
          {selectedLogoType === 'image' && (
            <RHFUpload name="logoValue" onDrop={handleDrop} placeholderVariant="custom" />
          )}

          <FormHelperText>
            Don&apos;t have logo?{' '}
            <TextButton onClick={logoDialog.onTrue} type="button" sx={{ color: 'primary.main' }}>
              Generate one
            </TextButton>
          </FormHelperText>
        </Box>
      </Stack>

      <GenerateLogoDialog
        open={logoDialog.value}
        onCloseClicked={logoDialog.onFalse}
        onValueSelected={handleSelectLogoValue}
      />
    </>
  );
}
