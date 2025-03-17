import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { BaseButton } from 'src/components/styled/button';
import * as Yup from 'yup';
import { SocialData } from '../../components/common/socials/types';
import BaseEditDialog from '../base-edit-dialog';
import { ColorBox } from '../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../common/colors';
import { RHFColorsGroup } from '../common/styled';

interface EditSocialIconDialogProps {
  defaultValue: SocialData;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (value: SocialData) => void;
}

export default function EditSocialIconDialog({
  open,
  defaultValue,
  onCloseClicked,
  onSave,
}: EditSocialIconDialogProps) {
  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    socials: Yup.object().shape({
      facebook: Yup.string().url('url must be valid').required('This field is required'),
      linkedin: Yup.string().url('url must be valid').required('This field is required'),
      twitter: Yup.string().url('url must be valid').required('This field is required'),
      instagram: Yup.string().url('url must be valid').required('This field is required'),
    }),
    socialIconsColor: Yup.string().required('The color is required'),
  });

  const defaultValues = { ...defaultValue };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit, reset, formState } = methods;
  console.log(formState.errors);

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleClose = () => {
    onCloseClicked();
    reset();
  };

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      scroll="body"
      dialogTitle="Edit Socilas"
    >
      <DialogContent>
        <FormProvider id="edit-social-icon-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={3} sx={{ py: 2 }}>
            {['facebook', 'linkedin', 'twitter', 'instagram'].map((social, i) => (
              <RHFTextField
                key={social}
                label={`${social.charAt(0).toUpperCase() + social.slice(1)}`}
                name={`socials.${social}`}
                multiline
                rows={1}
              />
            ))}
            <FormGroup label="Social icons color" labelFor="socialIconsColor">
              <RHFColorsGroup
                id="socialIconsColor"
                name="socialIconsColor"
                row
                options={paletteColors.map((color) => ({
                  value: color,
                  label: <ColorBox color={paletteColorsMap[color]} />,
                }))}
              />
            </FormGroup>
          </Stack>
        </FormProvider>
      </DialogContent>

      <DialogActions>
        <BaseButton color="primary" variant="contained" type="submit" form="edit-social-icon-form">
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
