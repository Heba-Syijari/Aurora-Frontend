import localFont from 'next/font/local';

// ----------------------------------------------------------------------

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
    },
  };
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
  }
}

export const primaryFont = localFont({
  src: [
    // Black
    {
      path: './fonts/Atwic/Atwic-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-BlackItalic.woff',
      weight: '900',
      style: 'italic',
    },
    {
      path: './fonts/Atwic/Atwic-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },

    // Bold
    {
      path: './fonts/Atwic/Atwic-Bold.woff',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-BoldItalic.woff',
      weight: 'bold',
      style: 'italic',
    },
    {
      path: './fonts/Atwic/Atwic-BoldItalic.woff2',
      weight: 'bold',
      style: 'italic',
    },

    // SemiBold
    {
      path: './fonts/Atwic/Atwic-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-SemiBoldItalic.woff',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/Atwic/Atwic-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },

    // Medium
    {
      path: './fonts/Atwic/Atwic-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Atwic/Atwic-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },

    // Regular
    {
      path: './fonts/Atwic/Atwic-Regular.woff',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-RegularItalic.woff',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: './fonts/Atwic/Atwic-RegularItalic.woff2',
      weight: 'normal',
      style: 'italic',
    },

    // Light
    {
      path: './fonts/Atwic/Atwic-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Atwic/Atwic-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Atwic/Atwic-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
  ],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// ----------------------------------------------------------------------

// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts

export const typography = {
  fontFamily: primaryFont.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 500,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'unset',
  },
} as const;
