import { yupResolver } from '@hookform/resolvers/yup';
import { MenuItem } from '@mui/material';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useGetPlanDetails } from 'src/api/plan';
import { useUpdatePreferences } from 'src/api/user';
import { useAuthContext } from 'src/auth/hooks';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFSelect } from 'src/components/hook-form';
import { useSnackbar } from 'src/components/snackbar';
import { BaseLoadingButton } from 'src/components/styled/button';
import { IUserPreferences } from 'src/types/user';
import * as Yup from 'yup';
import { getImageModels, getTextModels } from './utils';

// ----------------------------------------------------------------------

function getDefaultValues(preferences?: IUserPreferences) {
  return {
    imageModel: preferences?.imageModel || '',
    textModel: preferences?.textModel || '',
  };
}

// ----------------------------------------------------------------------

export default function UserPreferencesForm() {
  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();
  const { user, subscription, refresh } = useAuthContext();
  const { updatePreferences } = useUpdatePreferences();
  const { plan } = useGetPlanDetails(subscription?.planId || 0);

  const imageModels = useMemo(
    () => getImageModels(plan, user?.preferences),
    [plan, user?.preferences]
  );
  const textModels = useMemo(
    () => getTextModels(plan, user?.preferences),
    [plan, user?.preferences]
  );

  const schema = Yup.object().shape({
    imageModel: Yup.string().required(),
    textModel: Yup.string().required(),
  });

  const defaultValues = getDefaultValues(user?.preferences);

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updatePreferences({
        imageModel: data.imageModel,
        textModel: data.textModel,
      });

      enqueueSnackbar('Update success!');

      await refresh();
    } catch (error) {
      console.error(error);
      enqueueErrorSnackbar(error.message);
    }
  });

  useEffect(() => {
    reset(getDefaultValues(user?.preferences));
  }, [reset, user?.preferences]);

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack
        component={Card}
        spacing={3}
        sx={{ backgroundColor: (theme) => theme.palette.background.neutral, p: 4 }}
      >
        <FormGroup label="Image model" labelFor="imageModel">
          <RHFSelect id="imageModel" name="imageModel">
            {imageModels.map((item) => (
              <MenuItem value={item} key={item} sx={{ textTransform: 'capitalize' }}>
                {item}
              </MenuItem>
            ))}
          </RHFSelect>
        </FormGroup>

        <FormGroup label="Text model" labelFor="textModel">
          <RHFSelect
            id="textModel"
            name="textModel"
            sx={{ '.MuiSelect-select': { textTransform: 'uppercase' } }}
          >
            {textModels.map((item) => (
              <MenuItem value={item} key={item} sx={{ textTransform: 'uppercase' }}>
                {item}
              </MenuItem>
            ))}
          </RHFSelect>
        </FormGroup>

        <BaseLoadingButton
          color="primary"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{ alignSelf: 'flex-start' }}
        >
          Save Changes
        </BaseLoadingButton>
      </Stack>
    </FormProvider>
  );
}
