import { SvgIcon, SvgIconProps } from '@mui/material';

export function ContactIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="32"
        height="33"
        viewBox="0 0 32 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 14.5H22"
          stroke="#4E92FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 18.5H22"
          stroke="#4E92FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 5.5H6C5.44771 5.5 5 5.94771 5 6.5V26.5C5 27.0523 5.44771 27.5 6 27.5H26C26.5523 27.5 27 27.0523 27 26.5V6.5C27 5.94771 26.5523 5.5 26 5.5Z"
          stroke="#4E92FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 5.5V27.5"
          stroke="#4E92FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}
