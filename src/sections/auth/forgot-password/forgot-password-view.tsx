'use client';

import { useState } from 'react';
import { useRequestResetPassword } from 'src/auth/hooks';
import RequestResetPasswordView from './request-reset-password-view';
import ResetPasswordView from './reset-password-view';
import { IRequestResetPasswordResponseData } from './types';

// ----------------------------------------------------------------------

export default function ForgotPasswordView() {
  const [data, setData] = useState<IRequestResetPasswordResponseData>();

  const { requestResetPassword } = useRequestResetPassword();

  if (!data) {
    return (
      <RequestResetPasswordView
        onSuccess={(v) => {
          setData(v);
        }}
      />
    );
  }

  const handleResetCode = async () => {
    const token = await requestResetPassword({ email: data.email });
    setData({ email: data.email, token });
  };

  return <ResetPasswordView email={data.email} token={data.token} resendCode={handleResetCode} />;
}
