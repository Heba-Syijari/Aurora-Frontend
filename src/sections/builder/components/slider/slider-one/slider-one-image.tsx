import { useTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';

export default function SliderOneImage() {
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);
  const primaryColor = paletteColorsMap['primary.main'];

  return (
    <svg
      width="650"
      height="400"
      viewBox="0 0 673 619"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M325.783 0.490307C408.771 -2.01231 490.957 20.6098 553.385 75.3265C620.107 133.807 663.533 214.435 670.75 302.847C678.609 399.125 665.758 506.291 593.828 570.796C523.868 633.536 419.479 619.582 325.783 612.209C241.946 605.613 157.754 589.666 96.8542 531.693C34.555 472.388 -2.03982 388.797 0.80357 302.847C3.56586 219.348 50.3334 145.57 111.511 88.6518C170.286 33.9679 245.526 2.91056 325.783 0.490307Z"
        fill={primaryColor}
      />
    </svg>
  );
}
