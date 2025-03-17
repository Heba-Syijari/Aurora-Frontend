import { Stack } from '@mui/material';
import { LogoType, LogoValue } from 'src/sections/generator/view/types';
import { LogoFields } from './components';
import PreferredColor from './components/preferred-color';
import PreferredFont from './components/preferred-font';

type WebsiteDesignFieldsProps = {
  defaultLogoType: LogoType;
  onLogoTypeChange: (value: LogoType) => void;
  onLogoValueChange: (value: LogoValue) => void;
  onPaletteValueChange: (value: string) => void;
};

export default function WebsiteDesignFields({
  defaultLogoType,
  onLogoTypeChange,
  onLogoValueChange,
  onPaletteValueChange,
}: WebsiteDesignFieldsProps) {
  return (
    <Stack spacing={4}>
      <LogoFields
        defaultType={defaultLogoType}
        onValueChange={onLogoValueChange}
        onTypeChange={onLogoTypeChange}
      />
      {/* <PreferredMode /> */}
      <PreferredColor onValueChange={onPaletteValueChange!} />

      <PreferredFont />

      {/* {showThemeFields && <ThemeSection {...(themeSectionProps || {})} />} */}
    </Stack>
  );
}
