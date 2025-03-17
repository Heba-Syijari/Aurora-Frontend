import { Chip, SxProps } from '@mui/material';
import { useAuthContext } from 'src/auth/hooks';

type Props = {
  sx?: SxProps;
};

export default function SubscriptionExpiration({ sx }: Props) {
  const { subscription } = useAuthContext();

  if (!subscription) return null;

  const { isExpired, expirationDays = -1 } = subscription;

  let expirationMessage;

  if (isExpired || expirationDays < 0) {
    expirationMessage = 'Your subscription has expired!';
  } else if (expirationDays === 0 && !isExpired) {
    expirationMessage = 'Your subscription will expire today!';
  } else if (expirationDays < 30) {
    expirationMessage = (
      <>
        Your subscription will expire after <b>{expirationDays}</b> days!
      </>
    );
  }

  if (!expirationMessage) return null;

  return <Chip label={expirationMessage} variant="soft" sx={{ ...(sx || {}) }} />;
}
