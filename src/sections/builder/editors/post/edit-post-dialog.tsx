import { yupResolver } from '@hookform/resolvers/yup';
import { Box, DialogActions, DialogContent, Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useEnhanceText, useGenerateText } from 'src/api/content';
import { useUpdatePost } from 'src/api/post';
import FormProvider, { RHFEditor, RHFTextField } from 'src/components/hook-form';
import Iconify from 'src/components/iconify/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { BaseLoadingButton } from 'src/components/styled/button';
import { useBoolean } from 'src/hooks/use-boolean';
import { useProjectContext } from 'src/providers/project/project-context';
import { IPost } from 'src/types/blog';
import * as Yup from 'yup';
import { ImageData } from '../../types';
import BaseEditDialog from '../base-edit-dialog';
import BaseEditWrapper from '../base-edit-wrapper';
import EditImageDialog from '../image/edit-image-dialog';
import IconAction from '../section/icon-action';

const Image = ({ src }: { src: string }) => (
  <Box
    sx={{
      height: '100%',
      backgroundColor: (theme) => theme.palette.background.neutral,
      backgroundImage: `url('${src}')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: (theme) => theme.spacing(1),
    }}
  />
);

type IconWrapperProps = {
  children: React.ReactNode;
};

const IconWrapper = ({ children }: IconWrapperProps) => (
  <Box
    component="div"
    className="icon-wrapper"
    sx={{
      display: 'none',
      borderRadius: '50%',
      position: 'absolute',
      top: 4,
      right: 4,
      zIndex: 99,
      backgroundColor: (theme) => theme.palette.background.default,
      boxShadow: (theme) => theme.shadows[6],
    }}
  >
    {children}
  </Box>
);

export interface EditPostDialogProps {
  post: IPost;
  open: boolean;
  onCloseClicked: () => void;
}

export function EditPostDialog({ post, open, onCloseClicked }: EditPostDialogProps) {
  const [image, setImage] = useState<ImageData>({
    url: post.imagePath,
    alt: `an image for a post using this description ${post.description}`,
  });

  const imageDialog = useBoolean();
  const { enqueueSnackbar } = useSnackbar();

  const { project, refetch } = useProjectContext();
  const { updatePost } = useUpdatePost();
  const { enhance: enhanceText, isLoading: enhanceTextLoading } = useEnhanceText();
  const { generateText, isLoading: generateTextLoading } = useGenerateText();

  const schema = Yup.object().shape({
    title: Yup.string().required('The title is required'),
    description: Yup.string().required('The description is required'),
    body: Yup.string().required('The body is required'),
  });

  const defaultValues = { ...post };

  const methods = useForm({ resolver: yupResolver(schema), defaultValues });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
    setValue,
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updatePost({
        id: post.id,
        title: data.title,
        description: data.description,
        imagePath: image.url,
        body: data.body,
        projectId: project.id,
      });

      await refetch();

      handleClose();
    } catch (error) {
      console.error(error);
      enqueueSnackbar({
        variant: 'error',
        message: error.message,
        autoHideDuration: 2500,
      });
    }
  });

  const isLoading = isSubmitting || enhanceTextLoading || generateTextLoading;

  const handleClose = () => {
    if (!isLoading) {
      onCloseClicked();
    }
  };

  const handleSaveImage = (v: ImageData) => {
    setImage(v);
    imageDialog.onFalse();
  };

  const handleEnhanceText = async (key: keyof IPost) => {
    try {
      if (key === 'body') {
        await handleGeneratePostBodyText();
        return;
      }
      const text = post[key] as string;
      const enhancedText = await enhanceText(text);
      setValue(key as any, enhancedText);
    } catch (err) {
      console.log({ err });
    }
  };

  const handleGeneratePostBodyText = async () => {
    const generatedText = await generateText(
      `generate a post body for website using the description ${project.description}`
    );
    setValue('body', generatedText);
  };

  useEffect(() => {
    reset(post);
  }, [post, reset]);

  useEffect(() => {
    setImage({
      url: post.imagePath,
      alt: `an image for a post using this description ${post.description}`,
    });
  }, [post]);

  return (
    <>
      <BaseEditDialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        scroll="body"
        dialogTitle="Edit post"
      >
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <FormProvider id="edit-post-form" methods={methods} onSubmit={onSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={8}>
                  <Stack spacing={2}>
                    <BaseEditWrapper
                      hideBorder
                      onEditClick={() => handleEnhanceText('title')}
                      sx={{ right: 4, top: 4 }}
                      tooltipTitle="Enhance using AI"
                      disabled={isLoading}
                    >
                      <RHFTextField name="title" label="Title" disabled={isLoading} />
                    </BaseEditWrapper>

                    <BaseEditWrapper
                      hideBorder
                      onEditClick={() => handleEnhanceText('description')}
                      sx={{ right: 4, top: 4 }}
                      tooltipTitle="Enhance using AI"
                      disabled={isLoading}
                    >
                      <RHFTextField
                        name="description"
                        multiline
                        rows={4}
                        label="Description"
                        disabled={isLoading}
                      />
                    </BaseEditWrapper>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Box
                    sx={{
                      position: 'relative',
                      height: '100%',
                      '&:hover': {
                        '.icon-wrapper': {
                          display: 'block',
                        },
                      },
                    }}
                  >
                    <IconWrapper>
                      <IconAction
                        tooltipTitle="Edit image"
                        icon={<Iconify icon="ri:edit-line" width={16} color="text.primary" />}
                        onClick={imageDialog.onTrue}
                        disabled={isLoading}
                      />
                    </IconWrapper>

                    <Image src={image.url} />
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <BaseEditWrapper
                    hideBorder
                    onEditClick={() => handleEnhanceText('body')}
                    sx={{ right: 4, top: 4 }}
                    tooltipTitle="Regenerate using AI"
                    disabled={isLoading}
                  >
                    <RHFEditor name="body" simple />
                  </BaseEditWrapper>
                </Grid>
              </Grid>
            </FormProvider>
          </Box>
        </DialogContent>

        <DialogActions>
          <BaseLoadingButton
            color="primary"
            variant="contained"
            disabled={isLoading}
            loading={isSubmitting}
            type="submit"
            form="edit-post-form"
          >
            Save
          </BaseLoadingButton>
        </DialogActions>
      </BaseEditDialog>

      <EditImageDialog
        defaultValue={image}
        onCloseClicked={imageDialog.onFalse}
        open={imageDialog.value}
        onSave={handleSaveImage}
      />
    </>
  );
}
