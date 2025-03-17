import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { useCallback } from 'react';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ImportanceItemData, ImportanceOneData } from '../types';
import { ImportanceOneItem } from './importance-one-item';

export type ImportanceOneProps = {
  data: ImportanceOneData;
  setLocalData: (v: Partial<ImportanceOneData>) => void;
  editMode?: boolean;
};

export default function ImportanceOne({ data, editMode, setLocalData }: ImportanceOneProps) {
  const { topic, title, items } = data;

  const updateItems = useCallback(
    (value: ImportanceItemData, i: number) => {
      setLocalData({
        items: items.map((item, index) => {
          if (index === i) {
            return {
              title: value.title,
              description: value.description,
              image: value.image,
            };
          }
          return item;
        }),
      });
    },
    [items, setLocalData]
  );

  return (
    <Box sx={{ bgcolor: 'common.white', py: 10 }}>
      <Container>
        <Stack spacing={2} alignItems="flex-start" sx={{ mb: 2.5 }}>
          <EditTextWrapper
            label="Topic"
            defaultValue={topic}
            onSave={(v) => {
              setLocalData({ topic: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'topic', sectionType: 'importance' })}
            disableEditColor
          >
            <Chip label={topic.text} />
          </EditTextWrapper>

          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'importance' })}
          >
            <Typography
              variant="h3"
              fontSize={{ xs: 32, md: 42 }}
              fontWeight={500}
              lineHeight="52px"
              letterSpacing="-4px"
              color={title.color}
              maxWidth={500}
              sx={{
                textDecoration: 'underline',
                textDecorationColor: (theme) => theme.palette.primary.main,
              }}
            >
              {title.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <Grid container columnSpacing={12} rowSpacing={{ xs: 4, md: 0 }}>
          {items.map((item, i) => (
            <Grid key={i} item xs={12} sm={6} md={4}>
              <ImportanceOneItem
                editMode={editMode}
                data={item}
                onEdit={(v) => {
                  updateItems(v, i);
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
