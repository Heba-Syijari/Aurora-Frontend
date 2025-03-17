import * as Yup from 'yup';
import { useCallback, useMemo, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useProjectContext } from 'src/providers/project/project-context';
import { paths } from 'src/routes/paths';
import { IPost } from 'src/types/blog';
import { useSnackbar } from 'src/components/snackbar';
import { useGenerateText } from 'src/api/content';
import { useUploadImage } from 'src/api/upload/use-upload-image';
import { useCreatePost, useUpdatePost } from 'src/api/post';

export const useBlogFormView = (currentPost?: IPost) => {
  const { project } = useProjectContext();

  const { createPost } = useCreatePost();
  const { updatePost } = useUpdatePost();

  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();

  const { generateText, isLoading: generateTextLoading } = useGenerateText();
  const { uploadImage } = useUploadImage();

  const schema = Yup.object().shape({
    title: Yup.string().required('The title is required'),
    description: Yup.string().required('The description is required'),
    body: Yup.string().required('The body is required'),
    image: Yup.mixed<any>().nullable().required('The image is required'),
  });

  const defaultValues = useMemo(
    () => ({
      title: currentPost?.title || '',
      description: currentPost?.description || '',
      body: currentPost?.body || '',
      image: currentPost?.imagePath || null,
    }),
    [currentPost]
  );

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const isLoading = isSubmitting || generateTextLoading;

  useEffect(() => {
    if (currentPost) {
      reset(defaultValues);
    }
  }, [currentPost, defaultValues, reset]);

  const onSubmit = handleSubmit(async (data) => {
    console.info('DATA', data);
    try {
      await handleUpdateOrCreatePost(data);

      reset();
      enqueueSnackbar(currentPost ? 'Update success!' : 'Create success!');
      window.location.href = paths.project(project.id).content.blogs;
    } catch (error) {
      console.error(error);
      enqueueErrorSnackbar(error.message);
    }
  });

  const handleUpdateOrCreatePost = async (data: {
    title: string;
    description: string;
    body: string;
    image: any;
  }) => {
    const { image, ...values } = data;
    const imagePath = await getImagePath(image);

    const payload = {
      ...values,
      imagePath,
      projectId: project.id,
    };

    if (currentPost) {
      await updatePost({ ...payload, id: currentPost.id });
    } else {
      await createPost(payload);
    }
  };

  const getImagePath = async (image: string | File): Promise<string> => {
    if (image instanceof File) {
      const { fileURL } = await uploadImage(image);
      return fileURL;
    }

    return image;
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('image', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue('image', null);
  }, [setValue]);

  const handleEnhanceText = useCallback(
    async (key: keyof IPost) => {
      try {
        const generatedText = await generateText(
          `generate a post ${key} for website using the description ${project.description}`
        );
        setValue(key as any, generatedText);
      } catch (error) {
        console.log(error);
        enqueueErrorSnackbar('Generating text is failed');
      }
    },
    [enqueueErrorSnackbar, generateText, project, setValue]
  );

  return {
    isLoading,
    enhanceText: handleEnhanceText,
    handleDrop,
    removeFile: handleRemoveFile,
    methods,
    onSubmit,
  };
};
