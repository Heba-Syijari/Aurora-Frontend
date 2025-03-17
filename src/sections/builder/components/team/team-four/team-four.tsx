import { Box, Card, CardContent, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import { EditTextWrapper } from 'src/sections/builder/editors/text';

import { EditTeamConfig } from 'src/sections/builder/editors/team';
import { TeamComponentName, TeamConfig, TeamFourData } from '../types';
import TeamFourItem from './team-four-item';

export type TeamFourProps = {
  data: TeamFourData;
  editMode?: boolean;
  setLocalData: (v: Partial<TeamFourData>) => void;
};

export default function TeamFour({ data, setLocalData, editMode }: TeamFourProps) {
  const { config, title } = data;
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
        </Stack>

        <Box sx={{ mt: 7 }}>
          <EditTeamConfig
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } as TeamConfig });
            }}
            name={TeamComponentName.TEAM_FOUR}
          >
            <Card>
              <CardContent>
                <Grid container columnSpacing={4} rowSpacing={7} justifyContent="center">
                  {(config?.team || []).map((item, i) => (
                    <Grid key={i} item xs={12} sm={12} md={6}>
                      <TeamFourItem {...config} data={item} />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </EditTeamConfig>
        </Box>
      </Container>
    </Box>
  );
}
