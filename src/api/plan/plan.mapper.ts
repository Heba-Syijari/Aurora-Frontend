import { IPlan } from 'src/types/plan';

export class PlanMapper {
  static fromApi(data: any): IPlan {
    return {
      id: data.id,
      name: data.name,
      price: data.price,
      description: data.description,
      period: data.period,
      periodType: data.periodType,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      discount: data.discount,
      extraFeatures: data.extraFeatures,
      features: data.features,
    };
  }
}
