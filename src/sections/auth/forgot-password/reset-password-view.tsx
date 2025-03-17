'use client';

import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Link,
  Stack,
  IconButton,
  Typography,
  InputAdornment,
  Alert,
  CircularProgress,
} from '@mui/material';
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hook';
import { useBoolean } from 'src/hooks/use-boolean';
import { useSnackbar } from 'src/components/snackbar';
import Iconify from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import FormProvider, { RHFTextField, RHFCode } from 'src/components/hook-form';
import { useResetPassword } from 'src/auth/hooks';
import { BaseLoadingButton } from 'src/components/styled/button';
import { FormGroup } from 'src/components/custom/form-group';

// ----------------------------------------------------------------------

type ResetPasswordViewProps = {
  email: string;
  token: string;
  resendCode: () => Promise<void>;
};

export default function ResetPasswordView({ email, token, resendCode }: ResetPasswordViewProps) {
  const [errorMsg, setErrorMsg] = useState();

  const { resetPassword } = useResetPassword();
  const requestResetPasswordLoading = useBoolean(false);

  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const password = useBoolean();

  const schema = Yup.object().shape({
    code: Yup.string().min(6, 'Code must be at least 6 characters').required('Code is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const defaultValues = {
    code: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await resetPassword({
        code: data.code,
        password: data.password,
        token,
        email,
      });
      enqueueSnackbar('Password successfully reset!');
      router.replace(paths.auth.login);
    } catch (error) {
      console.log(error);
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const handleResendCode = () => {
    requestResetPasswordLoading.onTrue();
    resendCode().finally(() => {
      requestResetPasswordLoading.onFalse();
    });
  };

  const renderHead = (
    <Stack spacing={1} alignItems="center">
      <Typography variant="h3" fontWeight={600}>
        Request sent successfully!
      </Typography>

      <Typography variant="body1" color="text.secondary" textAlign="center" maxWidth={430}>
        We&apos;ve sent a 6-digit confirmation email to {email}.
        <br />
        Please enter the code in below box to verify your email.
      </Typography>
    </Stack>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3}>
        {!!errorMsg && (
          <Alert severity="error" sx={{ alignSelf: 'normal' }}>
            {errorMsg}
          </Alert>
        )}

        <RHFCode name="code" />

        <FormGroup label="New Password" labelFor="password">
          <RHFTextField
            name="password"
            placeholder="Enter your new password"
            type={password.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormGroup>

        <FormGroup label="Confirm Password" labelFor="confirmPassword">
          <RHFTextField
            name="confirmPassword"
            placeholder="Enter your password again"
            type={password.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={password.onToggle} edge="end">
                    <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormGroup>

        <BaseLoadingButton
          color="primary"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Update Password
        </BaseLoadingButton>
      </Stack>
    </FormProvider>
  );

  const renderFooter = (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
        <Typography variant="body1" fontWeight={500}>
          Don&apos;t have a code?
        </Typography>

        {requestResetPasswordLoading.value && <CircularProgress size="16px" color="inherit" />}

        {!requestResetPasswordLoading.value && (
          <Link variant="body1" fontWeight={600} onClick={handleResendCode}>
            Resend code
          </Link>
        )}
      </Stack>

      <Link
        component={RouterLink}
        href={paths.auth.login}
        color="text.primary"
        variant="body1"
        sx={{ fontWeight: 500, alignSelf: 'center' }}
      >
        <Iconify icon="ri:arrow-left-s-line" sx={{ verticalAlign: 'middle' }} />
        Return to Login
      </Link>
    </Stack>
  );

  return (
    <Stack spacing={5}>
      {renderHead}

      {renderForm}

      {renderFooter}
    </Stack>
  );
}
