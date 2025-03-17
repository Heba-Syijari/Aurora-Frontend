import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import { useUpdatePassword } from 'src/api/user';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { BaseButton, BaseLoadingButton } from 'src/components/styled/button';
import { useBoolean } from 'src/hooks/use-boolean';
import * as Yup from 'yup';

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AccountChangePassword({ onClose, open }: Props) {
  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();
  const { updatePassword } = useUpdatePassword();

  const password = useBoolean();

  const schema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string()
      .required('New Password is required')
      .min(8, 'Password must be at least 8 characters')
      .test(
        'no-match',
        'New password must be different than old password',
        (value, { parent }) => value !== parent.oldPassword
      ),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword')], 'Passwords must match'),
  });

  const defaultValues = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updatePassword({
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
        confirmNewPassword: data.confirmNewPassword as string,
      });
      enqueueSnackbar('Update success!');
      reset();
    } catch (error) {
      console.error({ error });
      enqueueErrorSnackbar(error.message);
    }
  });

  const renderImage = (
    <Box
      component="svg"
      width="91px"
      height="91px"
      viewBox="0 0 91 91"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 45.5C0.5 9.5 9.5 0.5 45.5 0.5C81.5 0.5 90.5 9.5 90.5 45.5C90.5 81.5 81.5 90.5 45.5 90.5C9.5 90.5 0.5 81.5 0.5 45.5Z"
        fill="#EBF3FF"
      />
      <path
        d="M39.5 51.9999C39.5 50.8033 40.47 49.8333 41.6666 49.8333H41.6822C42.8788 49.8333 43.8489 50.8033 43.8489 51.9999C43.8489 53.1965 42.8788 54.1666 41.6822 54.1666H41.6666C40.47 54.1666 39.5 53.1965 39.5 51.9999Z"
        fill="#4E92FF"
      />
      <path
        d="M48.1511 51.9999C48.1511 50.8033 49.1212 49.8333 50.3178 49.8333H50.3333C51.5299 49.8333 52.5 50.8033 52.5 51.9999C52.5 53.1965 51.5299 54.1666 50.3333 54.1666H50.3178C49.1212 54.1666 48.1511 53.1965 48.1511 51.9999Z"
        fill="#4E92FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 22.2083C39.7177 22.2083 34.625 27.301 34.625 33.5833V39.6479C31.2947 42.7164 29.2083 47.1145 29.2083 51.9999C29.2083 61.2737 36.7262 68.7916 46 68.7916C55.2738 68.7916 62.7916 61.2737 62.7916 51.9999C62.7916 47.1145 60.7053 42.7164 57.375 39.6479V33.5833C57.375 27.301 52.2822 22.2083 46 22.2083ZM54.125 37.3013V33.5833C54.125 29.0959 50.4873 25.4583 46 25.4583C41.5127 25.4583 37.875 29.0959 37.875 33.5833V37.3013C40.2826 35.9676 43.0526 35.2083 46 35.2083C48.9473 35.2083 51.7173 35.9676 54.125 37.3013ZM46 38.4583C38.5211 38.4583 32.4583 44.5211 32.4583 51.9999C32.4583 59.4788 38.5211 65.5416 46 65.5416C53.4788 65.5416 59.5416 59.4788 59.5416 51.9999C59.5416 44.5211 53.4788 38.4583 46 38.4583Z"
        fill="#4E92FF"
      />
    </Box>
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Stack direction="row" justifyContent="flex-end" alignItems="center">
          <IconButton onClick={onClose} disabled={isSubmitting} sx={{ p: 0 }}>
            <Iconify icon="material-symbols:close" />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2} alignItems="center" width={1} pb={1}>
          {renderImage}
          <Typography variant="h6">Edit Password</Typography>
        </Stack>
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <Stack spacing={1} sx={{ backgroundColor: (theme) => theme.palette.background.paper }}>
            <FormGroup label="Current Password" labelFor="oldPassword">
              <RHFTextField
                id="oldPassword"
                name="oldPassword"
                type={password.value ? 'text' : 'password'}
                placeholder="Current Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={password.onToggle} edge="end">
                        <Iconify
                          icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    bgcolor: 'background.paper',
                  },
                }}
              />
            </FormGroup>

            <FormGroup label="New Password" labelFor="newPassword">
              <RHFTextField
                id="newPassword"
                name="newPassword"
                placeholder="New Password"
                type={password.value ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={password.onToggle} edge="end">
                        <Iconify
                          icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    bgcolor: 'background.paper',
                  },
                }}
              />
            </FormGroup>

            <FormGroup label="Confirm New Password" labelFor="confirmNewPassword">
              <RHFTextField
                id="confirmNewPassword"
                name="confirmNewPassword"
                type={password.value ? 'text' : 'password'}
                placeholder="Confirm New Password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={password.onToggle} edge="end">
                        <Iconify
                          icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: {
                    bgcolor: 'background.paper',
                  },
                }}
              />
            </FormGroup>
            <DialogActions>
              <BaseButton fullWidth variant="outlined" onClick={onClose} disabled={isSubmitting}>
                Cancel
              </BaseButton>

              <BaseLoadingButton
                color="primary"
                fullWidth
                type="submit"
                variant="contained"
                loading={isSubmitting}
                sx={{ alignSelf: 'flex-start' }}
              >
                Save
              </BaseLoadingButton>
            </DialogActions>
          </Stack>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
}
