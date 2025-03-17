import { useTheme } from '@mui/material/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Map, Marker } from 'pigeon-maps';
import { useMemo } from 'react';
import { getPaletteColorsMap } from 'src/sections/builder/editors/common/colors';
import { MapConfig } from '../types';

type Props = {
  data: MapConfig;
};

export function ContacMap({ data }: Props) {
  const { markerColor, markerPosition } = data;
  const theme = useTheme();
  const paletteColorsMap = useMemo(() => getPaletteColorsMap(theme.palette), [theme.palette]);

  return (
    <Map height={300} limitBounds="center" defaultCenter={markerPosition} defaultZoom={11}>
      <Marker width={50} color={paletteColorsMap[markerColor]} anchor={markerPosition} />
    </Map>
  );
}
