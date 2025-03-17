import { lighten, useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';

export type SubscriptionType = 'one' | 'two' | 'three';
type Props = {
  subscription: SubscriptionType;
};
export function SubscriptionImage({ subscription }: Props) {
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const primaryColor = paletteColorsMap['primary.main'];
  const lightPrimary1 = lighten(primaryColor, 0.5);
  const lightPrimary2 = lighten(primaryColor, 0.7);
  const lightPrimary3 = lighten(primaryColor, 0.9);
  if (subscription === 'one')
    return (
      <svg
        width="72"
        height="73"
        viewBox="0 0 72 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.20752" width="72" height="72" rx="16" fill={lightPrimary3} />
        <path
          d="M36 17.2075C30.9609 17.2075 26.1282 19.2093 22.565 22.7725C19.0018 26.3357 17 31.1684 17 36.2075C17 41.2466 19.0018 46.0794 22.565 49.6425C26.1282 53.2057 30.9609 55.2075 36 55.2075L36 36.2075V17.2075Z"
          fill={primaryColor}
        />
        <path
          d="M36 55.2075C41.0391 55.2075 45.8718 53.2057 49.435 49.6425C52.9982 46.0794 55 41.2466 55 36.2075C55 31.1684 52.9982 26.3357 49.435 22.7725C45.8718 19.2093 41.0391 17.2075 36 17.2075L36 36.2075L36 55.2075Z"
          fill={lightPrimary1}
        />
      </svg>
    );

  if (subscription === 'two')
    return (
      <svg
        width="72"
        height="73"
        viewBox="0 0 72 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.20752" width="72" height="72" rx="16" fill="white" />
        <rect x="17" y="17.2075" width="18.4865" height="38" fill={primaryColor} />
        <rect x="35.4863" y="17.2075" width="19.5135" height="38" fill={lightPrimary1} />
        <rect x="35.4863" y="35.6938" width="19.5135" height="19.5135" fill={lightPrimary2} />
      </svg>
    );

  if (subscription === 'three') {
    return (
      <svg
        width="72"
        height="73"
        viewBox="0 0 72 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.20752" width="72" height="72" rx="16" fill={lightPrimary3} />
        <path
          d="M57.1639 46.8539L57.1732 46.8489H57.1551L46.5288 41.0909L35.8849 35.3228L25.2405 41.0909L14.6143 46.8489H14.5962L14.6054 46.8539L14.5962 46.859H14.6143L25.2405 52.617L35.8849 58.3851L46.5288 52.617L57.1551 46.859H57.1732L57.1639 46.8539Z"
          fill={lightPrimary2}
        />
        <path
          d="M57.1639 24.7387L57.1732 24.734H57.1551L46.5288 18.9756L35.8849 13.2075L25.2405 18.9756L14.6143 24.734H14.5962L14.6054 24.7387L14.5962 24.7437H14.6143L25.2405 30.5021L35.8849 36.2703L46.5288 30.5021L57.1551 24.7437H57.1732L57.1639 24.7387Z"
          fill={primaryColor}
        />
        <path d="M14.6143 24.27V47.3226L35.8849 35.7965L14.6143 24.27Z" fill={lightPrimary1} />
        <path d="M57.155 24.27V47.3226L35.8848 35.7965L57.155 24.27Z" fill={lightPrimary1} />
      </svg>
    );
  }
}
