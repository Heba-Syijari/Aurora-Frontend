import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditTeamConfig } from 'src/sections/builder/editors/team';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { TeamComponentName, TeamOneConfig, TeamOneData } from '../types';
import TeamOneItem from './team-one-item';

export type TeamOneProps = {
  data: TeamOneData;
  editMode?: boolean;
  setLocalData: (v: Partial<TeamOneData>) => void;
};

export default function TeamOne({ data, setLocalData, editMode }: TeamOneProps) {
  const { description, subTitle, config, title } = data;

  return (
    <Box sx={{ py: 11 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Team" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'team' })}
          >
            <Typography
              variant="h2"
              fontWeight={700}
              color={title.color}
              letterSpacing="-0.02em"
              maxWidth={970}
            >
              {title.text}
            </Typography>
          </EditTextWrapper>
          <EditTextWrapper
            label="Subtitle"
            defaultValue={subTitle}
            onSave={(v) => {
              setLocalData({ subTitle: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'subtitle', sectionType: 'team' })}
          >
            <Typography
              variant="h6"
              fontWeight={700}
              color={subTitle.color}
              letterSpacing="-0.02em"
              maxWidth={970}
            >
              {subTitle.text}
            </Typography>
          </EditTextWrapper>
          <EditTextWrapper
            label="Description"
            defaultValue={description}
            onSave={(v) => {
              setLocalData({ description: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'description', sectionType: 'team' })}
          >
            <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
              {description.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <Box sx={{ mt: 7 }}>
          <EditTeamConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } as TeamOneConfig });
            }}
            name={TeamComponentName.TEAM_ONE}
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config?.team || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={6}>
                  <TeamOneItem {...config} data={item} />
                </Grid>
              ))}
            </Grid>
          </EditTeamConfig>
        </Box>
      </Container>
    </Box>
  );
}
