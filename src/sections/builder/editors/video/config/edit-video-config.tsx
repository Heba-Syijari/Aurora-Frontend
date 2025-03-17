import { PropsWithChildren } from 'react';
import { useBoolean } from 'src/hooks/use-boolean';
import { VideoData } from 'src/sections/builder/components/video/types';
import { IVideo } from 'src/types/media';
import BaseEditWrapper from '../../base-edit-wrapper';
import { EditVideoConfigDialog } from './edit-video-config-dialog';

type Props = PropsWithChildren<{
  defaultValue: VideoData;
  onSave: (v: Partial<VideoData>) => void;
  videos: IVideo[];
  editMode?: boolean;
}>;

export default function EditVideoConfig({
  defaultValue,
  children,
  onSave,
  editMode,
  videos,
}: Props) {
  const dialog = useBoolean();

  if (editMode) {
    return (
      <>
        <BaseEditWrapper onEditClick={dialog.onTrue}>{children}</BaseEditWrapper>

        <EditVideoConfigDialog
          open={dialog.value}
          onCloseClicked={dialog.onFalse}
          defaultValue={defaultValue}
          videos={videos}
          onSave={(v) => {
            onSave(v);
            dialog.onFalse();
          }}
        />
      </>
    );
  }

  return <>{children}</>;
}
