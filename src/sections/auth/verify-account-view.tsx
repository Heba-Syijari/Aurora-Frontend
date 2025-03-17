'use client';

import { useCallback, useEffect } from 'react';
// @mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// routes
import { paths } from 'src/routes/paths';
import { useRouter, useSearchParams } from 'src/routes/hook';
// auth
import { useVerifyAccount } from 'src/auth/hooks';
// components
import Iconify from 'src/components/iconify';
// data
import { CircularProgress } from '@mui/material';
import { BaseButton } from 'src/components/styled/button';

// ----------------------------------------------------------------------

export default function VerifyAccountView() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userToken = searchParams.get('token');

  const { verifyAccount, isLoading, isSuccess, isError } = useVerifyAccount();

  const handleVerifyAccount = useCallback(
    async (token: string) => {
      if (token && !isSuccess && !isLoading && !isError) {
        try {
          await verifyAccount({ token });
        } catch (err) {
          console.log(err);
        }
      }
    },
    [isSuccess, isLoading, isError, verifyAccount]
  );

  useEffect(() => {
    if (userToken) {
      handleVerifyAccount(userToken);
    } else {
      router.replace(paths.auth.login);
    }
  }, [handleVerifyAccount, router, userToken]);

  useEffect(() => {
    if (isSuccess) {
      router.replace(paths.auth.login);
    }
  }, [isSuccess, router]);

  const renderError = (
    <Stack spacing={2}>
      <Typography variant="h5" fontWeight={500}>
        <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
          <Iconify
            icon="icon-park-outline:error"
            width={30}
            sx={{ color: (theme) => theme.palette.error.main }}
          />
          Oops, verification failed!
        </Box>
        <br />
        <span>Navigate to the login page so you can resend verification email.</span>
      </Typography>

      <BaseButton
        color="primary"
        variant="contained"
        href={paths.auth.login}
        size="large"
        sx={{ alignSelf: 'center' }}
      >
        Navigate to login page
      </BaseButton>
    </Stack>
  );

  const renderHead = (
    <Stack spacing={3} alignItems="center">
      <CircularProgress />

      <Typography variant="h5" fontWeight={500}>
        Verifing account...
      </Typography>
    </Stack>
  );

  const renderSuccess = (
    <Stack spacing={2} alignItems="center" sx={{ color: 'primary.main' }}>
      <Iconify icon="icon-park-outline:success" width={80} />

      <Typography variant="body1" fontWeight={500}>
        Verified successfully!
      </Typography>

      <Typography variant="body1" color="text.primary">
        You would be redirected to the login page.
      </Typography>
    </Stack>
  );

  return (
    <Box sx={{ textAlign: 'center' }}>
      {isError && renderError}
      {isLoading && renderHead}
      {isSuccess && renderSuccess}
    </Box>
  );
}
