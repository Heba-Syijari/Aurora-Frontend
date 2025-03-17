import { IPlanInfo } from './plan';

export type ISubscription = {
  id: number;
  cost: number;
  userId: string;
  planId: number;
  status: ISubscriptionStatus;
  expireAt: string;
  createdAt: string;
  imageGenerations: number;
  textGenerations: number;

  isExpired?: boolean;
  expirationDays?: number;
  plan?: IPlanInfo;
};

export enum SubscriptionStatus {
  CREATED = 'CREATED',
  ACTIVE = 'ACTIVE',
}

export type ISubscriptionStatus = `${SubscriptionStatus}`;
