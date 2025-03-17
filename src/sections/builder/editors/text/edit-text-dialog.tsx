import { yupResolver } from '@hookform/resolvers/yup';
import { Box, DialogActions, DialogContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRegenerateText } from 'src/api/content';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { BaseButton, BaseLoadingButton } from 'src/components/styled/button';
import { useProjectContext } from 'src/providers/project/project-context';
import * as Yup from 'yup';
import { ItemMetadata, TextData } from '../../types';
import BaseEditDialog from '../base-edit-dialog';
import { ColorBox } from '../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../common/colors';
import { RHFColorsGroup } from '../common/styled';
import GeneratedValuesList from './generated-values-list';

interface EditTextDialogProps {
  label: string;
  defaultValue: TextData;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (value: TextData) => void;
  getMetadataInfo: () => ItemMetadata;
  disableEditColor?: boolean;
}

export default function EditTextDialog({
  label,
  open,
  defaultValue,
  onCloseClicked,
  onSave,
  getMetadataInfo,
  disableEditColor,
}: EditTextDialogProps) {
  const [generatedValues, setGeneratedValues] = useState<string[]>([]);

  const { regenerateText, isLoading } = useRegenerateText();

  const { project } = useProjectContext();

  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    // text: Yup.string().required('The text is required'),
    // color: Yup.string().required('The color is required'),
    text: Yup.string().default(''),
    color: Yup.string().default(''),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit, reset, setValue } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleClose = () => {
    if (isLoading) return;

    onCloseClicked();
    reset();
    setGeneratedValues([]);
  };

  const handleGenerate = async () => {
    try {
      const metadata = getMetadataInfo();

      const generatedText = await regenerateText({
        ...metadata,
        projectId: project.id,
      });

      setGeneratedValues((prev) => [...prev, generatedText]);
    } catch (err) {
      console.log({ err });
    }
  };

  const handleSelectText = (value: string) => {
    setValue('text', value);
  };

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      scroll="body"
      dialogTitle="Edit text"
    >
      <DialogContent>
        <FormProvider id="edit-text-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} sx={{ py: 2 }}>
            <FormGroup label={label} labelFor="text">
              <RHFTextField
                id="text"
                name="text"
                fullWidth
                variant="outlined"
                placeholder="Type your content here."
                multiline
                autoFocus
                disabled={isLoading}
              />
            </FormGroup>

            {!disableEditColor && (
              <FormGroup label="Color">
                <RHFColorsGroup
                  name="color"
                  row
                  options={paletteColors.map((color) => ({
                    value: color,
                    label: <ColorBox color={paletteColorsMap[color]} />,
                  }))}
                />
              </FormGroup>
            )}
          </Stack>
        </FormProvider>

        {generatedValues.length > 0 && (
          <Box sx={{ py: 2 }}>
            <GeneratedValuesList
              items={generatedValues}
              onItemSelect={handleSelectText}
              isLoading={isLoading}
            />
          </Box>
        )}
      </DialogContent>

      <DialogActions>
        <BaseLoadingButton
          variant="outlined"
          onClick={handleGenerate}
          disabled={isLoading}
          loading={isLoading}
        >
          Generate
          {generatedValues.length > 0 ? ' more' : ''}
        </BaseLoadingButton>

        <BaseButton
          color="primary"
          variant="contained"
          form="edit-text-form"
          type="submit"
          disabled={isLoading}
        >
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
