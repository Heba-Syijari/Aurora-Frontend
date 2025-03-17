import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { PrivacyPolicyConfig } from '../../components/privacy-policy/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditPrivacyPolicyConfigDialog } from './edit-privacy-privacy-policy-dialog';

type Props = {
  defaultValue: PrivacyPolicyConfig;
  children: React.ReactNode;
  onSave: (v: PrivacyPolicyConfig) => void;
  editMode?: boolean;
};

export function EditPrivacyPolicyConfig({ defaultValue, children, onSave, editMode }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditPrivacyPolicyConfigDialog
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
