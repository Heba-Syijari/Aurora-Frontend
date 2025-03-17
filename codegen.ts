import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    'src/graphql/generated/index.ts': {
      documents: ['src/graphql/features/**/*.{ts,tsx}'],
      schema: 'http://127.0.0.1:3000/graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        fetcher: {
          func: 'src/lib/react-query/custom-fetcher#fetchData',
          isReactHook: false, // optional, defaults to false, controls the function's signature.
        },
        legacyMode: true,
      },
    },
    'src/graphql/hasura/index.ts': {
      documents: ['src/graphql/hasura/**/*.{ts,tsx}'],
      schema: {
        'http://localhost:8080/v1/graphql': {
          headers: {
            'x-hasura-admin-secret': 'myadminsecretkey',
          },
        },
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
      config: {
        fetcher: {
          func: 'src/lib/react-query/hasura-fetcher#fetchData',
          isReactHook: false, // optional, defaults to false, controls the function's signature.
        },
        legacyMode: true,
      },
    },
  },
};

export default config;
