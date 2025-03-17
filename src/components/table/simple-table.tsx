import React, { useState } from 'react';
import {
  Paper,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import type { TableCellProps } from '@mui/material';
import TablePaginationCustom from './table-pagination-custom';
import TableNoData from './table-no-data';

type TableHeaderCell = TableCellProps & {
  label: string;
  rowIndex: string;
};

type Props<T> = {
  header: TableHeaderCell[];
  rows: T[];
  disablePaper?: boolean;
  sx?: SxProps;
};

export default function SimpleTable<
  T extends Record<string, React.ReactNode> & { id: string | number }
>({ header, rows, disablePaper = false, sx }: Props<T>) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const paperProps = {
    component: Paper,
    variant: 'outlined',
  };

  const rowsChunk =
    rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows;

  const renderRows = rowsChunk.map((row) => (
    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {header.map(({ rowIndex, ...props }, i) => (
        <TableCell key={i} {...props}>
          {row[rowIndex]}
        </TableCell>
      ))}
    </TableRow>
  ));

  const renderEmpty = <TableNoData notFound />;

  return (
    <TableContainer {...(disablePaper ? {} : paperProps)}>
      <Table sx={{ minWidth: 650, ...(sx || {}) }}>
        <TableHead>
          <TableRow>
            {header.map(({ label, rowIndex, ...props }, i) => (
              <TableCell key={i} {...props}>
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>{rows.length > 0 ? renderRows : renderEmpty}</TableBody>
      </Table>

      <TablePaginationCustom
        count={rows.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, v) => setPage(v)}
        onRowsPerPageChange={(e) => setRowsPerPage(+e.target.value)}
        sx={{ borderTop: '1px solid', borderColor: 'divider' }}
      />
    </TableContainer>
  );
}
