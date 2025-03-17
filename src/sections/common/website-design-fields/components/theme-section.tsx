import { Stack, Typography } from '@mui/material';
import { useGetThemes } from 'src/api/theme';
import { StyledRHFTabsGroup } from 'src/components/styled/radio';

type Props = {
  itemHeight?: number | string;
};

export default function ThemeSection({ itemHeight = 218 }: Props) {
  const { themes } = useGetThemes();

  return (
    <Stack spacing={2}>
      <Typography variant="body1" fontWeight={500} textTransform="capitalize">
        Preferred theme
      </Typography>

      <StyledRHFTabsGroup
        name="themeId"
        options={themes.map((option) => ({
          value: option.id,
          label: (
            <img
              src={option.thumbnail}
              alt={option.name}
              style={{
                display: 'block',
                width: '100%',
                height: itemHeight,
                objectFit: 'cover',
                objectPosition: 'top',
              }}
            />
          ),
        }))}
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: (theme) => theme.spacing(2),
        }}
      />
    </Stack>
  );
}
