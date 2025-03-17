import { useCallback } from 'react';
import { useAttachDomain, useDetachDomain, useGetUnattachedDomains } from 'src/api/domain';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';

export const useDomainView = () => {
  const { project, refetch } = useProjectContext();
  const { domains, refetch: refetchUnattachedDomains } = useGetUnattachedDomains();
  const { attachDomain, isLoading: isAttachDomainLoading } = useAttachDomain();
  const { detachDomain, isLoading: isDetachDomainLoading } = useDetachDomain();

  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();

  const handleAttach = useCallback(
    async (domainName: string) => {
      try {
        await attachDomain({ domainName, projectId: project.id });

        await refetch();

        enqueueSnackbar('Successfully attached');
      } catch (error) {
        console.error(error);
        enqueueErrorSnackbar(error.message, {
          autoHideDuration: 2500,
        });
      }
    },
    [attachDomain, enqueueErrorSnackbar, enqueueSnackbar, project.id, refetch]
  );

  const handleDetach = useCallback(async () => {
    try {
      await detachDomain({ projectId: project.id });

      await refetch();

      await refetchUnattachedDomains();

      enqueueSnackbar('Successfully detached');
    } catch (error) {
      console.error(error);
      enqueueErrorSnackbar(error.message, {
        autoHideDuration: 2500,
      });
    }
  }, [
    detachDomain,
    enqueueErrorSnackbar,
    enqueueSnackbar,
    project.id,
    refetch,
    refetchUnattachedDomains,
  ]);

  return {
    projectId: project.id,
    projectName: project.name,
    projectPublicURL: project.publicURL,
    attachedDomain: project.domainRegistration?.domainRegistration?.domainName,
    domains,
    handleAttach,
    handleDetach,
    loading: isAttachDomainLoading || isDetachDomainLoading,
  };
};
