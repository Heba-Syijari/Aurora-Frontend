import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { OurClientsConfig } from '../../components/our-clients/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditOurClientsConfigDialog } from './edit-our-clients-config-dialog';

type Props = {
  defaultValue: OurClientsConfig;
  children: React.ReactNode;
  onSave: (v: OurClientsConfig) => void;
  editMode?: boolean;
};

export function EditOurClientsConfig({ defaultValue, children, onSave, editMode }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditOurClientsConfigDialog
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
