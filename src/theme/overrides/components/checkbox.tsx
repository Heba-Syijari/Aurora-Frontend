import { Theme } from '@mui/material/styles';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

// ----------------------------------------------------------------------

const Icon = (props: SvgIconProps) => (
  <SvgIcon {...props} sx={{ border: '1px solid #E9ECEE', background: '#FFFFFF' }}>
    <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="white" />
    <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#E9ECEE" />
  </SvgIcon>
);

const CheckedIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="#DC9457" />
    <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="#DC9457" />
    <g clipPath="url(#clip0_3182_50248)">
      <path
        d="M10.8334 13.8504L16.1954 8.48779L17.0208 9.31263L10.8334 15.5L7.12109 11.7877L7.94593 10.9629L10.8334 13.8504Z"
        fill="white"
        stroke="white"
        strokeWidth="0.4"
      />
    </g>
    <defs>
      <clipPath id="clip0_3182_50248">
        <rect width="14" height="14" fill="white" transform="translate(5 5)" />
      </clipPath>
    </defs>
  </SvgIcon>
);

const IndeterminateIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M17,2 C19.7614,2 22,4.23858 22,7 L22,7 L22,17 C22,19.7614 19.7614,22 17,22 L17,22 L7,22 C4.23858,22 2,19.7614 2,17 L2,17 L2,7 C2,4.23858 4.23858,2 7,2 L7,2 Z M15,11 L9,11 C8.44772,11 8,11.4477 8,12 C8,12.5523 8.44772,13 9,13 L15,13 C15.5523,13 16,12.5523 16,12 C16,11.4477 15.5523,11 15,11 Z" />
  </SvgIcon>
);

export default function Checkbox(theme: Theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        size: 'medium',
        icon: <Icon />,
        checkedIcon: <CheckedIcon />,
        indeterminateIcon: <IndeterminateIcon />,
      },

      styleOverrides: {
        root: {
          padding: 0,
          color: theme.palette.common.white,
          '& svg': {
            border: 0,
            borderRadius: theme.spacing(0.5),
          },
        },
      },
    },
  };
}
