import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';

import {
  GenericSubscriptionConfig,
  SubscriptionComponentName,
} from '../../components/subscription/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditSubscriptionConfigDialog } from './edit-subscription-config-dialog';

type Props = {
  defaultValue: GenericSubscriptionConfig;
  children: React.ReactNode;
  onSave: (v: GenericSubscriptionConfig) => void;
  editMode?: boolean;
  name: SubscriptionComponentName;
};

export function EditSubscriptionConfig({ defaultValue, children, onSave, editMode, name }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditSubscriptionConfigDialog
          open={dialog.value}
          defaultValue={defaultValue}
          onCloseClicked={dialog.onFalse}
          onSave={(v: GenericSubscriptionConfig) => {
            onSave(v);
            dialog.onFalse();
          }}
          name={name}
        />
      </>
    );
  }

  return children;
}
