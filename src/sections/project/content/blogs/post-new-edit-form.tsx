import { Stack } from '@mui/material';
import { IPost } from 'src/types/blog';
import FormProvider, { RHFEditor, RHFUpload, RHFTextField } from 'src/components/hook-form';
import BaseEditWrapper from 'src/sections/builder/editors/base-edit-wrapper';
import { FormGroup } from 'src/components/custom/form-group';
import { BaseLoadingButton } from 'src/components/styled/button';
import { useBlogFormView } from './hooks/use-blog-form-view';

// ----------------------------------------------------------------------

type Props = {
  currentPost?: IPost;
};

export default function PostNewEditForm({ currentPost }: Props) {
  const { isLoading, enhanceText, removeFile, handleDrop, methods, onSubmit } =
    useBlogFormView(currentPost);

  const baseEditWrapperCommonProps = {
    hideBorder: true,
    sx: { right: 4, top: 4 },
    tooltipTitle: 'Regenerate using AI',
    disabled: isLoading,
  };

  const renderDetails = (
    <>
      <FormGroup label="Title" labelFor="title">
        <BaseEditWrapper onEditClick={() => enhanceText('title')} {...baseEditWrapperCommonProps}>
          <RHFTextField id="title" name="title" disabled={isLoading} placeholder="Post title" />
        </BaseEditWrapper>
      </FormGroup>

      <FormGroup label="Description" labelFor="description">
        <BaseEditWrapper
          onEditClick={() => enhanceText('description')}
          {...baseEditWrapperCommonProps}
        >
          <RHFTextField
            id="description"
            name="description"
            multiline
            rows={3}
            disabled={isLoading}
            placeholder="Post description"
          />
        </BaseEditWrapper>
      </FormGroup>

      <FormGroup label="Content" labelFor="body">
        <BaseEditWrapper onEditClick={() => enhanceText('body')} {...baseEditWrapperCommonProps}>
          <RHFEditor simple name="body" id="body" />
        </BaseEditWrapper>
      </FormGroup>

      <FormGroup label="Cover">
        <RHFUpload
          name="image"
          maxSize={3145728}
          onDrop={handleDrop}
          onDelete={removeFile}
          disabled={isLoading}
        />
      </FormGroup>
    </>
  );

  const renderActions = (
    <BaseLoadingButton
      color="primary"
      type="submit"
      variant="contained"
      size="large"
      loading={isLoading}
      disabled={isLoading}
      sx={{ alignSelf: 'flex-end' }}
    >
      {!currentPost ? 'Create Post' : 'Save Changes'}
    </BaseLoadingButton>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack spacing={3} sx={{ bgcolor: 'background.neutral', p: 3, borderRadius: 2 }}>
        {renderDetails}

        {renderActions}
      </Stack>
    </FormProvider>
  );
}
