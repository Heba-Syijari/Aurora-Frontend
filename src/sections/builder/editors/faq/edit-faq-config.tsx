import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { FAQConfig } from 'src/sections/builder/components/faq/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditFAQConfigDialog } from './edit-faq-config-dialog';

type Props = {
  defaultValue: FAQConfig;
  children: React.ReactNode;
  onSave: (v: FAQConfig) => void;
  editMode?: boolean;
};

export function EditFAQConfig({ defaultValue, children, onSave, editMode }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditFAQConfigDialog
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
