import { format, getTime, formatDistanceToNow } from 'date-fns';

// ----------------------------------------------------------------------

type InputValue = Date | string | number | null | undefined;

export function fDate(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: InputValue) {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date: InputValue) {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}

export function parseFormatYYYYMMDD(date: string) {
  if (!/^(\d){8}$/.test(date)) throw new Error('invalid date');

  const y = +date.slice(0, 4);
  const m = +date.slice(4, 6) - 1;
  const d = +date.slice(6);

  return new Date(y, m, d).toISOString().split('T')[0];
}

export function parseFormatYYYYMMDDHH(date: string) {
  if (!/^(\d){10}$/.test(date)) throw new Error('invalid date');

  const y = +date.slice(0, 4);
  const m = +date.slice(4, 6) - 1;
  const d = +date.slice(6, 8);
  const h = +date.slice(8);

  return new Date(y, m, d, h).toISOString();
}
