import _ from 'lodash';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'src/components/snackbar';
import { useProjectContext } from 'src/providers/project/project-context';
import { IPlugin, PluginVariation, supportedPlugins } from 'src/types/project';
import { useUpdateProject } from 'src/api/project';

function getDistinctPluginVariation(plugins: IPlugin[]): PluginVariation[] {
  return _.uniqBy(plugins, 'variation').map((plugin) => plugin.variation);
}

export const useIntegrations = () => {
  const { project, refetch } = useProjectContext();

  const plugins = project.plugins || [];

  const { updateProject } = useUpdateProject();

  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();

  const schema = Yup.object().shape({
    plugins: Yup.array().of(Yup.string().oneOf(supportedPlugins).required()),
  });

  const defaultValues = {
    plugins: getDistinctPluginVariation(plugins),
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.info('DATA', values);

      await updateProject({
        id: project.id,
        plugins: values.plugins || [],
      });

      await refetch();

      enqueueSnackbar('Successfully updated');
    } catch (error) {
      console.error(error);
      enqueueErrorSnackbar(error.message || 'Failed updating the project plugins');
    }
  });

  const handleAdamConfigSuccess = async () => {
    await refetch();
  };

  return {
    projectId: project.id,
    projectName: project.name,
    methods,
    onSubmit,
    isLoading: isSubmitting,
    plugins,
    handleAdamConfigSuccess,
  };
};
