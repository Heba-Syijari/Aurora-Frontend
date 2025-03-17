import { genderTypes } from 'src/types';

export const gender = genderTypes.map((type) => ({
  label: `${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()}`,
  value: type,
}));
