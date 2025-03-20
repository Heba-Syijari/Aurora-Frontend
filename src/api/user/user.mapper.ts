import { IUser } from 'src/types/user';

export class UserMapper {
  static fromApi(data: any): IUser {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      imagePath: data.imagePath,
      gender: data.gender,
      verified: data.verified,
      createdAt: data.createdAt,
      preferences: data.preferences,
    };
  }
}
