import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { ChromePicker } from 'react-color';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query';
import { useCreatePalette } from 'src/api/palette/use-create-palette';
import Iconify from 'src/components/iconify/iconify';
import { BaseButton, BaseLoadingButton } from 'src/components/styled/button';
import { GetPaletteQuery } from 'src/graphql/generated';
import { PaletteType } from 'src/sections/generator/view/types';

interface GenerateLogoDialogProps {
  open: boolean;
  onCloseClicked: () => void;
  onValueSelected: (value: string) => void;
  isPalettesFetching: boolean;
  onGenerateSuccess: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<GetPaletteQuery, unknown>>;
}

const defaultColorsValue = {
  neutral: '',
  primary: '',
  secondary: '',
  subTitles: '',
  titles: '',
};

export default function GenerateThemeDialog({
  open,
  onCloseClicked,
  onValueSelected,
  onGenerateSuccess,
  isPalettesFetching,
}: GenerateLogoDialogProps) {
  const [colors, setColors] = useState<PaletteType>(defaultColorsValue);
  const { createPalette, isLoading } = useCreatePalette();
  const [activeColorKey, setActiveColorKey] = useState<keyof PaletteType | null>(null);

  const resetDefault = () => {
    setColors(defaultColorsValue);
    setActiveColorKey(null);
  };

  const handleGenerate = async () => {
    try {
      const generatedPalette = await createPalette(colors);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...paletteWithoutId } = generatedPalette;
      await onGenerateSuccess();
      onValueSelected(JSON.stringify(paletteWithoutId));

      resetDefault();
      onCloseClicked();
    } catch (error) {
      console.error('Error generating palette:', error);
    }
  };

  const handleColorBoxClick = (key: keyof PaletteType) => {
    setActiveColorKey(key);
  };

  const handleColorChange = (color: any) => {
    if (activeColorKey) {
      setColors((prevColors) => ({
        ...prevColors,
        [activeColorKey]: color.hex,
      }));
    }
  };

  const handleCancelClick = () => {
    resetDefault();
    onCloseClicked();
  };

  return (
    <Dialog open={open} onClose={onCloseClicked} maxWidth="sm" fullWidth scroll="body">
      <DialogTitle sx={{ backgroundColor: (theme) => theme.palette.background.primary }}>
        <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Generate Theme</Typography>
          <IconButton onClick={onCloseClicked} color="inherit">
            <Iconify icon="material-symbols:close" width={24} />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent>
        <Box sx={{ py: 2 }}>
          <Box
            sx={{
              display: 'inline-flex',
              width: '100%',
              height: '50px',
              border: '1px solid #E9ECEE',
              verticalAlign: 'middle',
              '& > *': { flex: 1 },
              borderRadius: (theme) => theme.spacing(0.5),
              overflow: 'hidden',
            }}
          >
            {(Object.keys(colors) as (keyof PaletteType)[]).map((key) => (
              <Box
                key={key}
                onClick={() => handleColorBoxClick(key)}
                sx={{
                  backgroundColor: colors[key],
                  color: colors[key],
                  cursor: 'pointer',
                  ...(colors[key]
                    ? {}
                    : {
                        borderRight: '1px solid #E9ECEE',
                        display: ' flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }),
                }}
              >
                {key}
              </Box>
            ))}
          </Box>

          {activeColorKey && (
            <Box mt={2} width={1}>
              <Typography variant="subtitle2" mb={2} sx={{ color: 'primary.main' }}>
                Select color for {activeColorKey}
              </Typography>
              <ChromePicker color={colors[activeColorKey]} onChange={handleColorChange} />
            </Box>
          )}
        </Box>
      </DialogContent>

      <DialogActions>
        <BaseLoadingButton
          variant="contained"
          loading={isLoading || isPalettesFetching}
          onClick={handleGenerate}
          color="primary"
        >
          Generate
        </BaseLoadingButton>
        <BaseButton variant="outlined" onClick={handleCancelClick} color="primary">
          Cancel
        </BaseButton>
      </DialogActions>
    </Dialog>
  );
}
