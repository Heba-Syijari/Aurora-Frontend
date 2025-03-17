import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import FormProvider, { RHFSelect, RHFTextField } from 'src/components/hook-form';
import {
  Dialog,
  IconButton,
  Typography,
  DialogTitle,
  Stack,
  DialogContent,
  DialogActions,
  MenuItem,
  Box,
} from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import { BaseButton } from 'src/components/styled/button';
import { useEnhanceText } from 'src/api/content';
import { useBoolean } from 'src/hooks/use-boolean';
import EnhanceUsingAIChip from 'src/components/custom-chip/enhance-using-ai';
import { MediaContentItem, MediaContentItemType, contentTypes } from '../../view/types';
import GeneratedTextList from './generated-text-list';

type AddContentDialogProps = {
  open: boolean;
  onClose: () => void;
  onAdd: (data: MediaContentItem) => void;
  onUpdate: (data: MediaContentItem) => void;
  data?: MediaContentItem;
};

const options = contentTypes;

export default function AddContentDialog({
  open,
  onClose,
  onAdd,
  onUpdate,
  data,
}: AddContentDialogProps) {
  const [generatedTexts, setGeneratedTexts] = useState<string[]>([]);
  const { enhance } = useEnhanceText();
  const enhanceTextLoading = useBoolean();

  const handleEnhanceText = async () => {
    const text = data?.value;

    if (text) {
      enhanceTextLoading.onTrue();
      try {
        const enhancedText = await enhance(text);
        setGeneratedTexts((prev) => [...prev, enhancedText]);
      } catch (err) {
        console.log(err);
      } finally {
        enhanceTextLoading.onFalse();
      }
    }
  };

  const schema = Yup.object().shape({
    type: Yup.string().oneOf(contentTypes).required(),
    title: Yup.string().required(),
    value: Yup.string()
      .required()
      .when('type', {
        is: (type: MediaContentItemType) => type !== 'text',
        then: (sch) => sch.url(),
        otherwise: (sch) => sch,
      }),
  });

  const defaultValues = {
    type: contentTypes[0],
    title: '',
    value: '',
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const typeWatch = methods.watch('type');

  const handleClose = () => {
    onClose();
    methods.reset({ ...defaultValues });
    setGeneratedTexts([]);
    enhanceTextLoading.onFalse();
  };

  const onSubmit = methods.handleSubmit((values) => {
    if (data) {
      onUpdate({ ...values });
    } else {
      onAdd({ ...values });
    }

    handleClose();
  });

  useEffect(() => {
    if (open && data) {
      methods.reset({ ...data });
    }
  }, [data, methods, open]);

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ backgroundColor: (theme) => theme.palette.background.primary }}>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">{data ? 'Update content' : 'Add content'}</Typography>
          <IconButton onClick={handleClose} color="inherit">
            <Iconify icon="material-symbols:close" width={24} />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ py: 2 }}>
          <FormProvider id="item-content-form" methods={methods} onSubmit={onSubmit}>
            <Stack spacing={2} sx={{ py: 1 }}>
              <RHFSelect name="type" label="Type">
                {options.map((option) => (
                  <MenuItem key={option} value={option} sx={{ textTransform: 'capitalize' }}>
                    {option}
                  </MenuItem>
                ))}
              </RHFSelect>

              <RHFTextField name="title" label="Title / Topic" placeholder="Title / Topic" />

              {typeWatch === 'text' && (
                <Box sx={{ position: 'relative' }}>
                  <RHFTextField
                    name="value"
                    label="Text content"
                    rows={5}
                    multiline
                    placeholder="Paste or write here"
                    disabled={enhanceTextLoading.value}
                  />

                  <EnhanceUsingAIChip
                    disabled={enhanceTextLoading.value}
                    onClick={handleEnhanceText}
                    sx={{ bottom: 4, right: 4 }}
                  />
                </Box>
              )}

              {typeWatch !== 'text' && (
                <RHFTextField name="value" label="Link" placeholder="https://" />
              )}
            </Stack>
          </FormProvider>

          <GeneratedTextList generatedTexts={generatedTexts} />
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseButton variant="contained" color="primary" form="item-content-form" type="submit">
          {data ? 'Update' : 'Add'}
        </BaseButton>
      </DialogActions>
    </Dialog>
  );
}
