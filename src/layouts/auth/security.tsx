import { Stack } from '@mui/material';
import { BaseBackground } from '../_common';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function AuthSecurityLayout({ children }: Props) {
  return (
    <BaseBackground>
      <Stack
        spacing={5}
        sx={{
          width: '100%',
          maxWidth: 612,
          mx: 'auto',
          p: 5,
          justifyContent: 'center',
          borderRadius: 3,
          bgcolor: 'background.default',
        }}
      >
        <div>{children}</div>
      </Stack>
    </BaseBackground>
  );
}
