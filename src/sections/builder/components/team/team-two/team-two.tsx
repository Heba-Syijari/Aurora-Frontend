import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditTeamConfig } from 'src/sections/builder/editors/team';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { TeamComponentName, TeamTwoConfig, TeamTwoData } from '../types';
import TeamTwoItem from './team-two-item';

export type TeamTwoProps = {
  data: TeamTwoData;
  editMode?: boolean;
  setLocalData: (v: Partial<TeamTwoData>) => void;
};

export default function TeamTwo({ data, setLocalData, editMode }: TeamTwoProps) {
  const { description, config, title } = data;
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
              setLocalData({ config: { ...config, ...updatedConfig } as TeamTwoConfig });
            }}
            name={TeamComponentName.TEAM_TWO}
          >
            <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
              {(config?.team || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={6} md={4}>
                  <TeamTwoItem {...config} data={item} />
                </Grid>
              ))}
            </Grid>
          </EditTeamConfig>
        </Box>
      </Container>
    </Box>
  );
}
