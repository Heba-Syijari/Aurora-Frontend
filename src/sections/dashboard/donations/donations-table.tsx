import { Box, Card, CardHeader, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import Label from 'src/components/label';
import { SimpleTable } from 'src/components/table';
import { IDonation } from 'src/types/donation';
import { fCurrency } from 'src/utils/format-number';
import { formatEnumValue } from 'src/utils/format-string';
import { fDateTime } from 'src/utils/format-time';
import { getDonationStatusColor } from './utils';

// ----------------------------------------------------------------------

type RowProps = IDonation;

interface Props {
  title: React.ReactNode;
  tableData: RowProps[];
}

export default function DonationTable({ title, tableData }: Props) {
  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" gap={1} justifyContent="flex-start">
            <Iconify icon="solar:wallet-money-bold-duotone" width={30} color="primary.main" />
            <Typography variant="h5" color="common.black">
              {title}
            </Typography>
          </Stack>
        }
        sx={{ mb: 3 }}
      />

      <SimpleTable
        disablePaper
        header={[
          { rowIndex: 'id', label: '#', align: 'center', width: '20px' },
          { rowIndex: 'type', label: 'Donation for', align: 'center' },
          { rowIndex: 'status', label: 'Status', align: 'center' },
          { rowIndex: 'amount', label: 'Amount', align: 'center' },
          { rowIndex: 'createdAt', label: 'Created at', align: 'center' },
        ]}
        rows={tableData.map((donation) => ({
          id: donation.id,
          type: <Box textTransform="capitalize">{formatEnumValue(donation.type)}</Box>,
          status: (
            <Label
              color={getDonationStatusColor(donation.status)}
              size="small"
              sx={{ textTransform: 'capitalize' }}
            >
              {formatEnumValue(donation.status)}
            </Label>
          ),
          amount: fCurrency(donation.amount),
          createdAt: fDateTime(donation.createdAt, 'MM-dd-yyyy, p'),
        }))}
      />
    </Card>
  );
}
