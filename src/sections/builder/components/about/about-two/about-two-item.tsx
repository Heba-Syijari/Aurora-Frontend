import { Box, Stack, Typography } from '@mui/material';
import _ from 'lodash';
import { useCallback } from 'react';
import Image from 'src/components/image';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { AboutItemData } from '../types';

type Props = {
  data: AboutItemData;
  onEdit: (data: AboutItemData) => void;
  editMode?: boolean;
};

export function AboutTwoItem({ data, onEdit, editMode }: Props) {
  const { title, description, image } = data;

  const localData = _.omitBy(data, _.isEmpty) as AboutItemData;

  const handleEdit = useCallback(
    <K extends keyof AboutItemData>(key: K, value: AboutItemData[K]) => {
      onEdit({ ...localData, [key]: value });
    },
    [localData, onEdit]
  );

  return (
    <Box>
      <Stack spacing={2} direction="row">
        <Box>
          <EditImageWrapper
            defaultValue={image}
            onSave={(v) => {
              handleEdit('image', v);
            }}
            editMode={editMode}
          >
            <Image
              alt={image.alt}
              src={image.url}
              sx={{ height: 64, width: 64, borderRadius: '6px' }}
            />
          </EditImageWrapper>
        </Box>

        <Stack spacing={1}>
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              handleEdit('title', v);
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'features' })}
          >
            <Typography variant="h4" color={title.color}>
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
            <Typography variant="body1" color={description.color}>
              {description.text}
            </Typography>
          </EditTextWrapper>
        </Stack>
      </Stack>
    </Box>
  );
}
