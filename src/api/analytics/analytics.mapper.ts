import { IActiveUsersMetric } from 'src/types/analytics';

export class AnalyticsMapper {
  static mapActiveUser(metric: any): IActiveUsersMetric {
    return {
      value: metric.value,
      category: metric.category,
    };
  }
}
