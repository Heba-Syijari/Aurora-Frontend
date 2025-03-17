import { Box, BoxProps } from '@mui/material';

const TopLeftWave = ({ sx, ...props }: BoxProps) => (
  <Box
    component="svg"
    width="1440"
    height="116"
    viewBox="0 0 1440 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ width: '100%', height: 'auto', ...(sx || {}) }}
    {...props}
  >
    <path
      d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
      fill="currentColor"
    />
  </Box>
);

const TopRightWave = ({ sx, ...props }: BoxProps) => (
  <Box
    component="svg"
    width="1440"
    height="116"
    viewBox="0 0 1440 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ width: '100%', height: 'auto', ...(sx || {}) }}
    {...props}
  >
    <path
      d="M0 64.5909H349.922C606.664 64.5909 859.771 -7.62939e-06 1080 -7.62939e-06C1300.23 -7.62939e-06 1440 64.5909 1440 64.5909V116H0V64.5909Z"
      fill="currentColor"
    />
  </Box>
);

const BottomLeftWave = ({ sx, ...props }: BoxProps) => (
  <Box
    component="svg"
    width="1440"
    height="116"
    viewBox="0 0 1440 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ width: '100%', height: 'auto', ...(sx || {}) }}
    {...props}
  >
    <path
      d="M1440 51.4091H1090.08C833.336 51.4091 580.229 116 360 116C139.771 116 0 51.4091 0 51.4091V0H1440V51.4091Z"
      fill="currentColor"
    />
  </Box>
);

const BottomRightWave = ({ sx, ...props }: BoxProps) => (
  <Box
    component="svg"
    width="1440"
    height="116"
    viewBox="0 0 1440 116"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ width: '100%', height: 'auto', ...(sx || {}) }}
    {...props}
  >
    <path
      d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
      fill="currentColor"
    />
  </Box>
);

type Props = {
  curve: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
} & BoxProps;

export const Wave = ({ curve, ...props }: Props) => {
  switch (curve) {
    case 'top-left':
      return <TopLeftWave {...props} />;

    case 'top-right':
      return <TopRightWave {...props} />;

    case 'bottom-left':
      return <BottomLeftWave {...props} />;

    case 'bottom-right':
      return <BottomRightWave {...props} />;

    default:
      return null;
  }
};
