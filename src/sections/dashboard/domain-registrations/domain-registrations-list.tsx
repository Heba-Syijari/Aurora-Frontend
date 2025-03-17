import { Card, CardHeader, Stack, Typography } from '@mui/material';
import Iconify from 'src/components/iconify';
import Label from 'src/components/label/label';
import { SimpleTable } from 'src/components/table';
import { IDomainRegistration } from 'src/types/domain';
import { fCurrency } from 'src/utils/format-number';
import { formatEnumValue, pluralWord } from 'src/utils/format-string';
import { fDateTime } from 'src/utils/format-time';

interface DomainRegistrationsListProps {
  domainRegistrations: IDomainRegistration[];
}

export default function DomainRegistrationsList({
  domainRegistrations,
}: DomainRegistrationsListProps) {
  return (
    <Card>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" gap={1} justifyContent="flex-start">
            <Iconify icon="icon-park-twotone:notes" width={30} color="primary.main" />
            <Typography variant="h5" color="common.black">
              Domain Registrations
            </Typography>
          </Stack>
        }
        sx={{ mb: 3 }}
      />

      <SimpleTable
        disablePaper
        header={[
          { label: 'Domain name', rowIndex: 'domainName' },
          { label: 'Amount', rowIndex: 'amount', align: 'center' },
          { label: 'Duration', rowIndex: 'years', align: 'center' },
          { label: 'Status', rowIndex: 'status', align: 'center' },
          { label: 'Created at', rowIndex: 'createdAt', align: 'center' },
        ]}
        rows={domainRegistrations.map((row) => ({
          id: row.id,
          domainName: row.domainName,
          amount: row.isFree ? 'Free' : fCurrency(row.amount),
          years: `${pluralWord('year', row.years)}`,
          status: (
            <Label
              color={row.status === 'CREATED' ? 'warning' : 'success'}
              size="small"
              sx={{ textTransform: 'capitalize' }}
            >
              {formatEnumValue(row.status)}
            </Label>
          ),
          createdAt: fDateTime(row.createdAt, 'MM-dd-yyyy, p'),
        }))}
      />
    </Card>
  );
}
