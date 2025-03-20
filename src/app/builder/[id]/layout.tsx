'use client';

import { useParams } from 'next/navigation';
import { AuthGuard } from 'src/auth/guard';
import { ProjectProvider } from 'src/providers/project/project-provider';
import { SelectedPageProvider } from 'src/sections/builder/context';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const { id } = useParams();

  return (
    <div>
      <AuthGuard>
        <ProjectProvider id={id}>
          <SelectedPageProvider>{children}</SelectedPageProvider>
        </ProjectProvider>
      </AuthGuard>
    </div>
  );
}
