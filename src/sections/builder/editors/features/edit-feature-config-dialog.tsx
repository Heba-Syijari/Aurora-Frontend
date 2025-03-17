import { DialogActions, DialogContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BaseButton } from 'src/components/styled/button';
import { FeatureComponentName, GenericFeatureConfig } from '../../components/featuers/types';

import BaseEditDialog from '../base-edit-dialog';
import { EditFactory } from './edit-feature-config-factory';

interface Props {
  defaultValue: GenericFeatureConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (data: GenericFeatureConfig) => void;
  name: FeatureComponentName;
}

export function EditFeatureConfigDialog({
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
      dialogTitle="Edit Featurs"
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
          form="edit-feature-config-form"
        >
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
