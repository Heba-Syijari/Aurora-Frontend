import { useCallback, useEffect, useState } from 'react';
// routes
import { useRouter } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
//
import { useAuthContext } from '../hooks';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: Props) {
  const router = useRouter();

  const { authenticated, hasAuthToken } = useAuthContext();

  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (!authenticated && !hasAuthToken) {
      const searchParams = new URLSearchParams({ returnTo: window.location.pathname }).toString();

      const loginPath = paths.auth.login;

      const href = `${loginPath}?${searchParams}`;

      router.replace(href);
    } else {
      setChecked(true);
    }
  }, [authenticated, hasAuthToken, router]);

  useEffect(() => {
    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!checked) {
    return null;
  }

  return <>{children}</>;
}
