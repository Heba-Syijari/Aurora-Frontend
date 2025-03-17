import { useSearchParams } from 'src/routes/hook';
import {
  DonationCategory,
  DonationCategoryVariation,
  donationCategories,
} from 'src/types/donation';

export const useDonateView = () => {
  const searchParams = useSearchParams();

  const amount = +(searchParams.get('amount') || 0);
  let type = searchParams.get('type') || '';

  if (donationCategories.findIndex((category) => category === type) < 0) {
    type = DonationCategory.ALL;
  }

  return { amount, type: type as DonationCategoryVariation };
};
