import { Alert, Skeleton, Stack } from '@mui/material';
import { useMemo, useState } from 'react';
import { useCheckDomainAvailability } from 'src/api/domain';
import { useDebounce } from 'src/hooks/use-debounce';
import { DomainRegistrationStatus, IDomainRegistration } from 'src/types/domain';
import { IDomainFeatureLimitation } from 'src/types/plan';
import { pluralWord } from 'src/utils/format-string';
import DomainPricingList from './domain-pricing-list';
import DomainSearchInput from './domain-search-input';

interface DomainManagementProps {
  domainRegistrations: IDomainRegistration[];
  onPurchase: (domainName: string, duration: number, free: boolean) => Promise<void>;
  domainFeatureLimitation?: IDomainFeatureLimitation;
  purchaseLoading: boolean;
}

export default function DomainManagement({
  domainRegistrations,
  onPurchase,
  domainFeatureLimitation,
  purchaseLoading,
}: DomainManagementProps) {
  const [selectedDomain, setSelectedDomain] = useState('');

  const ownThisDomainName = useMemo(
    () =>
      domainRegistrations.findIndex(
        (o) => o.domainName === selectedDomain && o.status === DomainRegistrationStatus.COMPLETED
      ) > -1,
    [selectedDomain, domainRegistrations]
  );

  const debouncedValue = useDebounce<string>(selectedDomain, 800);

  const {
    available,
    isLoading: checkDomainLoading,
    isError,
    errorMessage,
  } = useCheckDomainAvailability(debouncedValue);

  const isLoading = checkDomainLoading || purchaseLoading;

  const handleDomainChange = (domain: string) => {
    setSelectedDomain(domain);
  };

  const handlePurchase = async (duration: number, free: boolean) => {
    try {
      await onPurchase(selectedDomain, duration, free);
      setSelectedDomain('');
    } catch {
      console.log('error while purchasing');
    }
  };

  const renderUserHasFreeDomain = domainFeatureLimitation && (
    <Alert severity="info" variant="outlined">
      You have a free <b>.{domainFeatureLimitation.tld}</b> domain for{' '}
      <b>{pluralWord('year', domainFeatureLimitation.years)}.</b>
    </Alert>
  );

  const renderDomainRegistration = selectedDomain && (
    <DomainPricingList
      domainName={selectedDomain}
      onPurchase={handlePurchase}
      loading={isLoading}
      freeDomain={{
        tld: domainFeatureLimitation?.tld || '',
        duration: domainFeatureLimitation?.years || 0,
      }}
    />
  );

  let renderContent = null;
  let helperText = '';

  if (!isError && !ownThisDomainName && available) {
    renderContent = renderDomainRegistration;
  }

  if (!selectedDomain) {
    helperText = '';
  } else if (ownThisDomainName) {
    helperText = 'You already own this domain name';
  } else if (available) {
    helperText = 'The domain is available.';
  } else if (available === false) {
    helperText =
      'This domain is taken. If you own this domain, please navigate to the desired project > domains section.';
  }

  return (
    <Stack spacing={2}>
      {renderUserHasFreeDomain}

      <DomainSearchInput
        available={available}
        domainName={selectedDomain}
        onDomainNameChange={handleDomainChange}
        disabled={isLoading}
        loading={checkDomainLoading}
        helperText={checkDomainLoading ? '' : helperText}
        error={errorMessage}
      />

      {checkDomainLoading ? <Skeleton variant="rectangular" height={128} /> : renderContent}
    </Stack>
  );
}
