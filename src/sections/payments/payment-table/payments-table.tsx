import { Card, CardHeader, Tab, Table, TableBody, TableContainer, Tabs } from '@mui/material';
import isEqual from 'lodash/isEqual';
import { useCallback, useState } from 'react';
import Scrollbar from 'src/components/scrollbar';
import {
  TableEmptyRows,
  TableHeadCustom,
  TableNoData,
  TablePaginationCustom,
  emptyRows,
  getComparator,
  useTable,
} from 'src/components/table';
import { useBoolean } from 'src/hooks/use-boolean';
import {
  IPayment,
  IPaymentTableFilterValue,
  IPaymentTableFilters,
  paymentStatuses,
} from 'src/types/payment';
import { formatEnumValue } from 'src/utils/format-string';
import { PaymentDetailsDialog } from '../payment-details';
import PaymentTableRow from './payment-table-row';
import PaymentsTableToolbar from './payments-table-toolbar';

// ----------------------------------------------------------------------

const STATUS_OPTIONS = [
  { value: 'all', label: 'All' },
  ...paymentStatuses.map((s) => ({
    value: s,
    label: formatEnumValue(s),
  })),
];

const TABLE_HEAD = [
  { id: 'id', label: '#', align: 'center', width: '20px' },
  { id: 'type', label: 'Payment for', align: 'center' },
  { id: 'status', label: 'Status', align: 'center' },
  { id: 'cost', label: 'Cost', align: 'center' },
  { id: 'createdAt', label: 'Created at', align: 'center' },
  { id: '', label: 'Actions', align: 'center' },
];

const defaultFilters: IPaymentTableFilters = {
  status: 'all',
  type: 'all',
  cost: undefined,
};

// ----------------------------------------------------------------------

interface Props {
  title: React.ReactNode;
  payments: IPayment[];
}

export default function PaymentTable({ title, payments }: Props) {
  const [selectedPaymentId, setSelectedPaymentId] = useState<number>();

  const paymentDialog = useBoolean();

  const handleDialogOpen = (id: number) => {
    paymentDialog.onTrue();
    setSelectedPaymentId(id);
  };

  const handleDialogClose = () => {
    paymentDialog.onFalse();
    // This timeout is to keep the closing animation of the dialog
    setTimeout(() => {
      setSelectedPaymentId(undefined);
    }, 200);
  };

  const table = useTable({ defaultOrderBy: 'createdAt', defaultOrder: 'desc' });

  const [filters, setFilters] = useState(defaultFilters);

  const dataFiltered = applyFilter({
    inputData: payments,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });

  const denseHeight = table.dense ? 52 : 72;

  const canReset = !isEqual(defaultFilters, filters);

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleFilters = useCallback(
    (name: string, value: IPaymentTableFilterValue) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleFilterStatus = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      handleFilters('status', newValue);
    },
    [handleFilters]
  );

  const renderTabs = (
    <Tabs
      value={filters.status}
      onChange={handleFilterStatus}
      sx={{
        px: 2.5,
        boxShadow: 'none',
        mb: 2,
        '& .MuiTab-root': {
          color: (theme) => theme.palette.grey[900],
          fontWeight: 400,
          '&.Mui-selected': {
            color: 'primary.main',
          },
        },
        '& .MuiTabs-indicator': {
          backgroundColor: 'primary.main',
        },
      }}
    >
      {STATUS_OPTIONS.map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          sx={{
            textTransform: 'capitalize',
          }}
        />
      ))}
    </Tabs>
  );

  const renderToolbar = <PaymentsTableToolbar filters={filters} onFilters={handleFilters} />;

  return (
    <>
      <Card>
        <CardHeader title={renderToolbar} sx={{ mb: 3 }} />

        {renderTabs}

        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <Scrollbar>
            <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
              <TableHeadCustom headLabel={TABLE_HEAD} />

              <TableBody>
                {dataFiltered
                  .slice(
                    table.page * table.rowsPerPage,
                    table.page * table.rowsPerPage + table.rowsPerPage
                  )
                  .map((row) => (
                    <PaymentTableRow
                      key={row.id}
                      payment={row}
                      onViewClick={() => handleDialogOpen(row.id)}
                    />
                  ))}

                <TableEmptyRows
                  height={denseHeight}
                  emptyRows={emptyRows(table.page, table.rowsPerPage, payments.length)}
                />

                <TableNoData notFound={notFound} />
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>

        <TablePaginationCustom
          count={dataFiltered.length}
          page={table.page}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          onRowsPerPageChange={table.onChangeRowsPerPage}
        />
      </Card>

      {selectedPaymentId && (
        <PaymentDetailsDialog
          open={paymentDialog.value}
          onClose={handleDialogClose}
          paymentId={selectedPaymentId}
        />
      )}
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({
  inputData,
  comparator,
  filters,
}: {
  inputData: IPayment[];
  comparator: (a: any, b: any) => number;
  filters: IPaymentTableFilters;
}) {
  const { cost, status, type } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index] as const);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (cost) {
    inputData = inputData.filter((payment) => payment.cost === +cost);
  }

  if (status !== 'all') {
    inputData = inputData.filter((payment) => payment.status === status);
  }

  if (type !== 'all') {
    inputData = inputData.filter((payment) => payment.type === type);
  }

  return inputData;
}
