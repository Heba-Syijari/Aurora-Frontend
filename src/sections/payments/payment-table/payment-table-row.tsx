import { TableRow, TableCell, IconButton, ListItemText, Stack } from '@mui/material';
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import { IPayment } from 'src/types/payment';
import { formatEnumValue } from 'src/utils/format-string';
import { fDateTime } from 'src/utils/format-time';
import { getPaymentStatusColor } from '../utils';

type Props = {
  payment: IPayment;
  onViewClick: VoidFunction;
};

export default function PaymentTableRow({ payment, onViewClick }: Props) {
  return (
    <TableRow>
      <TableCell align="center">{payment.id}</TableCell>

      <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
        {formatEnumValue(payment.type)}
      </TableCell>

      <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
        <Label size='small' variant="soft" color={getPaymentStatusColor(payment.status)}>
          {formatEnumValue(payment.status)}
        </Label>
      </TableCell>

      <TableCell align="center">${payment.cost}</TableCell>

      <TableCell align="center">
        <ListItemText
          primary={fDateTime(payment.createdAt, 'dd/MM/yyyy')}
          secondary={fDateTime(payment.createdAt, 'p')}
          primaryTypographyProps={{ typography: 'body2', noWrap: true }}
          secondaryTypographyProps={{
            mt: 0.5,
            component: 'span',
            typography: 'caption',
          }}
        />
      </TableCell>

      <TableCell align="center">
        <Stack flexDirection="row" spacing={1} justifyContent="center">
          <IconButton onClick={onViewClick}>
            <Iconify icon="mdi:eye" width={24} />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );
}
