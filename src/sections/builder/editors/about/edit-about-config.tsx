import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';

import { AboutComponentName, GenericAboutConfig } from '../../components/about/types';

import BaseEditWrapper from '../base-edit-wrapper';
import { EditAboutConfigDialog } from './edit-about-config-dialog';

type Props = {
  defaultValue: GenericAboutConfig;
  children: React.ReactNode;
  onSave: (v: GenericAboutConfig) => void;
  editMode?: boolean;
  name: AboutComponentName;
};

export function EditAboutConfig({ defaultValue, children, onSave, editMode, name }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditAboutConfigDialog
          open={dialog.value}
          defaultValue={defaultValue}
          onCloseClicked={dialog.onFalse}
          onSave={(v: GenericAboutConfig) => {
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
