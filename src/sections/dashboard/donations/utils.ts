import { LabelColor } from 'src/components/label';
import { DonationStatus, DonationStatusVariation } from 'src/types/donation';

export const getDonationStatusColor = (status: DonationStatusVariation): LabelColor => {
  switch (status) {
    case DonationStatus.COMPLETED:
      return 'success';
    case DonationStatus.CREATED:
      return 'warning';
    default:
      return 'default';
  }
};
