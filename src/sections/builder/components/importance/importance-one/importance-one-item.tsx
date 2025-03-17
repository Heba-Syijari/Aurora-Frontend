import { Box, Stack, Typography } from '@mui/material';
import _ from 'lodash';
import { useCallback } from 'react';
import Image from 'src/components/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ImportanceItemData } from '../types';

type Props = {
  data: ImportanceItemData;
  onEdit: (data: ImportanceItemData) => void;
  editMode?: boolean;
};

export function ImportanceOneItem({ data, onEdit, editMode }: Props) {
  const { title, description, image } = data;

  const localData = _.omitBy(data, _.isEmpty) as ImportanceItemData;

  const handleEdit = useCallback(
    <K extends keyof ImportanceItemData>(key: K, value: ImportanceItemData[K]) => {
      onEdit({ ...localData, [key]: value });
    },
    [localData, onEdit]
  );

  return (
    <Stack sx={{ borderRadius: '22px', overflow: 'hidden', height: '100%' }}>
      <Box>
        <EditImageWrapper
          defaultValue={image}
          onSave={(v) => {
            handleEdit('image', v);
          }}
          editMode={editMode}
        >
          <Image alt={image.alt} src={image.url} sx={{ width: '100%', height: 218 }} />
        </EditImageWrapper>
      </Box>

      <Stack spacing={1} sx={{ p: 2, bgcolor: 'background.neutral', flex: 1 }}>
        <EditTextWrapper
          label="Title"
          defaultValue={title}
          onSave={(v) => {
            handleEdit('title', v);
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'title', sectionType: 'features' })}
        >
          <Typography variant="h5" fontWeight={500} color={title.color}>
            {title.text}
          </Typography>
        </EditTextWrapper>

        <EditTextWrapper
          label="Description"
          defaultValue={description}
          onSave={(v) => {
            handleEdit('description', v);
          }}
          editMode={editMode}
          getMetadataInfo={() => ({ itemType: 'description', sectionType: 'features' })}
        >
          <Typography variant="body1" fontWeight={400} color={description.color}>
            {description.text}
          </Typography>
        </EditTextWrapper>
      </Stack>
    </Stack>
  );
}
