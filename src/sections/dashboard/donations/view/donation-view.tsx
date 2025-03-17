'use client';

import { Container, Stack } from '@mui/material';
import { useGetDonations } from 'src/api/donation';
import { useSettingsContext } from 'src/components/settings';
import { useBoolean } from 'src/hooks/use-boolean';
import DonateDialog from '../donate-dialog';
import DonateJumbotron from '../donate-jumbotron';
import DonationTable from '../donations-table';

export default function DonationView() {
  const settings = useSettingsContext();

  const { donations } = useGetDonations();

  const donateDialog = useBoolean();

  return (
    <>
      <Container maxWidth={settings.themeStretch ? false : 'lg'}>
        <Stack spacing={4}>
          <DonateJumbotron onDonateClick={donateDialog.onTrue} />

          <DonationTable title="Support Projects" tableData={donations} />
        </Stack>
      </Container>

      <DonateDialog open={donateDialog.value} onClose={donateDialog.onFalse} />
    </>
  );
}
