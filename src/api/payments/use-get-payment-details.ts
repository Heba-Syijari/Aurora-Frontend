import { useGetPaymentDetailsQuery } from 'src/graphql/hasura';
import { PaymentMapper } from './payment.mapper';

export const useGetPaymentDetails = (id: number) => {
  const { data, isError, isLoading, isSuccess } = useGetPaymentDetailsQuery(
    { id },
    { enabled: !!id }
  );

  const payment = (data?.Payment || [{}]).map(PaymentMapper.fromApiWithDetails)[0];

  return {
    payment,
    isLoading,
    isSuccess,
    isError,
  };
};
