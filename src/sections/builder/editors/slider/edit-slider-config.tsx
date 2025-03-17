import React from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import {
  GenericSliderConfig,
  SliderComponentName,
} from 'src/sections/builder/components/slider/types';
import BaseEditWrapper from '../base-edit-wrapper';
import { EditSliderConfigDialog } from './edit-slider-config-dialog';

type Props = {
  defaultValue: GenericSliderConfig;
  children: React.ReactNode;
  onSave: (v: GenericSliderConfig) => void;
  editMode?: boolean;
  name: SliderComponentName;
};

export function EditSliderConfig({ defaultValue, children, onSave, editMode, name }: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditSliderConfigDialog
          open={dialog.value}
          defaultValue={defaultValue}
          onCloseClicked={dialog.onFalse}
          onSave={(v: GenericSliderConfig) => {
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
