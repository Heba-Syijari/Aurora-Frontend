export interface IUser {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  imagePath?: string;
  gender: string;
  verified: boolean;
  createdAt: string;
  preferences?: IUserPreferences;
}

export interface IUserInfo {
  id: string;
  name: string;
  email: string;
}

export interface IUserPreferences {
  imageModel: string;
  textModel: string;
}

export interface IUserUsage {
  projectsCount: number;
  hasOneProjectFreeTrial: boolean;
}
