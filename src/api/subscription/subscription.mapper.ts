import { ISubscription } from 'src/types/subscription';

export class SubscriptionMapper {
  static fromApi(data: any): ISubscription {
    return {
      id: data.id,
      cost: data.cost,
      userId: data.userId,
      planId: data.planId,
      status: data.status,
      expireAt: data.expireAt,
      createdAt: data.createdAt,
      isExpired: !!data.isExpired,
      expirationDays: data.expirationDays,
      imageGenerations: data.imageGenerations,
      textGenerations: data.textGenerations,
    };
  }
}
