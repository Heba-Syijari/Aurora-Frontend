import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import EmptyContent from 'src/components/empty-content';
import { PostButton } from 'src/sections/builder/common/posts';
import { EditPostConfig } from 'src/sections/builder/editors/post/config';
import { EditTextWrapper } from 'src/sections/builder/editors/text';
import { TextData } from 'src/sections/builder/types';
import { IPost } from 'src/types/blog';
import { IPostConfig } from '../types';
import BlogsOneItem from './blogs-one-item';

type Props = {
  post: IPostConfig;
  posts: IPost[];
  title: TextData;
  description: TextData;
  editMode?: boolean;
  setLocalData: (v: Record<string, any>) => void;
};

export default function BlogsOne({
  post: postConfig,
  posts,
  title,
  description,
  setLocalData,
  editMode,
}: Props) {
  const gridMdItemsPerRowCount = 12 / Math.min(Math.max(postConfig.itemsPerRowCount, 2), 4);
  const maxPostsCount = Math.max(Math.min(posts.length, postConfig.itemsCount), 2);

  const renderNoPosts = (
    <EmptyContent
      title="No posts added yet"
      description="You can add posts from user dashboard"
      maxHeight={200}
    />
  );

  const renderPosts = (
    <EditPostConfig
      defaultValue={postConfig}
      editMode={editMode}
      onSave={(config) => {
        setLocalData({ post: config });
      }}
    >
      <Grid container spacing={4}>
        {posts.slice(0, maxPostsCount).map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={gridMdItemsPerRowCount}>
            <BlogsOneItem post={post} config={postConfig} />
          </Grid>
        ))}
      </Grid>
    </EditPostConfig>
  );

  return (
    <Box sx={{ py: 11 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Chip label="Blogs" />
        </Box>

        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <EditTextWrapper
            label="Title"
            defaultValue={title}
            onSave={(v) => {
              setLocalData({ title: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'title', sectionType: 'blog' })}
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

          <EditTextWrapper
            label="Description"
            defaultValue={description}
            onSave={(v) => {
              setLocalData({ description: v });
            }}
            editMode={editMode}
            getMetadataInfo={() => ({ itemType: 'description', sectionType: 'blog' })}
          >
            <Typography variant="body1" fontSize={20} color={description.color} maxWidth={920}>
              {description.text}
            </Typography>
          </EditTextWrapper>
        </Stack>

        <Box sx={{ mt: 8 }}>
          {posts.length === 0 && renderNoPosts}

          {posts.length > 0 && renderPosts}
        </Box>

        {posts.length > 0 && (
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <PostButton text="View all" />
          </Box>
        )}
      </Container>
    </Box>
  );
}
