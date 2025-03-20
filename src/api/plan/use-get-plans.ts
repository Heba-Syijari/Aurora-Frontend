import { useGetPlansQuery } from 'src/graphql/generated';
import { PlanMapper } from './plan.mapper';

export const useGetPlans = () => {
  const { data, isError, isLoading, isSuccess } = useGetPlansQuery();

  return {
    plans: (data?.plans ?? []).map(PlanMapper.fromApi),
    isLoading,
    isSuccess,
    isError,
  };
};
