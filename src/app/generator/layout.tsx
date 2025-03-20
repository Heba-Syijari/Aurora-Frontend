'use client';

import { AuthGuard } from 'src/auth/guard';
import GeneratorLayout from 'src/layouts/generator';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <AuthGuard>
      <GeneratorLayout>{children} </GeneratorLayout>
    </AuthGuard>
  );
}
