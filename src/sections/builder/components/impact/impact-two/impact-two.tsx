import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditImageWrapper } from 'src/sections/builder/editors/image';
import { EditImpactConfig } from 'src/sections/builder/editors/impact';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { ImpactTwoData } from '../types';
import { ImpactTwoImage } from './impact-two-image';
import ImpactTwoItem from './impact-two-item';

export type ImpactTwoProps = {
  data: ImpactTwoData;
  setLocalData: (v: Partial<ImpactTwoData>) => void;
  editMode?: boolean;
};

export default function ImpactTwo({ data, editMode, setLocalData }: ImpactTwoProps) {
  const { title, description, image, config } = data;

  return (
    <Box sx={{ py: { xs: 8, md: 11 } }}>
      <Container>
        <Grid
          container
          columnSpacing={8}
          rowSpacing={12}
          flexDirection={{ xs: 'row', lg: 'row-reverse' }}
        >
          <Grid item xs={12} lg={6}>
            <Stack spacing={2} alignItems="flex-start">
              <Chip label="Impact or individual’s lives" />

              <EditTextWrapper
                label="Title"
                defaultValue={title}
                onSave={(v) => {
                  setLocalData({ title: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'title', sectionType: 'impact' })}
              >
                <Typography
                  variant="h2"
                  fontWeight={700}
                  color={title.color}
                  letterSpacing="-0.02em"
                >
                  {title.text}
                </Typography>
              </EditTextWrapper>

              <EditTextWrapper
                label="Description"
                defaultValue={description}
                onSave={(v) => {
                  setLocalData({ description: v });
                }}
                editMode={editMode}
                getMetadataInfo={() => ({ itemType: 'description', sectionType: 'impact' })}
              >
                <Typography variant="body1" fontSize={20} color={description.color}>
                  {description.text}
                </Typography>
              </EditTextWrapper>
            </Stack>

            <Box sx={{ mt: 7 }}>
              <EditImpactConfig
                defaultValue={config}
                editMode={editMode}
                onSave={(updatedConfig) => {
                  setLocalData({ config: { ...config, ...updatedConfig } });
                }}
              >
                <Grid container spacing={4}>
                  {(config.impacts || []).map((item, i) => (
                    <Grid key={i} item xs={12} sm={6}>
                      <ImpactTwoItem
                        data={item}
                        index={i + 1}
                        titleTextColor={item.title}
                        descriptionTextColor={item.description}
                      />
                    </Grid>
                  ))}
                </Grid>
              </EditImpactConfig>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Stack sx={{ height: '100%', justifyContent: 'center' }}>
              <EditImageWrapper
                defaultValue={image}
                onSave={(v) => {
                  setLocalData({ image: v });
                }}
                editMode={editMode}
              >
                <ImpactTwoImage image={image} />
              </EditImageWrapper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
