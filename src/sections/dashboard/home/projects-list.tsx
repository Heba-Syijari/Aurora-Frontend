import { Card, Grid, Skeleton, Stack, SxProps, Typography } from '@mui/material';
import { useDeleteProject, usePublishProject } from 'src/api/project';
import Iconify from 'src/components/iconify/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { BaseButton } from 'src/components/styled/button';
import { useRouter } from 'src/routes/hook';
import { paths } from 'src/routes/paths';
import { ProjectItem } from './project-item';

type Props = {
  isLoading: boolean;
  projects: { id: string; name: string; logo: string }[];
  sx?: SxProps;
  onDeleteSuccess?: VoidFunction;
};

export default function ProjectsList({ projects, sx, onDeleteSuccess, isLoading }: Props) {
  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();
  const router = useRouter();

  const { publishProject, isLoading: publishProjectLoading } = usePublishProject();
  const { deleteProject, isLoading: deleteProjectLoading } = useDeleteProject();

  const handlePublish = async (projectId: string) => {
    try {
      await publishProject(projectId);

      enqueueSnackbar('Your request is successfully sent, please check your email in moments');
    } catch (error) {
      console.log(error);

      enqueueErrorSnackbar(
        error.message || 'Error while requesting publish website, please try again later'
      );
    }
  };

  const handleEdit = (projectId: string) => {
    router.push(paths.builder.project.edit(projectId));
  };

  const handleView = (projectId: string) => {
    router.push(paths.project(projectId).root);
  };

  const handleDelete = async (projectId: string) => {
    try {
      await deleteProject(projectId);

      enqueueSnackbar('Successfully deleted');

      if (onDeleteSuccess) {
        onDeleteSuccess();
      }
    } catch (error) {
      console.log(error);

      enqueueErrorSnackbar(error.message || 'Error while deleting the project');
    }
  };

  const handleCreateProject = () => {
    router.push(paths.generator.root);
  };

  return (
    <Card sx={{ padding: 2, ...(sx || {}) }}>
      <Stack spacing={3}>
        <Stack direction="row" alignItems="center" gap={1} justifyContent="flex-start">
          <Iconify icon="ph:lightbulb-filament-duotone" width={30} color="primary.main" />
          <Typography variant="h5" color="common.black">
            Your Projects
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Stack spacing={2} alignItems="center">
              <BaseButton
                color="primary"
                variant="contained"
                sx={{
                  width: 1,
                  height: 197,
                  color: 'primary.main',
                  bgcolor: 'background.secondary',
                  border: '1px dashed',
                  borderColor: 'primary.main',
                  borderRadius: '20px',
                  ':hover': {
                    color: 'primary.main',
                    bgcolor: 'background.secondary',
                    border: '1px dashed',
                    borderColor: 'primary.main',
                  },
                }}
                onClick={handleCreateProject}
              >
                <Iconify icon="icons8:plus" width={37} />
              </BaseButton>
              <Typography variant="h6" color="primary.main">
                Add new
              </Typography>
            </Stack>
          </Grid>
          {isLoading &&
            Array.from({ length: 3 }).map((_, i) => (
              <Grid key={i} item xs={12} sm={6} md={4}>
                <Skeleton variant="rounded" height={250} />
              </Grid>
            ))}

          {!isLoading &&
            projects.map((project) => (
              <Grid key={project.id} item xs={12} sm={6} md={4}>
                <ProjectItem
                  name={project.name}
                  logo={project.logo}
                  onEditClick={() => handleEdit(project.id)}
                  onViewClick={() => handleView(project.id)}
                  onDeleteClick={() => handleDelete(project.id)}
                  onPublishClick={() => handlePublish(project.id)}
                  projectId={project.id}
                  disabled={publishProjectLoading || deleteProjectLoading}
                />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </Card>
  );
}
