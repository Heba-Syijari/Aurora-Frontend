import { useGeneratePost } from 'src/api/post';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';

export const useBlogs = () => {
  const { project, refetch, isLoading: projectLoading } = useProjectContext();

  const { generatePost, isLoading: generatePostLoading } = useGeneratePost();

  const isLoading = generatePostLoading || projectLoading;

  const { enqueueSnackbar } = useSnackbar();

  const handleGeneratePost = async () => {
    try {
      await generatePost(project.id);

      await refetch();

      enqueueSnackbar('Successfully generated');
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message || 'Failed generating a post', { variant: 'error' });
    }
  };

  const handleDeletePostSuccess = async () => {
    await refetch();
  };

  return {
    projectId: project.id,
    projectName: project.name,
    isLoading,
    generatePostLoading,
    projectLoading,
    posts: project.posts,
    handleGeneratePost,
    handleDeletePostSuccess,
  };
};
