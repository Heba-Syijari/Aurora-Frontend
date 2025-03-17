import { Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { StyledRHFMultiCheckbox } from 'src/components/styled/checkbox';
import { PresentationVolumeType } from 'src/types/website-presentation';

type VisualTypesOptionType = {
  id: number;
  name: string;
  type: PresentationVolumeType;
};

type VisualTypesSectionProps = {
  options: VisualTypesOptionType[];
};

export default function VisualTypesSection({ options }: VisualTypesSectionProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight={500}>
        Visual types
      </Typography>

      <StyledRHFMultiCheckbox
        name="visualTypeIds"
        options={options.map(({ id, name }) => ({ label: name, value: id }))}
        row
        sx={{ gap: 1.5 }}
      />
    </Stack>
  );
}
