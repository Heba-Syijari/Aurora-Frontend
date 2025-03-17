'use client';

import { Box, Container, Stack } from '@mui/material';
import { useSettingsContext } from 'src/components/settings';
import { BackgroundPrints } from 'src/layouts/_common';
import DomainManagement from '../domain-management';
import DomainRegistrationsList from '../domain-registrations-list';
import { useDomainView } from '../hooks/use-domain-view';

export default function DomainView() {
  const settings = useSettingsContext();

  const { domainRegistrations, handlePurchase, domainFeatureLimitation, purchaseLoading } =
    useDomainView();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Stack spacing={3}>
        <Box
          sx={{
            position: 'relative',
            backgroundColor: (theme) => theme.palette.background.primary,
            overflow: 'hidden',
            border: '5px solid',
            bgcolor: 'background.secondary',
            borderRadius: '24px',
            borderColor: 'background.paper',
            p: 2,
          }}
        >
          <DomainManagement
            onPurchase={handlePurchase}
            domainRegistrations={domainRegistrations}
            domainFeatureLimitation={domainFeatureLimitation}
            purchaseLoading={purchaseLoading}
          />
          <BackgroundPrints
            sx={{
              opacity: 0.07,
              right: 0,
              bottom: 0,
              position: 'absolute',
            }}
          />
          <BackgroundPrints
            sx={{
              opacity: 0.07,
              left: 0,
              bottom: 0,
              position: 'absolute',
              transform: 'rotateY(180deg)',
            }}
          />
        </Box>

        <DomainRegistrationsList domainRegistrations={domainRegistrations} />
      </Stack>
    </Container>
  );
}
