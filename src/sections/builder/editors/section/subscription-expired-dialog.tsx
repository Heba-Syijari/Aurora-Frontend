import { Box, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { useAuthContext } from 'src/auth/hooks';
import { BaseButton } from 'src/components/styled/button';
import { useRouter } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import BaseEditDialog from '../base-edit-dialog';

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

export default function SubscriptionExpiredDialog({ open, onClose }: Props) {
  const router = useRouter();
  const { subscription } = useAuthContext();

  let title = 'You are not subscribed yet!';
  let description =
    'Upgrade to unlock exclusive premium features. Explore our subscription plans now!';

  if (subscription?.isExpired) {
    title = 'Your subscription has expired!';
    description = 'You have to renew your plan or upgrade to another plan.';
  }

  const showPlans = () => {
    router.push(paths.dashboard.subscriptions.root);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <BaseEditDialog open={open} onClose={handleClose} maxWidth="sm" fullWidth dialogTitle={title}>
      <DialogContent>
        <Box sx={{ py: 2 }}>
          <DialogContentText>{description}</DialogContentText>
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseButton variant="contained" color="primary" onClick={showPlans} sx={{ m: 'auto' }}>
          Show Plans
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
