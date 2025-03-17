// @mui
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// theme
// components
import Iconify from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';
//
import { NAV } from '../config-layout';

// ----------------------------------------------------------------------

export default function NavToggleButton({ sx, ...other }: IconButtonProps) {
  const theme = useTheme();

  const settings = useSettingsContext();

  const lgUp = useResponsive('up', 'lg');

  if (!lgUp) {
    return null;
  }

  return (
    <IconButton
      size="small"
      onClick={() =>
        settings.onUpdate('themeLayout', settings.themeLayout === 'vertical' ? 'mini' : 'vertical')
      }
      sx={{
        p: 0.5,
        bottom: 32,
        position: 'fixed',
        left: NAV.W_VERTICAL - 12,
        zIndex: theme.zIndex.appBar + 1,
        border: `dashed 1px ${theme.palette.primary.main}`,
        bgcolor: 'background.default',
        '&:hover': {
          bgcolor: 'background.default',
        },
        height: 25,
        ...sx,
      }}
      {...other}
    >
      <Iconify
        width={16}
        color="primary.main"
        icon={
          settings.themeLayout === 'vertical'
            ? 'eva:arrow-ios-back-fill'
            : 'eva:arrow-ios-forward-fill'
        }
      />
    </IconButton>
  );
}
