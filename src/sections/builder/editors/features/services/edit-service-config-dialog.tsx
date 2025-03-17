import { DialogActions, DialogContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BaseButton } from 'src/components/styled/button';
import { ServicesConfig } from '../../../components/featuers/types';

import BaseEditDialog from '../../base-edit-dialog';
import ServicesEditConfig from './service-edit-config';

interface Props {
  defaultValue: ServicesConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (data: ServicesConfig) => void;
}

export function EditServiceConfigDialog({ defaultValue, open, onCloseClicked, onSave }: Props) {
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
      dialogTitle="Edit Impacts"
    >
      <DialogContent>
        <ServicesEditConfig
          theme={theme}
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
          form="edit-Services-config-form"
        >
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
