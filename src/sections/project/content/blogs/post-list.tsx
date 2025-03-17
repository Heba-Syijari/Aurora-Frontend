import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useDeletePost } from 'src/api/post';
import { ConfirmDialog } from 'src/components/dialog';
import Iconify from 'src/components/iconify';
import { useSnackbar } from 'src/components/snackbar';
import { useBoolean } from 'src/hooks/use-boolean';
import { DeleteImage } from 'src/layouts/_common';
import { IPost } from 'src/types/blog';
import PostItem from './post-item';
import { PostItemSkeleton } from './post-skeleton';

type Props = {
  posts: IPost[];
  loading?: boolean;
  onDeleteSuccess: () => void;
  projectId: string;
};

export default function PostList({ posts, loading, onDeleteSuccess, projectId }: Props) {
  const [selectedPostId, setSelectedPostId] = useState<number>();

  const deletePostDialogOpen = useBoolean();

  const { deletePost } = useDeletePost();

  const { enqueueSnackbar, enqueueErrorSnackbar } = useSnackbar();

  const handleDeleteButtonClick = (postId: number) => {
    setSelectedPostId(postId);
    deletePostDialogOpen.onTrue();
  };

  const handleDeletePost = async () => {
    if (!selectedPostId) return;

    try {
      await deletePost(selectedPostId);
      onDeleteSuccess();
      enqueueSnackbar('Post successfully delete');
    } catch (error) {
      console.log(error);
      enqueueErrorSnackbar(error.message, { autoHideDuration: 2500 });
    } finally {
      deletePostDialogOpen.onFalse();
    }
  };

  const renderSkeleton = (
    <>
      {[...Array(4)].map((_, index) => (
        <PostItemSkeleton key={index} variant="horizontal" />
      ))}
    </>
  );

  const renderList = (
    <>
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDeleteClick={() => {
            handleDeleteButtonClick(post.id);
          }}
          projectId={projectId}
        />
      ))}
    </>
  );

  const renderNoData = (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ maxWidth: 540, m: 'auto' }}
    >
      <Box
        sx={{
          width: 72,
          height: 72,
          bgcolor: 'background.neutral',
          borderRadius: '50%',
          display: 'grid',
          placeItems: 'center',
          color: 'text.disabled',
        }}
      >
        <Iconify icon="ri:file-pdf-line" width={40} />
      </Box>
      <Typography color="text.secondary" textAlign="center" fontSize="1.25rem">
        You do not have any posts yet, either click on generate post or add new post
      </Typography>
    </Stack>
  );

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
      >
        {loading ? renderSkeleton : renderList}
      </Box>

      {!loading && posts.length === 0 && renderNoData}

      {/* {posts.length > 8 && (
        <Pagination
          count={8}
          sx={{
            mt: 8,
            [`& .${paginationClasses.ul}`]: {
              justifyContent: 'center',
            },
          }}
        />
      )} */}

      <ConfirmDialog
        image={<DeleteImage />}
        title="Delete Post"
        description="Do you really want to delete this post?"
        open={deletePostDialogOpen.value}
        onClose={deletePostDialogOpen.onFalse}
        onConfirm={handleDeletePost}
        confirmColor="error"
      />
    </>
  );
}
