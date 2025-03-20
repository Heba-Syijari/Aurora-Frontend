import { IDonation } from 'src/types/donation';

export class DonationMapper {
  static fromApi(data: any): IDonation {
    return {
      id: data.id,
      type: data.type,
      amount: data.amount,
      status: data.status,
      userId: data.userId,
      createdAt: data.createdAt,
    };
  }
}
