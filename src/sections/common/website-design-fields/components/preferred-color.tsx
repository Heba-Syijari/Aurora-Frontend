import { FormHelperText, Stack, Typography } from '@mui/material';
import { useGetPalettes } from 'src/api/palette';
import { TextButton } from 'src/components/styled/button';
import { StyledRHFTabsGroup } from 'src/components/styled/radio';
import { useBoolean } from 'src/hooks/use-boolean';
import { GenerateThemeDialog } from '../../generate-theme-dialog';
import PaletteItem from './palette-item';

type PreferredColorProps = {
  onValueChange: (value: string) => void;
};

export default function PreferredColor({ onValueChange }: PreferredColorProps) {
  const themeDialog = useBoolean();

  const { palettes, isLoading, refetch } = useGetPalettes();

  const renderLoading = <div>Loading...</div>;
  const renderPalettes = (
    <StyledRHFTabsGroup
      name="palette"
      row
      options={palettes.map(({ colors }) => ({
        value: JSON.stringify(colors),
        label: <PaletteItem colors={colors} />,
      }))}
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        },
        gap: (theme) => theme.spacing(3),
        '& .MuiFormControlLabel-root': {
          backgroundColor: (theme) => `${theme.palette.background.default} !important`,
          p: 1,
        },
      }}
    />
  );
  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight={500} textTransform="capitalize">
        website preferred colors
      </Typography>
      {isLoading ? renderLoading : renderPalettes}

      <FormHelperText>
        Do you need more customization?{' '}
        <TextButton onClick={themeDialog.onTrue} type="button" sx={{ color: 'primary.main' }}>
          Generate one
        </TextButton>
      </FormHelperText>
      <GenerateThemeDialog
        open={themeDialog.value}
        onCloseClicked={themeDialog.onFalse}
        onValueSelected={onValueChange}
        onGenerateSuccess={refetch}
        isPalettesFetching={isLoading}
      />
    </Stack>
  );
}
