import { BoxProps } from '@mui/material/Box';
import Link from '@mui/material/Link';
import { forwardRef } from 'react';
// routes
import { RouterLink } from 'src/routes/components';
import SvgColor from '../svg-color';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  full?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, full, ...other }, ref) => {
    const logo = (
      <SvgColor
        src="/logo/logo_single.svg"
        sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
      />
    );

    const logoFull = (
      <SvgColor
        src="/logo/logo_full.svg"
        sx={{ width: '100%', height: 100, cursor: 'pointer', minWidth: 50, ...sx }}
      />
    );

    const renderLogo = full ? logoFull : logo;

    if (disabledLink) {
      return renderLogo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {renderLogo}
      </Link>
    );
  }
);

export default Logo;
