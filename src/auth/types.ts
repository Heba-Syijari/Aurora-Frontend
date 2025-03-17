import { Gender } from 'src/types';
import { ISubscription } from 'src/types/subscription';
import { IUser, IUserUsage } from 'src/types/user';

// ----------------------------------------------------------------------

export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUserType = null | undefined | IUser;
export type AuthUserSubscription = null | undefined | ISubscription;
export type AuthUserUsage = null | undefined | IUserUsage;

export type AuthStateType = {
  status?: string;
  loading: boolean;
  user: AuthUserType;
  subscription: AuthUserSubscription;
};

// ----------------------------------------------------------------------

export type RegisterCredentials = {
  name: string;
  email: string;
  password: string;
  gender: Gender;
  phoneNumber: string;
};

type CanRemove = {
  refresh: () => Promise<any>;
  login?: (email: string, password: string) => Promise<void>;
  register?: (credentials: RegisterCredentials) => Promise<void>;
  //
  loginWithGoogle?: (token: string) => Promise<void>;
  loginWithGithub?: () => Promise<void>;
  loginWithTwitter?: () => Promise<void>;
  //
  confirmRegister?: (email: string, code: string) => Promise<void>;
  forgotPassword?: (email: string) => Promise<void>;
  resendCodeRegister?: (email: string) => Promise<void>;
  newPassword?: (email: string, code: string, password: string) => Promise<void>;
};

export type JWTContextType = CanRemove & {
  user: AuthUserType;
  method: string;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  subscription: AuthUserSubscription;
  subscriptionLoading: boolean;
  userUsage: AuthUserUsage;
  userUsageLoading: boolean;
  refreshUserUsage: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: (token: string) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
  isUnauthenticatedError: boolean;
  hasAuthToken: boolean;
};
