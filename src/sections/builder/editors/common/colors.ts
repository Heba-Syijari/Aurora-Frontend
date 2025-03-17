import _ from 'lodash';

export const paletteColors = [
  'primary.main',
  'secondary.main',
  'background.neutral',
  'background.secondary',
  'text.primary',
  'text.secondary',
  'common.white',
  'common.black',
  'common.neutral',
];

export function getPaletteColorsMap(themePalette: object) {
  const map: Record<string, string> = {};

  paletteColors.forEach((color) => {
    map[color] = _.get(themePalette, color);
  });

  return map;
}
