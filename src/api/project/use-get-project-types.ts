export const useGetProjectTypes = () => {
  // const { data, isError, isLoading, isSuccess } = useGetProjectTargetTypesQuery();
  const projectTypes = [
    // { value: 'DYNAMIC', title: 'Dynamic Website', description: 'with database and backend' },
    { value: 'STATIC', title: 'Static Website ', description: 'no database or backend' },
  ];

  return {
    projectTypes,
    isLoading: false,
    isSuccess: true,
    isError: false,
  };
};
