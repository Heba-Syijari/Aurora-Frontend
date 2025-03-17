export interface IDomainRegistration {
  id: number;
  years: number;
  amount: number;
  domainName: string;
  isFree: boolean;
  status: IDomainRegistrationStatus;
  userId: string;
  createdAt: string;
}

export enum DomainRegistrationStatus {
  CREATED = 'CREATED',
  COMPLETED = 'COMPLETED',
}

export type IDomainRegistrationStatus = `${DomainRegistrationStatus}`;
