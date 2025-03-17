const errorMessages = new Set([
  'network error', // Chrome
  'Failed to fetch', // Chrome
  'NetworkError when attempting to fetch resource.', // Firefox
  'The Internet connection appears to be offline.', // Safari 16
  'Load failed', // Safari 17+
  'Network request failed', // `cross-fetch`
  'fetch failed', // Undici (Node.js)
  'terminated', // Undici (Node.js)

  'Token verification timeout', // from our server
]);

export function isNetworkError(error: Error): boolean {
  if (error.message === 'Load failed') {
    return error.stack === undefined;
  }

  return errorMessages.has(error.message);
}

export function isUnauthenticated(error: Error): boolean {
  const message = error.message.toLowerCase();
  return message === 'unauthenticated' || message === 'unauthorized';
}
