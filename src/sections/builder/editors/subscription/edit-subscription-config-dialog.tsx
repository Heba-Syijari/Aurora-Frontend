import { DialogActions, DialogContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BaseButton } from 'src/components/styled/button';

import {
  GenericSubscriptionConfig,
  SubscriptionComponentName,
} from '../../components/subscription/types';
import BaseEditDialog from '../base-edit-dialog';
import { EditFactory } from './edit-subscription-config-factory';

interface Props {
  defaultValue: GenericSubscriptionConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (data: GenericSubscriptionConfig) => void;
  name: SubscriptionComponentName;
}

export function EditSubscriptionConfigDialog({
  defaultValue,
  open,
  onCloseClicked,
  onSave,
  name,
}: Props) {
  const handleClose = () => {
    onCloseClicked();
  };
  const theme = useTheme();
  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      scroll="body"
      dialogTitle="Edit Subscriptions"
    >
      <DialogContent>
        <EditFactory
          theme={theme}
          name={name}
          defaultValue={defaultValue}
          onSave={onSave}
          onCloseClicked={onCloseClicked}
        />
      </DialogContent>

      <DialogActions>
        <BaseButton
          color="primary"
          variant="contained"
          type="submit"
          form="edit-subscription-config-form"
        >
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
