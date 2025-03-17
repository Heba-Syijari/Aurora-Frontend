import { Typography } from '@mui/material';

type Props = {
  name: string;
  color?: string;
};

export function CopyRight({ name, color = 'text.secondary' }: Props) {
  return (
    <Typography variant="body2" fontSize={16} color={color}>
      Copyright &copy; {name} {new Date().getFullYear()}. All Rights Reserved
    </Typography>
  );
}
