import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { TermsAndServicesConfig } from '../../components/terms-and-services/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditTermsAndServicesConfigDialog } from './edit-terms-and-services-dialog';

type Props = {
  defaultValue: TermsAndServicesConfig;
  children: React.ReactNode;
  onSave: (v: TermsAndServicesConfig) => void;
  editMode?: boolean;
};

export function EditTermsAndServicesConfig({ defaultValue, children, onSave, editMode }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditTermsAndServicesConfigDialog
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
