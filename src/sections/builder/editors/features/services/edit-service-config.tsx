import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';

import { ServicesConfig } from '../../../components/featuers/types';
import BaseEditWrapper from '../../base-edit-wrapper';
import { EditServiceConfigDialog } from './edit-service-config-dialog';

type Props = {
  defaultValue: ServicesConfig;
  children: React.ReactNode;
  onSave: (v: ServicesConfig) => void;
  editMode?: boolean;
};

export function EditServiceConfig({ defaultValue, children, onSave, editMode }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditServiceConfigDialog
          open={dialog.value}
          defaultValue={defaultValue}
          onCloseClicked={dialog.onFalse}
          onSave={(v: ServicesConfig) => {
            onSave(v);
            dialog.onFalse();
          }}
        />
      </>
    );
  }

  return children;
}
