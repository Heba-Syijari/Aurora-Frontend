import { Box } from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { useUpdatePageComponent } from 'src/api/page';
import { useAuthContext } from 'src/auth/hooks';
import Iconify from 'src/components/iconify/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { useBoolean } from 'src/hooks/use-boolean';
import { IPageComponent } from 'src/types/project';
import { ComponentFallback } from '../../components/component-fallback';
import { AddSectionDrawer } from './add-section';
import { ChangeBackgroundDialog } from './change-background';
import { ChangeSectionLayoutDialog } from './change-section-layout';
import ConfirmActionDialog from './confirm-action-dialog';
import IconAction from './icon-action';
import { ActionsBox, BaseActionsWrapper, EditActionsWrapper } from './styled';
import SubscriptionExpiredDialog from './subscription-expired-dialog';

type EditActionItemType = {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

type ComponentProps = {
  editMode: boolean;
  data: any;
  setLocalData: (v: any) => void;
};

type EditSectionWrapperProps = {
  item: IPageComponent;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  onRemove: () => Promise<void>;
  onAddSection: (componentId: number) => Promise<void>;
  onChangeSectionLayout: (componentId: number) => Promise<void>;
  Component: (props: ComponentProps) => JSX.Element;
  refetchProject: () => Promise<any>;
  isPreview?: boolean;
};

export default function EditSectionWrapper({
  item,
  onMoveUp,
  onMoveDown,
  onRemove,
  onAddSection,
  onChangeSectionLayout,
  Component,
  refetchProject,
  isPreview,
}: EditSectionWrapperProps) {
  const { subscription } = useAuthContext();

  const [localData, setLocalData] = useState<any>(item.data);

  const addSectionDrawerOpen = useBoolean();
  const changeSectionBackgroundDialog = useBoolean();
  const changeSectionLayoutDialog = useBoolean();
  const confirmRemoveSectionDialog = useBoolean();
  const subscriptionExpiredDialogOpen = useBoolean();

  const editMode = useBoolean();

  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();
  const { updateComponentData } = useUpdatePageComponent();

  const baseActions: EditActionItemType[] = useMemo(
    () => [
      {
        title: 'Edit section',
        icon: <Iconify icon="ri:edit-line" width={24} />,
        onClick: editMode.onTrue,
      },
    ],
    [editMode.onTrue]
  );

  const editActions: EditActionItemType[] = useMemo(
    () => [
      // {
      //   title: 'Change background',
      //   icon: <Iconify icon="ri:palette-line" width={24} />,
      //   onClick: changeSectionBackgroundDialog.onTrue,
      // },
      {
        title: 'Change layout',
        icon: <Iconify icon="ri:layout-masonry-line" width={24} />,
        onClick: changeSectionLayoutDialog.onTrue,
      },
      {
        title: 'Add section',
        icon: <Iconify icon="ri:add-box-line" width={24} />,
        onClick: addSectionDrawerOpen.onTrue,
      },
      {
        title: 'Move up',
        icon: <Iconify icon="ri:upload-line" width={24} />,
        onClick: () => {
          if (onMoveUp) onMoveUp();
        },
        disabled: !onMoveUp,
      },
      {
        title: 'Move down',
        icon: <Iconify icon="ri:upload-line" width={24} sx={{ transform: 'rotate(180deg)' }} />,
        onClick: () => {
          if (onMoveDown) onMoveDown();
        },
        disabled: !onMoveDown,
      },
      {
        title: 'Delete section',
        icon: <Iconify icon="ri:delete-bin-line" width={24} />,
        onClick: confirmRemoveSectionDialog.onTrue,
      },
    ],
    [
      addSectionDrawerOpen.onTrue,
      changeSectionLayoutDialog.onTrue,
      confirmRemoveSectionDialog.onTrue,
      onMoveDown,
      onMoveUp,
    ]
  );

  const checkCanDoAction = useCallback(
    () =>
      new Promise<boolean>((resolve) => {
        if (!subscription || subscription.isExpired) {
          // subscriptionExpiredDialogOpen.onTrue();
          resolve(true);
        } else {
          resolve(true);
        }
      }),
    [subscription]
  );

  const handleOnSave = useCallback(async () => {
    try {
      const canDoAction = await checkCanDoAction();
      if (!canDoAction) return;

      await updateComponentData({ id: item.id, data: localData, pageId: item.pageId });
      editMode.onFalse();
      await refetchProject();
      enqueueSnackbar('Successfully saved');
    } catch (err) {
      console.log({ err });
      enqueueErrorSnackbar('error while saving the changes');
    }
  }, [
    checkCanDoAction,
    editMode,
    enqueueErrorSnackbar,
    enqueueSnackbar,
    item.id,
    item.pageId,
    localData,
    refetchProject,
    updateComponentData,
  ]);

  const handleOnCancel = useCallback(() => {
    setLocalData(item.data);
    editMode.onFalse();
  }, [editMode, item.data]);

  const cleanup = useCallback(() => {
    editMode.onFalse();
    addSectionDrawerOpen.onFalse();
    changeSectionLayoutDialog.onFalse();
  }, [addSectionDrawerOpen, changeSectionLayoutDialog, editMode]);

  const handleAddSection = useCallback(
    async (componentId: number) => {
      try {
        const canDoAction = await checkCanDoAction();
        if (!canDoAction) return;

        await onAddSection(componentId);
        enqueueSnackbar('Successfully added');
      } catch (err) {
        console.log(err);
        enqueueErrorSnackbar('error while adding the section');
      } finally {
        cleanup();
      }
    },
    [checkCanDoAction, cleanup, enqueueErrorSnackbar, enqueueSnackbar, onAddSection]
  );

  const handleChangeSectionLayout = useCallback(
    async (componentId: number) => {
      try {
        const canDoAction = await checkCanDoAction();
        if (!canDoAction) return;

        await onChangeSectionLayout(componentId);
        enqueueSnackbar('Successfully changed');
      } catch (err) {
        console.log(err);
        enqueueErrorSnackbar('error while changing the layout');
      } finally {
        cleanup();
      }
    },
    [checkCanDoAction, cleanup, enqueueErrorSnackbar, enqueueSnackbar, onChangeSectionLayout]
  );

  const handleRegenerateSection = useCallback(async () => {
    await onAddSection(item.componentId).then(onRemove);
  }, [onAddSection, item.componentId, onRemove]);

  const renderEditActions = (
    <EditActionsWrapper>
      <ActionsBox>
        <IconAction
          tooltipTitle="Save"
          icon={<Iconify icon="ri:save-2-line" width={24} />}
          onClick={handleOnSave}
        />
        <IconAction
          tooltipTitle="Cancel"
          icon={<Iconify icon="ri:close-circle-line" width={24} />}
          onClick={handleOnCancel}
        />

        <Box sx={{ width: '100%', border: '1px solid', borderColor: 'divider' }} />

        {(item.component.type === 'FOOTER' ? editActions.slice(0, -1) : editActions).map(
          (action) => (
            <IconAction
              key={action.title}
              tooltipTitle={action.title}
              icon={action.icon}
              onClick={action.onClick}
              disabled={action.disabled}
            />
          )
        )}
      </ActionsBox>
    </EditActionsWrapper>
  );

  const renderBaseActions = (
    <BaseActionsWrapper className="edit-section-actions-wrapper">
      <ActionsBox>
        {baseActions.map((action) => (
          <IconAction
            key={action.title}
            tooltipTitle={action.title}
            icon={action.icon}
            onClick={action.onClick}
          />
        ))}
      </ActionsBox>
    </BaseActionsWrapper>
  );

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          '&:hover': {
            '& .edit-section-actions-wrapper': {
              display: 'flex',
            },
          },
        }}
      >
        <ComponentFallback onDeleteClick={onRemove} onRegenerateClick={handleRegenerateSection}>
          {!isPreview && (editMode.value ? renderEditActions : renderBaseActions)}

          <Component
            editMode={!isPreview && editMode.value}
            data={localData}
            setLocalData={(value) => {
              setLocalData((prev: any) => ({ ...prev, ...value }));
            }}
          />
        </ComponentFallback>
      </Box>

      <AddSectionDrawer
        open={addSectionDrawerOpen.value}
        onClose={addSectionDrawerOpen.onFalse}
        onAdd={handleAddSection}
      />

      <ChangeSectionLayoutDialog
        open={changeSectionLayoutDialog.value}
        currentComponent={item.component}
        onClose={changeSectionLayoutDialog.onFalse}
        onChange={handleChangeSectionLayout}
      />

      <ChangeBackgroundDialog
        open={changeSectionBackgroundDialog.value}
        onClose={changeSectionBackgroundDialog.onFalse}
        defaultValue={{
          backgroundColor: localData.backgroundColor,
          backgroundImage: localData.backgroundImage,
        }}
        onSave={(value) => {
          setLocalData((prev: any) => ({ ...prev, ...value }));
          changeSectionBackgroundDialog.onFalse();
        }}
      />

      <ConfirmActionDialog
        open={confirmRemoveSectionDialog.value}
        onClose={confirmRemoveSectionDialog.onFalse}
        onConfirm={onRemove}
        title="Confirm Delete"
        description="Do you really want to do remove this component?"
      />

      <SubscriptionExpiredDialog
        open={subscriptionExpiredDialogOpen.value}
        onClose={subscriptionExpiredDialogOpen.onFalse}
      />
    </>
  );
}
