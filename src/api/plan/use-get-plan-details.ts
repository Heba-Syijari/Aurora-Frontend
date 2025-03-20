import { useGetPlanQuery } from 'src/graphql/generated';
import { PlanMapper } from './plan.mapper';

export const useGetPlanDetails = (planId: number) => {
  const { data, isError, isLoading, isSuccess } = useGetPlanQuery(
    { planId },
    { enabled: !!planId }
  );

  const plan = data?.plan ? PlanMapper.fromApi(data?.plan) : undefined;

  return {
    plan,
    isLoading,
    isSuccess,
    isError,
  };
};
