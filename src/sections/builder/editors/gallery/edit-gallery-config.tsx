import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { GallerySevenConfig } from '../../components/gallery/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditGallerySevenConfigDialog } from './edit-gallery-config-dialog';

type Props = {
  defaultValue: GallerySevenConfig;
  children: React.ReactNode;
  onSave: (v: GallerySevenConfig) => void;
  editMode?: boolean;
};

export function EditGallerySevenConfig({ defaultValue, children, onSave, editMode }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditGallerySevenConfigDialog
          open={dialog.value}
          defaultValue={defaultValue}
          onCloseClicked={dialog.onFalse}
          onSave={(v) => {
            onSave(v);
            dialog.onFalse();
          }}
        />
      </>
    );
  }

  return children;
}
