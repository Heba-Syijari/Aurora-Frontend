import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { EditOurSolutionConfig } from 'src/sections/builder/editors/our-solution';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { OurSolutionComponentName, OurSolutionThreeData } from '../types';
import OurSolutionThreeItem from './our-solution-three-item';

export type OurSolutionThreeProps = {
  data: OurSolutionThreeData;
  setLocalData: (v: Partial<OurSolutionThreeData>) => void;
  editMode?: boolean;
};

export default function OurSolutionTwo({ data, editMode, setLocalData }: OurSolutionThreeProps) {
  const { title, config, postTitle } = data;
  const theme = useTheme();

  const renderTitle = (
    <Stack spacing={1} direction="row" textAlign="center" justifyContent="center" paddingBottom={5}>
      <EditTextWrapper
        label="Post Title"
        defaultValue={postTitle}
        onSave={(v) => {
          setLocalData({ postTitle: v });
        }}
        editMode={editMode}
        getMetadataInfo={() => ({ itemType: 'postTitle', sectionType: 'our-solution' })}
      >
        <Typography
          variant="h2"
          color={postTitle.color}
          letterSpacing="-0.02em"
          textTransform="capitalize"
        >
          {postTitle.text}
        </Typography>
      </EditTextWrapper>
      <EditTextWrapper
        label="Title"
        defaultValue={title}
        onSave={(v) => {
          setLocalData({ title: v });
        }}
        editMode={editMode}
        getMetadataInfo={() => ({ itemType: 'title', sectionType: 'our-solution' })}
      >
        <Typography variant="h2" fontWeight={700} color={title.color} letterSpacing="-0.02em">
          {title.text}
        </Typography>
      </EditTextWrapper>
    </Stack>
  );
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.neutral,
        py: 11,
        width: 1,
      }}
    >
      {renderTitle}
      <Container maxWidth="lg">
        <Box sx={{ mt: 7 }}>
          <EditOurSolutionConfig
            name={OurSolutionComponentName.OUR_SOLUTION_TWO}
            defaultValue={config}
            editMode={editMode}
            onSave={(updatedConfig) => {
              setLocalData({ config: { ...config, ...updatedConfig } });
            }}
          >
            <Grid container columnSpacing={4} rowSpacing={4} justifyContent="center">
              {(config.content || []).map((item, i) => (
                <Grid key={i} item xs={12} sm={12} md={12}>
                  <OurSolutionThreeItem
                    data={item}
                    index={i}
                    descriptionTextColor={config.descriptionColor}
                    titleTextColor={config.titleColor}
                    key={i}
                  />
                </Grid>
              ))}
            </Grid>
          </EditOurSolutionConfig>
        </Box>
      </Container>
    </Box>
  );
}
