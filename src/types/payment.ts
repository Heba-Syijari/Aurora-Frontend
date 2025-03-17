import { IDomainRegistration } from './domain';
import { IDonation } from './donation';
import { ISubscription } from './subscription';
import { IUserInfo } from './user';

export enum PaymentType {
  SUBSCRIPTION = 'SUBSCRIPTION',
  DOMAIN = 'DOMAIN',
  DONATION = 'DONATION',
}

export type PaymentTypeVariation = `${PaymentType}`;

export const paymentTypes = Object.values(PaymentType);

export enum PaymentStatus {
  PAID = 'PAID',
  UNPAID = 'UNPAID',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
}

export type PaymentStatusVariation = `${PaymentStatus}`;

export const paymentStatuses = Object.values(PaymentStatus);

export interface IPayment {
  id: number;
  cost: number;
  type: PaymentTypeVariation;
  status: PaymentStatusVariation;
  userId: string;
  user: IUserInfo;
  createdAt: string;

  subscriptionId?: number;
  domainRegistrationId?: number;
  donationId?: number;
}

export interface IPaymentDetails extends IPayment {
  subscription?: Pick<ISubscription, 'status' | 'expireAt' | 'plan'>;
  domainRegistration?: Pick<IDomainRegistration, 'domainName' | 'status' | 'years'>;
  donation?: Pick<IDonation, 'type' | 'status'>;
}

// ------------------------------------------------------------

export const paymentCountries = [
  {
    name: 'United States',
    code: 'USA',
  },
  {
    name: 'Saudi Arabia',
    code: 'SAU',
  },
  {
    name: 'United Arab Emirates',
    code: 'ARE',
  },
  {
    name: 'Syria',
    code: 'SYR',
  },
  {
    name: 'Bahrain',
    code: 'BHR',
  },
];

// ------------------------------------------------------------

export const paymentMethods = [
  {
    name: 'Visa Card',
    code: 'VISA',
  },
  {
    name: 'American Express',
    code: 'AMEXP',
  },
  {
    name: 'Master Card',
    code: 'MASTER',
  },
  {
    name: 'Mada card',
    code: 'MADA',
  },
];

// ----------------------------------------------------------------------

export type IPaymentTableFilterValue = string;

export type IPaymentTableFilters = {
  status: string;
  type: string;
  cost?: string;
};
