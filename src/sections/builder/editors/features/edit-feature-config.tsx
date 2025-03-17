import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';

import { FeatureComponentName, GenericFeatureConfig } from '../../components/featuers/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditFeatureConfigDialog } from './edit-feature-config-dialog';

type Props = {
  defaultValue: GenericFeatureConfig;
  children: React.ReactNode;
  onSave: (v: GenericFeatureConfig) => void;
  editMode?: boolean;
  name: FeatureComponentName;
};

export function EditFeatureConfig({ defaultValue, children, onSave, editMode, name }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditFeatureConfigDialog
          open={dialog.value}
          defaultValue={defaultValue}
          onCloseClicked={dialog.onFalse}
          onSave={(v: GenericFeatureConfig) => {
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
