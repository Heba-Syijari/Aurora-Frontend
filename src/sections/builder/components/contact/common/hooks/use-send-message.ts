import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { sendContactMessage } from 'src/api/contact-message';
import { useSnackbar } from 'src/components/snackbar';
import * as Yup from 'yup';

type Props = {
  projectId: string;
};

export function useSendMessage({ projectId }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const schema = Yup.object().shape({
    name: Yup.string().required('The name is required'),
    email: Yup.string().email().required('The email is required'),
    message: Yup.string().required('The message is required'),
  });

  const defaultValues = {
    name: '',
    email: '',
    message: '',
  };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const onSubmit = handleSubmit(async (values) => {
    try {
      const payload = {
        name: values.name,
        email: values.email,
        description: values.message,
        projectId,
      };

      await sendContactMessage(payload);

      enqueueSnackbar('Message sent successfully');

      reset();
    } catch (error) {
      console.error(error);
      enqueueSnackbar(error.message || error, { variant: 'error' });
    }
  });

  return {
    onSubmit,
    methods,
    isSubmitting,
  };
}
