import { useCallback, useMemo } from 'react';
import { useCheckPaymentStatusMutation } from 'src/graphql/generated';
import { PaymentStatusVariation } from 'src/types/payment';

export const useCheckPaymentStatus = () => {
  const { data, mutateAsync, isError, isLoading } = useCheckPaymentStatusMutation();

  const handleCheckPaymentStatus = useCallback(
    async (transactionId: string) => {
      const result = await mutateAsync({ transactionId });

      return result.checkPaymentStatus;
    },
    [mutateAsync]
  );

  const memoizedValues = useMemo(
    () => ({
      checkPaymentStatus: handleCheckPaymentStatus,
      paymentStatus: data?.checkPaymentStatus as PaymentStatusVariation,
      isError,
      isLoading,
    }),
    [data?.checkPaymentStatus, handleCheckPaymentStatus, isError, isLoading]
  );

  return memoizedValues;
};
