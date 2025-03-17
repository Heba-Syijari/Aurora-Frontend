import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';

import {
  GenericOurSolutionConfig,
  OurSolutionComponentName,
} from '../../components/our-solution/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditOurSolutionConfigDialog } from './edit-our-solution-config-dialog';

type Props = {
  defaultValue: GenericOurSolutionConfig;
  children: React.ReactNode;
  onSave: (v: GenericOurSolutionConfig) => void;
  editMode?: boolean;
  name: OurSolutionComponentName;
};

export function EditOurSolutionConfig({ defaultValue, children, onSave, editMode, name }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditOurSolutionConfigDialog
          open={dialog.value}
          defaultValue={defaultValue}
          onCloseClicked={dialog.onFalse}
          onSave={(v: GenericOurSolutionConfig) => {
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
