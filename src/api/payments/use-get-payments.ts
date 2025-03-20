import { useGetPaymentsQuery } from 'src/graphql/hasura';
import { PaymentMapper } from './payment.mapper';

export const useGetPayments = () => {
  const { data, isError, isLoading, isSuccess, refetch } = useGetPaymentsQuery();

  return {
    payments: (data?.Payment ?? []).map(PaymentMapper.fromApi),
    isLoading,
    isSuccess,
    isError,
    refetch,
  };
};
