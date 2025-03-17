'use client';

import { useCallback, useEffect, useMemo } from 'react';
import { useGetUserUsage } from 'src/api/user';
import {
  useGetUser,
  useGetUserSubscription,
  useLogin,
  useLoginWithGoogle,
  useRegister,
} from 'src/auth/hooks';
import { RegisterCredentials } from 'src/auth/types';
import { UnauthorizedException } from 'src/exceptions';
import { paths } from 'src/routes/paths';
import storage from 'src/utils/storage';
import { AuthContext } from './auth-context';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const { login } = useLogin();
  const { register } = useRegister();
  const { loginWithGoogle } = useLoginWithGoogle();

  const { user, isLoading, isError, refetch, error: userError } = useGetUser();

  const { subscription, isLoading: subscriptionLoading } = useGetUserSubscription();

  const { userUsage, isLoading: userUsageLoading, refetch: refetchUserUsage } = useGetUserUsage();

  const isUnauthenticatedError = userError instanceof UnauthorizedException;

  const hasAuthToken = !!storage.getToken();

  useEffect(() => {
    if (isError && isUnauthenticatedError) {
      storage.clearToken();
    }
  }, [isError, isUnauthenticatedError]);

  // LOGIN
  const handleLogin = useCallback(
    async (email: string, password: string) => {
      const response = await login({ email, password });

      const { token } = response;

      storage.setToken(token);
    },
    [login]
  );

  // REGISTER
  const handleRegister = useCallback(
    async (credentials: RegisterCredentials) => {
      await register(credentials);
    },
    [register]
  );

  // LOGOUT
  const logout = useCallback(async () => {
    storage.clearToken();
    window.location.href = paths.auth.login;
  }, []);

  // LOGIN
  const handleLoginWithGoogle = useCallback(
    async (googleToken: string) => {
      const response = await loginWithGoogle(googleToken);

      const { token } = response;

      storage.setToken(token);
    },
    [loginWithGoogle]
  );

  const refreshUserUsage = useCallback(async () => {
    await refetchUserUsage();
  }, [refetchUserUsage]);

  // ----------------------------------------------------------------------

  const checkAuthenticated = user ? 'authenticated' : 'unauthenticated';

  const status = isLoading ? 'loading' : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user,
      method: 'jwt',
      loading: status === 'loading',
      authenticated: status === 'authenticated',
      unauthenticated: status === 'unauthenticated',
      subscription,
      subscriptionLoading,
      userUsage,
      userUsageLoading,
      refreshUserUsage,
      //
      refresh: refetch,
      login: handleLogin,
      loginWithGoogle: handleLoginWithGoogle,
      register: handleRegister,
      logout,
      //
      isUnauthenticatedError,
      hasAuthToken,
    }),
    [
      handleLogin,
      handleLoginWithGoogle,
      handleRegister,
      logout,
      refetch,
      refreshUserUsage,
      status,
      subscription,
      subscriptionLoading,
      user,
      userUsage,
      userUsageLoading,
      isUnauthenticatedError,
      hasAuthToken,
    ]
  );

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>;
}
