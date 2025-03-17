'use client';

import { useState } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography, Stack, Link } from '@mui/material';
import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import Iconify from 'src/components/iconify';
import FormProvider, { RHFTextField } from 'src/components/hook-form';
import { useRequestResetPassword } from 'src/auth/hooks';
import { FormGroup } from 'src/components/custom/form-group';
import { BaseLoadingButton } from 'src/components/styled/button';
import { IRequestResetPasswordResponseData } from './types';

// ----------------------------------------------------------------------

type RequestResetPasswordViewProps = {
  onSuccess: (data: IRequestResetPasswordResponseData) => void;
};

export default function RequestResetPasswordView({ onSuccess }: RequestResetPasswordViewProps) {
  const [errorMsg, setErrorMsg] = useState();

  const { requestResetPassword } = useRequestResetPassword();

  const schema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
  });

  const defaultValues = {
    email: '',
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      const token = await requestResetPassword({ email: data.email });

      onSuccess({ email: data.email, token });
    } catch (error) {
      console.log(error);
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const renderHead = (
    <Stack spacing={1} alignItems="center">
      <Typography variant="h3" fontWeight={600}>
        Forget password?
      </Typography>

      <Typography variant="body1" color="text.secondary" textAlign="center" maxWidth={430}>
        Enter your email to send you a message to recover your password easily.
      </Typography>
    </Stack>
  );

  const renderForm = (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={4}>
        <FormGroup label="Email">
          <RHFTextField
            id="email"
            name="email"
            placeholder="Enter your email"
            helperText={errorMsg}
            error={!!errorMsg}
          />
        </FormGroup>

        <BaseLoadingButton
          color="primary"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Recover Password
        </BaseLoadingButton>

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
    </FormProvider>
  );

  return (
    <Stack spacing={5}>
      {renderHead}

      {renderForm}
    </Stack>
  );
}
