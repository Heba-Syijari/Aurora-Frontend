import { useLoginWithGoogleMutation } from 'src/graphql/generated';

export const useLoginWithGoogle = () => {
  const { mutateAsync, isError, isLoading, isSuccess } = useLoginWithGoogleMutation();

  const handleLoginWithGoogle = async (token: string) => {
    const result = await mutateAsync({ googleToken: token });

    return result.loginWithGoogle;
  };

  return {
    loginWithGoogle: handleLoginWithGoogle,
    isError,
    isLoading,
    isSuccess,
  };
};
