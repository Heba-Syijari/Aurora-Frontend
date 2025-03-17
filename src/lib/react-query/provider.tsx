'use client';

import { DefaultOptions, QueryClient, QueryClientProvider } from 'react-query';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
  },
};

const queryClient = new QueryClient({ defaultOptions: queryConfig });

type Props = {
  children: React.ReactNode;
};

export default function ReactQueryProvider({ children }: Props) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
