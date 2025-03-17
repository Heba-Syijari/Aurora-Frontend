import { useSearchParams } from 'src/routes/hook';

export const useRegisterDomainView = () => {
  const searchParams = useSearchParams();

  const domainName = searchParams.get('domainName') || '';
  const duration = +(searchParams.get('duration') || 0);

  return {
    domainName,
    duration,
  };
};
