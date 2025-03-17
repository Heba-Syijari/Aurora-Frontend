'use client';

import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { Box, CircularProgress } from '@mui/material';
import { useAuthContext } from 'src/auth/hooks';

interface GoogleLoginButtonProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export default function GoogleLoginButton({ onSuccess, onError }: GoogleLoginButtonProps) {
  const { loginWithGoogle } = useAuthContext();

  const [loading, setLoading] = useState(false);

  const handleLogin = async (jwtIdToken: string) => {
    setLoading(true);
    try {
      await loginWithGoogle(jwtIdToken);
      onSuccess();
    } catch (error) {
      onError(typeof error === 'string' ? error : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%', position: 'relative', display: 'grid', placeItems: 'center' }}>
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            backgroundColor: (theme) => theme.palette.background.paper,
            opacity: 0.8,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress size="16px" color="inherit" />
        </Box>
      )}

      <GoogleLogin
        text="continue_with"
        onSuccess={(res) => {
          if (res.credential) {
            handleLogin(res.credential);
          } else {
            console.log('No id token found', res);
          }
        }}
        onError={() => {
          onError('Login Failed!');
        }}
        width={320}
      />
    </Box>
  );
}
