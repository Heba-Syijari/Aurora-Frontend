'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Alert,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Link,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { gender } from 'src/assets/data';
import { useAuthContext, useResendVerificationEmail } from 'src/auth/hooks';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFSelect, RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify';
import { BaseLoadingButton } from 'src/components/styled/button';
import { PATH_AFTER_LOGIN } from 'src/config-global';
import { useBoolean } from 'src/hooks/use-boolean';
import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';
import { Gender, genderTypes } from 'src/types';
import * as Yup from 'yup';
import { GoogleLoginButton } from './google';

// ----------------------------------------------------------------------

export default function RegisterView() {
  const { register } = useAuthContext();
  const { resendVerification, isLoading: resendVerificationLoading } = useResendVerificationEmail();

  const [showForm, setShowForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const password = useBoolean();

  const schema = Yup.object().shape({
    name: Yup.string().required('Full name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match'),
    phoneNumber: Yup.string().required('Phone number is required'),
    gender: Yup.string().oneOf(genderTypes, 'Not valid gender').required('Gender is required'),
  });

  const defaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    gender: 'MALE' as Gender,
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    getValues,
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await register({
        name: data.name,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
      });

      setShowForm(false);
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
    window.location.href = PATH_AFTER_LOGIN;
  };

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2}>
        {!!errorMsg && <Alert severity="error">{errorMsg}</Alert>}

        <GoogleLoginButton onSuccess={onLoginWithGoogleSuccess} onError={setErrorMsg} />

        <Divider sx={{ color: 'text.tertiary' }}>or continue with</Divider>

        <FormGroup label="Full Name" labelFor="name">
          <RHFTextField id="name" name="name" placeholder="Enter your full name" />
        </FormGroup>

        <FormGroup label="Email" labelFor="email">
          <RHFTextField id="email" name="email" placeholder="Enter your email" />
        </FormGroup>

        <FormGroup label="Phone Number" labelFor="phoneNumber">
          <RHFTextField id="phoneNumber" name="phoneNumber" placeholder=".e.g +966988776655" />
        </FormGroup>

        <FormGroup label="Gender" labelFor="gender">
          <RHFSelect id="gender" name="gender">
            {gender.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </RHFSelect>
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

        <FormGroup label="Confirm Password" labelFor="confirmPassword">
          <RHFTextField
            id="confirmPassword"
            name="confirmPassword"
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
          sx={{ mt: 1 }}
        >
          Sign up
        </BaseLoadingButton>
      </Stack>
    </FormProvider>
  );

  const renderFooter = (
    <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 3 }}>
      <Typography variant="body1" fontWeight={500}>
        Already have an account?
      </Typography>

      <Link component={RouterLink} href={paths.auth.login} variant="body1" fontWeight={600}>
        Login
      </Link>
    </Stack>
  );

  const renderCheckYourMailInbox = (
    <Stack textAlign="center" spacing={2}>
      <Box>
        <Iconify
          icon="icon-park-outline:success"
          width={100}
          sx={{ color: (theme) => theme.palette.primary.main }}
        />
        <Typography variant="body1" color="primary">
          Successfully registered!
        </Typography>
      </Box>

      <Typography variant="h5" fontWeight={500} color="text.secondary" textAlign="center">
        Please check your mail inbox to verify the account
      </Typography>

      <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
        <Typography variant="body1" fontWeight={500}>
          Did not receive a verification email?
        </Typography>

        <LoadingButton
          size="small"
          variant="text"
          color="primary"
          onClick={handleResendVerificationToken}
          loading={resendVerificationLoading}
          disabled={resendVerificationLoading}
          sx={{ fontWeight: 600, fontSize: 16 }}
        >
          Send Again
        </LoadingButton>
      </Stack>
    </Stack>
  );

  if (!showForm) {
    return renderCheckYourMailInbox;
  }

  return (
    <>
      {renderForm}

      {renderFooter}
    </>
  );
}
