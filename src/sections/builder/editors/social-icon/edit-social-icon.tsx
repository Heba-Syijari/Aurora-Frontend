import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { SocialData } from '../../components/common/socials/types';
import BaseEditWrapper from '../base-edit-wrapper';
import EditSocialIconDialog from './edit-social-icon-dialog';

type EditSocialIconWrapperProps = {
  defaultValue: SocialData;
  children: React.ReactNode;
  onSave: (v: SocialData) => void;
  editMode?: boolean;
};

export default function EditSocialIconWrapper({
  defaultValue,
  children,
  onSave,
  editMode,
}: EditSocialIconWrapperProps) {
  const dialog = useBoolean();

  if (!editMode) {
    return <>{children}</>;
  }

  return (
    <>
      <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>
      <EditSocialIconDialog
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
