import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { GenericTeamConfig, TeamComponentName } from 'src/sections/builder/components/team/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditTeamConfigDialog } from './edit-team-config-dialog';

type Props = {
  defaultValue: GenericTeamConfig;
  children: React.ReactNode;
  onSave: (v: GenericTeamConfig) => void;
  editMode?: boolean;
  name: TeamComponentName;
};

export function EditTeamConfig({ defaultValue, children, onSave, editMode, name }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditTeamConfigDialog
          open={dialog.value}
          defaultValue={defaultValue}
          onCloseClicked={dialog.onFalse}
          onSave={(v: GenericTeamConfig) => {
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
