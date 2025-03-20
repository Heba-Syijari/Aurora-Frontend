// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

// carousel
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// editor
import 'react-quill/dist/quill.snow.css';

// ----------------------------------------------------------------------
import { Metadata } from 'next';
// theme
import ThemeProvider from 'src/theme';
import { primaryFont } from 'src/theme/typography';
// components
import MotionLazy from 'src/components/animate/motion-lazy';
import ProgressBar from 'src/components/progress-bar';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';
// auth
import { AuthConsumer, AuthProvider } from 'src/auth/context/jwt';

import SnackbarProvider from 'src/components/snackbar/snackbar-provider';
import { ReactQueryProvider } from 'src/lib/react-query';

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Aurora',
  description:
    'Aurora is a service that helps users create websites that cater to variant themes and content. There are several website templates available that come with pre-built pages and features that are tailored to the needs of websites',
  keywords:
    'event calendars,website templates,drag and drop,customizable,responsive design,search engine optimization,seo optimization,mobile-friendly,user-friendly,analytics,social media integration',
  themeColor: '#ffffff',
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#ffc40d',
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
    {
      rel: 'mask-icon',
      url: '/favicon/safari-pinned-tab.svg',
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={primaryFont.className}>
      <body>
        <ReactQueryProvider>
          <AuthProvider>
            <SettingsProvider
              defaultSettings={{
                themeMode: 'light', // 'light' | 'dark'
                themeDirection: 'ltr', //  'rtl' | 'ltr'
                themeContrast: 'default', // 'default' | 'bold'
                themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
                themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                themeStretch: false,
              }}
            >
              <ThemeProvider>
                <MotionLazy>
                  <SnackbarProvider>
                    <SettingsDrawer />
                    <ProgressBar />
                    <AuthConsumer>{children}</AuthConsumer>
                  </SnackbarProvider>
                </MotionLazy>
              </ThemeProvider>
            </SettingsProvider>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
