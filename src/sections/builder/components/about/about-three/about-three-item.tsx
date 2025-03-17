import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import _ from 'lodash';
import { useCallback } from 'react';
import Image from 'src/components/image';
import { EditButtonWrapper } from 'src/sections/builder/editors/button';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { AboutThreeItemData } from '../types';

type Props = {
  data: AboutThreeItemData;
  onEdit: (data: AboutThreeItemData) => void;
  hidden: boolean;
  editMode?: boolean;
};

export function AboutThreeItem({ data, onEdit, hidden, editMode }: Props) {
  const { title, description, image, button } = data;

  const localData = _.omitBy(data, _.isEmpty) as AboutThreeItemData;

  const handleEdit = useCallback(
    <K extends keyof AboutThreeItemData>(key: K, value: AboutThreeItemData[K]) => {
      onEdit({ ...localData, [key]: value });
    },
    [localData, onEdit]
  );

  return (
    <Box sx={{ display: hidden ? 'none' : 'block' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Stack
            spacing={3}
            alignItems="flex-start"
            justifyContent="center"
            sx={{ height: '100%' }}
          >
            <EditTextWrapper
              label="Title"
              defaultValue={title}
              onSave={(v) => {
                handleEdit('title', v);
              }}
              editMode={editMode}
              getMetadataInfo={() => ({ itemType: 'title', sectionType: 'features' })}
            >
              <Typography
                variant="h3"
                fontSize={{ sm: 28, md: 32, lg: 40 }}
                fontWeight={400}
                color={title.color}
              >
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
              <Typography
                variant="body1"
                fontSize={{ xs: 16, md: 18 }}
                fontWeight={400}
                color={description.color}
              >
                {description.text}
              </Typography>
            </EditTextWrapper>

            <Box sx={{ mt: 3 }}>
              <EditButtonWrapper
                defaultValue={button}
                onSave={(v) => {
                  handleEdit('button', v);
                }}
                editMode={editMode}
              >
                <Button
                  variant="contained"
                  href={button.linkTo}
                  sx={{
                    padding: '16px 28px',
                    borderRadius: '6px',
                    color: button.color,
                    backgroundColor: button.backgroundColor,
                    fontSize: 18,
                  }}
                >
                  {button.text}
                </Button>
              </EditButtonWrapper>
            </Box>
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              maxHeight: 556,
              borderRadius: '24px',
              overflow: 'hidden',
            }}
          >
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
                sx={{ height: '100%', width: '100%', objectFit: 'cover' }}
              />
            </EditImageWrapper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
