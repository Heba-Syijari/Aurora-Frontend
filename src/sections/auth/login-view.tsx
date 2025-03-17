'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Alert, Divider, IconButton, InputAdornment, Link, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuthContext, useResendVerificationEmail } from 'src/auth/hooks';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify';
import { BaseLoadingButton } from 'src/components/styled/button';
import { PATH_AFTER_LOGIN } from 'src/config-global';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';
import { useSearchParams } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import * as Yup from 'yup';
import { GoogleLoginButton } from './google';

// ----------------------------------------------------------------------

export default function LoginView() {
  const { login } = useAuthContext();

  const { resendVerification, isLoading: resendVerificationLoading } = useResendVerificationEmail();

  const [errorMsg, setErrorMsg] = useState('');

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo');

  const password = useBoolean();

  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    getValues,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await login(data.email, data.password);

      redirectToPathAfterLogin();
    } catch (error) {
      console.error(error);
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const handleResendVerificationToken = async () => {
    const email = getValues('email');
    await resendVerification({ email });
  };

  const onLoginWithGoogleSuccess = () => {
    redirectToPathAfterLogin();
  };

  const redirectToPathAfterLogin = () => {
    window.location.href = returnTo || PATH_AFTER_LOGIN;
  };

  const emailIsNotVerified = errorMsg === 'Email is not verified';

  const renderForm = (
    <Stack spacing={2}>
      {!!errorMsg && (
        <Alert severity="error">
          {errorMsg}
          {emailIsNotVerified && ', please check your mail inbox to verify your email.'}
        </Alert>
      )}
      {emailIsNotVerified && (
        <Alert severity="info">
          Click on
          <LoadingButton
            variant="text"
            onClick={handleResendVerificationToken}
            loading={resendVerificationLoading}
            disabled={resendVerificationLoading}
            sx={{ textDecoration: 'underline' }}
          >
            Send verification email
          </LoadingButton>
          If you do not receive a verification email or it is expired.
        </Alert>
      )}

      <GoogleLoginButton onSuccess={onLoginWithGoogleSuccess} onError={setErrorMsg} />

      <Divider sx={{ color: 'text.tertiary' }}>or continue with</Divider>

      <FormGroup label="Email" labelFor="email">
        <RHFTextField id="email" name="email" placeholder="Enter your email" />
      </FormGroup>

      <FormGroup label="Password" labelFor="password">
        <RHFTextField
          id="password"
          name="password"
          placeholder="Enter your password"
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

      {/* <Link
        href={paths.auth.forgotPassword}
        component={RouterLink}
        variant="body1"
        fontWeight={500}
        color="text.primary"
        sx={{ alignSelf: 'flex-end', mt: -1 }}
      >
        Forgot password?
      </Link> */}

      <BaseLoadingButton
        color="primary"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
      >
        Login
      </BaseLoadingButton>
    </Stack>
  );

  const renderFooter = (
    <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 3 }}>
      <Typography variant="body1" fontWeight={500}>
        Don&apos;t have an account?
      </Typography>

      <Link component={RouterLink} href={paths.auth.register} variant="body1" fontWeight={600}>
        Sign up
      </Link>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      {renderForm}

      {/* {renderFooter} */}
    </FormProvider>
  );
}
