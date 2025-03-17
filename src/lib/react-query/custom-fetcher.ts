import { GRAPHQL_HOST_API } from 'src/config-global';
import { NetworkErrorException, UnauthorizedException } from 'src/exceptions';
import { isNetworkError, isUnauthenticated } from 'src/utils/errors';
import storage from 'src/utils/storage';

export const fetchData =
  <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers']
  ): (() => Promise<TData>) =>
  async () => {
    try {
      const token = storage.getToken();

      const res = await fetch(GRAPHQL_HOST_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
          ...options,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      const json = await res.json();

      if (json.errors) {
        const { message } = json.errors[0] || {};
        throw new Error(message || 'Error…');
      }

      return json.data;
    } catch (err) {
      if (isNetworkError(err)) {
        throw new NetworkErrorException();
      }

      if (isUnauthenticated(err)) {
        throw new UnauthorizedException();
      }

      throw err;
    }
  };
