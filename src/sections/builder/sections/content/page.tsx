import { Box } from '@mui/material';
import { useCallback, useMemo } from 'react';
import {
  useAddPageComponent,
  useChangeComponentLayout,
  useRemovePageComponent,
  useSwapPageComponents,
} from 'src/api/page';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';
import { ComponentVariation, IPageComponent } from 'src/types/project';
// eslint-disable-next-line import/no-cycle
import ComponentFactory from '../../components/factory';
import { EditSectionWrapper } from '../../editors/section';

type PageProps = {
  pageId: number;
  isPreview?: boolean;
};

export default function Page({ pageId, isPreview }: PageProps) {
  const { project, refetch: refetchProject } = useProjectContext();

  const { swap } = useSwapPageComponents();
  const { addPageComponent } = useAddPageComponent();
  const { removePageComponent } = useRemovePageComponent();
  const { changeComponentLayout } = useChangeComponentLayout();
  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();

  const components = useMemo(() => {
    const pageComponents = project.pages.find((p) => p.id === pageId)?.components ?? [];

    const heroComponent = pageComponents.find((c) => c.component.type === ComponentVariation.HERO);
    const footerComponents = pageComponents.filter(
      (c) => c.component.type === ComponentVariation.FOOTER
    );

    const sortedComponents = pageComponents
      .filter(
        (c) =>
          c.component.type !== ComponentVariation.HERO &&
          c.component.type !== ComponentVariation.FOOTER
      )
      .sort((a, b) => a.order - b.order);

    return [
      ...(heroComponent ? [heroComponent] : []),
      ...sortedComponents,
      ...(footerComponents.length > 0 ? footerComponents : []),
    ];
  }, [pageId, project.pages]);

  const handleSwap = useCallback(
    async (componentsIds: number[]) => {
      try {
        await swap({ pageId, componentsIds });
        await refetchProject();
      } catch (err) {
        console.log({ err });
        enqueueErrorSnackbar(err.message || 'Error while changing section position');
      }
    },
    [enqueueErrorSnackbar, pageId, refetchProject, swap]
  );

  const handleMoveUp = useCallback(
    async (id: number, index: number) => {
      if (index > 0) {
        await handleSwap([id, components[index - 1].id]);
      }
    },
    [components, handleSwap]
  );

  const handleMoveDown = useCallback(
    async (id: number, index: number) => {
      if (components.length > index + 1) {
        await handleSwap([id, components[index + 1].id]);
      }
    },
    [components, handleSwap]
  );

  const handleAddSection = useCallback(
    async (componentId: number, order: number) => {
      try {
        await addPageComponent({ componentId, order, pageId });
        await refetchProject();
      } catch (err) {
        console.log({ err });
        enqueueErrorSnackbar(err.message || 'Error while adding section');
      }
    },
    [addPageComponent, enqueueErrorSnackbar, pageId, refetchProject]
  );

  const handleRemove = useCallback(
    async (componentId: number) => {
      try {
        await removePageComponent({ componentId, pageId });
        await refetchProject();
        enqueueSnackbar('Successfully removed');
      } catch (err) {
        console.log({ err });
        enqueueErrorSnackbar(err.message || 'Error while removing section');
      }
    },
    [enqueueErrorSnackbar, enqueueSnackbar, pageId, refetchProject, removePageComponent]
  );

  const handleChangeSectionLayout = useCallback(
    async (item: IPageComponent, componentId: number) => {
      if (item.componentId === componentId) return;

      try {
        await changeComponentLayout({ id: item.id, componentId, pageId });
        await refetchProject();
      } catch (err) {
        console.log({ err });
        enqueueErrorSnackbar(err.message || 'Error while changing section layout');
      }
    },
    [changeComponentLayout, enqueueErrorSnackbar, pageId, refetchProject]
  );

  const optionalMoveHandler = useCallback(
    (params: { handler: VoidFunction; index: number; variant: 'up' | 'down' }) => {
      if (params.variant === 'up') {
        return params.index > 0 ? params.handler : undefined;
      }

      return params.index < components.length - 1 ? params.handler : undefined;
    },
    [components.length]
  );

  console.log({ project });

  return (
    <Box
      component="main"
      sx={{
        bgcolor: 'background.neutral',
      }}
    >
      {components.map((item, i) => (
        <Box key={item.id}>
          <EditSectionWrapper
            isPreview={isPreview}
            refetchProject={refetchProject}
            item={item}
            onMoveUp={optionalMoveHandler({
              handler: () => handleMoveUp(item.id, i),
              index: i,
              variant: 'up',
            })}
            onMoveDown={optionalMoveHandler({
              handler: () => handleMoveDown(item.id, i),
              index: i,
              variant: 'down',
            })}
            onRemove={() => handleRemove(item.id)}
            // (item.order) for adding the component before this component
            // (item.order + 1) for adding the component after this component
            onAddSection={(addedComponentId) => handleAddSection(addedComponentId, item.order + 1)}
            onChangeSectionLayout={(replacementComponentId) =>
              handleChangeSectionLayout(item, replacementComponentId)
            }
            Component={({ editMode, data, setLocalData }) => (
              <Box
                id={item.component.type}
                sx={{ direction: project.mainLanguage === 'arabic' ? 'rtl' : 'ltr' }}
              >
                <ComponentFactory
                  type={item.component.type}
                  name={item.component.name}
                  data={data}
                  editMode={editMode}
                  setLocalData={setLocalData}
                  pageId={pageId}
                  project={project}
                />
              </Box>
            )}
          />
        </Box>
      ))}
    </Box>
  );
}
