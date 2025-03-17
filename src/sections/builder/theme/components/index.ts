import { Theme } from '@mui/material/styles';
import Button from './button';
import Chip from './chip';
import CssBaseline from './css-baseline';
import Stack from './stack';

export function componentsOverrides(theme: Theme) {
  const components = {
    ...CssBaseline(theme),
    ...Button(theme),
    ...Stack(theme),
    ...Chip(theme),
  };
  return components;
}
