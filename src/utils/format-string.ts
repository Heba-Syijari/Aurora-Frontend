export function slugify(value: string) {
  return value.toLowerCase().trim().replace(/ /g, '-').replace(/-+/g, '-');
}

export function formatEnumValue(value: string) {
  return value.toLowerCase().replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim();
}

export function pluralWord(word: string, n: number) {
  return `${n} ${word}${n > 1 ? 's' : ''}`;
}
