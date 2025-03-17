const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  console.log({ phase });
  const isLocal = phase === PHASE_DEVELOPMENT_SERVER;
  const isDev = phase === PHASE_PRODUCTION_BUILD && process.env.APP_ENV === 'dev';
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.APP_ENV === 'staging';
  const isProduction = phase === PHASE_PRODUCTION_BUILD && process.env.APP_ENV === 'prod';

  return {
    trailingSlash: true,
    modularizeImports: {
      '@mui/material': {
        transform: '@mui/material/{{member}}',
      },
      '@mui/lab': {
        transform: '@mui/lab/{{member}}',
      },
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/dashboard',
          permanent: false,
        },
      ];
    },
    env: {
      NEXT_PUBLIC_GRAPHQL_HOST_API: (() => {
        return 'https://api-dev.canvablocks.com/graphql';
        if (isLocal) return 'http://localhost:3000/graphql';
        if (isDev) return 'http://kubernetes.docker.internal/graphql';
        if (isStaging) return 'https://api-staging.spreadislam.ai/graphql';
        if (isProduction) return 'https://api.spreadislam.ai/graphql';
      })(),
      NEXT_PUBLIC_RESTFUL_HOST_API: (() => {
        return 'https://api-dev.canvablocks.com/api';
        if (isLocal) return 'http://localhost:3000/api';
        if (isDev) return 'http://kubernetes.docker.internal/api';
        if (isStaging) return 'https://api-staging.spreadislam.ai/api';
        if (isProduction) return 'https://api.spreadislam.ai/api';
      })(),
      NEXT_PUBLIC_HASURA_API: (() => {
        return 'https://api-dev.canvablocks.com/graphql';
        if (isLocal) return 'http://localhost:8080/v1/graphql';
        if (isDev) return 'http://kubernetes.docker.internal:8080/v1/graphql';
        if (isStaging) return 'https://hasura-staging.spreadislam.ai/v1/graphql';
        if (isProduction) return 'https://hasura.spreadislam.ai/v1/graphql';
      })(),
      NEXT_PUBLIC_LOCAL_STORAGE_PREFIX: 'CANVA_BLOCKS_',
      NEXT_PUBLIC_GOOGLE_CLIENT_ID: (() => {
        return '73484405675-ovopj3kplm19nifmg0hvnpe15fleutd8.apps.googleusercontent.com';
        if (isLocal)
          return '1057665029556-j3pbr2e6eb0l2hc4ht685oga52l0khjs.apps.googleusercontent.com';
        if (isDev)
          return '1057665029556-j3pbr2e6eb0l2hc4ht685oga52l0khjs.apps.googleusercontent.com';
        if (isStaging)
          return '73484405675-ovopj3kplm19nifmg0hvnpe15fleutd8.apps.googleusercontent.com';
        if (isProduction)
          return '73484405675-ovopj3kplm19nifmg0hvnpe15fleutd8.apps.googleusercontent.com';
      })(),
    },
  };
};
