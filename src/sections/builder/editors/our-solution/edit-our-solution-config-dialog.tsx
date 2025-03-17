import { DialogActions, DialogContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BaseButton } from 'src/components/styled/button';
import {
  GenericOurSolutionConfig,
  OurSolutionComponentName,
} from '../../components/our-solution/types';

import BaseEditDialog from '../base-edit-dialog';
import { EditFactory } from './edit-feature-config-factory';

interface Props {
  defaultValue: GenericOurSolutionConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (data: GenericOurSolutionConfig) => void;
  name: OurSolutionComponentName;
}

export function EditOurSolutionConfigDialog({
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
      dialogTitle="Edit Our Solutions"
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
          form="edit-our-solution-config-form"
        >
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
