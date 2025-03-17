// routes
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

// API
export const GRAPHQL_HOST_API = process.env.NEXT_PUBLIC_GRAPHQL_HOST_API as string;
export const RESTFUL_HOST_API = process.env.NEXT_PUBLIC_RESTFUL_HOST_API as string;
export const HASURA_API = process.env.NEXT_PUBLIC_HASURA_API as string;
export const ASSETS_API = process.env.NEXT_PUBLIC_ASSETS_API;

// Other
export const LOCAL_STORAGE_PREFIX = process.env.NEXT_PUBLIC_LOCAL_STORAGE_PREFIX as string;

// Google
export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string;

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'
