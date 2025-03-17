import { DialogActions, DialogContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BaseButton } from 'src/components/styled/button';
import { AboutComponentName, GenericAboutConfig } from '../../components/about/types';

import BaseEditDialog from '../base-edit-dialog';
import { EditFactory } from './edit-about-config-factory';

interface Props {
  defaultValue: GenericAboutConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (data: GenericAboutConfig) => void;
  name: AboutComponentName;
}

export function EditAboutConfigDialog({ defaultValue, open, onCloseClicked, onSave, name }: Props) {
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
      dialogTitle="Edit About"
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
        <BaseButton color="primary" variant="contained" type="submit" form="edit-about-config-form">
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
