import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSettingsContext } from 'src/components/settings';
import { useResponsive } from 'src/hooks/use-responsive';

// ----------------------------------------------------------------------

const FooterEl = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: `1px solid ${theme.palette.divider}`,
  marginLeft: 'auto',
}));

// ----------------------------------------------------------------------

export default function Footer() {
  const settings = useSettingsContext();

  const lgUp = useResponsive('up', 'lg');

  return (
    <FooterEl
    // sx={{
    //   ...(lgUp && {
    //     width: `calc(100% - ${NAV.W_VERTICAL + 1}px)`,
    //   }),
    // }}
    >
      <Typography variant="body2">All rights reserved &copy; Aurora 2025.</Typography>

      <Stack spacing={1.25} flexDirection="row">
        {/* <Typography
          variant="body2"
          component={RouterLink}
          href=""
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          Terms of use
        </Typography>

        <Typography variant="body2">|</Typography>

        <Typography
          variant="body2"
          component={RouterLink}
          href=""
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          Privacy Policy
        </Typography> */}
      </Stack>
    </FooterEl>
  );
}
