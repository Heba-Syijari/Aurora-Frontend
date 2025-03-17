import { DialogActions, DialogContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BaseButton } from 'src/components/styled/button';
import { GenericTeamConfig, TeamComponentName } from '../../components/team/types';
import BaseEditDialog from '../base-edit-dialog';
import { EditFactory } from './edit-team-config-factory';

interface Props {
  defaultValue: GenericTeamConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (data: GenericTeamConfig) => void;
  name: TeamComponentName;
}

export function EditTeamConfigDialog({ defaultValue, open, onCloseClicked, onSave, name }: Props) {
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
      dialogTitle="Edit Team"
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
        <BaseButton color="primary" variant="contained" type="submit" form="edit-team-config-form">
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
