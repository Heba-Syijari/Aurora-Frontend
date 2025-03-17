import { HASURA_API } from 'src/config-global';
import storage from 'src/utils/storage';

export const fetchData =
  <TData, TVariables>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers']
  ): (() => Promise<TData>) =>
  async () => {
    const token = storage.getToken();

    const res = await fetch(HASURA_API, {
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
  };
