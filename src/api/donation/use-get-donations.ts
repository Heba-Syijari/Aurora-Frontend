import { useGetMyDonationsQuery } from 'src/graphql/generated';
import { DonationMapper } from './donation.mapper';

export const useGetDonations = () => {
  const { data, isError, isLoading, isSuccess } = useGetMyDonationsQuery();

  return {
    donations: (data?.getMyDonations ?? []).map(DonationMapper.fromApi),
    isLoading,
    isSuccess,
    isError,
  };
};
