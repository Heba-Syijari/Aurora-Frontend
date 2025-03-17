import { DialogActions, DialogContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { BaseButton } from 'src/components/styled/button';
import { GenericSliderConfig, SliderComponentName } from '../../components/slider/types';
import BaseEditDialog from '../base-edit-dialog';
import { EditFactory } from './edit-slider-config-factory';

interface Props {
  defaultValue: GenericSliderConfig;
  open: boolean;
  onCloseClicked: () => void;
  onSave: (data: GenericSliderConfig) => void;
  name: SliderComponentName;
}

export function EditSliderConfigDialog({
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
      dialogTitle="Edit Slides"
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
          form="edit-slider-config-form"
        >
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
