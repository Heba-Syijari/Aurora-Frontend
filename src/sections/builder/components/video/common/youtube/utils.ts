import { getURLHostname } from 'src/utils/url';

export function extractYoutubeId(url: string) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : '';
}

export function isYoutubeURL(url: string): boolean {
  const hostname = getURLHostname(url);

  return hostname.includes('youtube.com') || hostname.includes('youtu.be');
}
