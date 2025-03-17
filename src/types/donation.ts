export enum DonationCategory {
  ALL = 'ALL',
  HOSTING = 'HOSTING',
  DOMAIN = 'DOMAIN',
  MUSLIM_ADVOCACY = 'MUSLIM_ADVOCACY',
}

export const donationCategories = Object.values(DonationCategory);

export type DonationCategoryVariation = `${DonationCategory}`;

export enum DonationStatus {
  CREATED = 'CREATED',
  COMPLETED = 'COMPLETED',
}

export type DonationStatusVariation = `${DonationStatus}`;

export interface IDonation {
  id: number;
  type: DonationCategoryVariation;
  status: DonationStatusVariation;
  amount: number;
  userId: string;
  createdAt: string;
}
