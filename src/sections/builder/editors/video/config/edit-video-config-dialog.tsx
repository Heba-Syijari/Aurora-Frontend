import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, MenuItem, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup } from 'src/components/custom/form-group';
import FormProvider, { RHFSelect } from 'src/components/hook-form';
import { BaseButton } from 'src/components/styled/button';
import { VideoData } from 'src/sections/builder/components/video/types';
import { IVideo } from 'src/types/media';
import * as Yup from 'yup';
import BaseEditDialog from '../../base-edit-dialog';
import { ColorBox } from '../../common/color-box';
import { getPaletteColorsMap, paletteColors } from '../../common/colors';
import { RHFColorsGroup } from '../../common/styled';

interface Props {
  defaultValue: VideoData;
  onSave: (v: Partial<VideoData>) => void;
  videos: IVideo[];
  open: boolean;
  onCloseClicked: VoidFunction;
}

export function EditVideoConfigDialog({
  defaultValue,
  open,
  onCloseClicked,
  onSave,
  videos,
}: Props) {
  const theme = useTheme();

  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  const schema = Yup.object().shape({
    videoId: Yup.number().required('This field is required'),
    titleTextColor: Yup.string(),
    descriptionTextColor: Yup.string(),
  });

  const defaultValues = {
    videoId: defaultValue.videoId,
    titleTextColor: defaultValue.titleTextColor,
    descriptionTextColor: defaultValue.descriptionTextColor,
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const { handleSubmit, reset } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      onSave(data);
    } catch (error) {
      console.error(error);
    }
  });

  const handleClose = () => {
    onCloseClicked();
    reset();
  };

  return (
    <BaseEditDialog
      open={open}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
      scroll="body"
      dialogTitle="Edit video config"
    >
      <DialogContent>
        <FormProvider id="edit-video-config-form" methods={methods} onSubmit={onSubmit}>
          <Stack spacing={2} sx={{ py: 2 }}>
            <FormGroup label="Video" labelFor="videoId">
              <RHFSelect id="videoId" name="videoId">
                {videos.map((item) => (
                  <MenuItem value={item.id} key={item.id}>
                    {item.title}
                  </MenuItem>
                ))}
              </RHFSelect>
            </FormGroup>

            {defaultValue.titleTextColor && (
              <FormGroup label="Title color">
                <RHFColorsGroup
                  name="titleTextColor"
                  row
                  options={paletteColors.map((color) => ({
                    value: color,
                    label: <ColorBox color={paletteColorsMap[color]} />,
                  }))}
                  sx={{ gap: theme.spacing(2) }}
                />
              </FormGroup>
            )}

            {defaultValue.descriptionTextColor && (
              <FormGroup label="Description color">
                <RHFColorsGroup
                  name="descriptionTextColor"
                  row
                  options={paletteColors.map((color) => ({
                    value: color,
                    label: <ColorBox color={paletteColorsMap[color]} />,
                  }))}
                  sx={{ gap: theme.spacing(2) }}
                />
              </FormGroup>
            )}
          </Stack>
        </FormProvider>
      </DialogContent>

      <DialogActions>
        <BaseButton color="primary" variant="contained" type="submit" form="edit-video-config-form">
          Save
        </BaseButton>
      </DialogActions>
    </BaseEditDialog>
  );
}
