import { IUserUsage } from 'src/types/user';

export class UserUsageMapper {
  static fromApi(data: any): IUserUsage {
    return {
      hasOneProjectFreeTrial: data.hasOneProjectFreeTrial,
      projectsCount: data.projectsCount,
    };
  }
}
