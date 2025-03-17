import { Box, Container, Grid, Typography } from '@mui/material';
import { PostItem } from 'src/sections/builder/common/posts';
import { IPost } from 'src/types/blog';

type PostsListProps = {
  posts: IPost[];
};

export function PostsList({ posts }: PostsListProps) {
  const gridSizing = posts.length > 3 ? { md: 6 } : { md: 4 };
  const height = gridSizing.md === 6 ? 312 : 218;

  return (
    <Box sx={{ py: 8, bgcolor: 'common.neutral' }}>
      <Container>
        <Typography
          component="h2"
          sx={{ fontSize: 40, fontWeight: 700, lineHeight: '48px', mb: 4 }}
        >
          More Posts
        </Typography>

        <Grid container spacing={3}>
          {posts.slice(0, 4).map((post, i) => (
            <Grid key={i} item xs={12} sm={6} {...gridSizing}>
              <PostItem
                post={post}
                config={{ descriptionTextColor: 'text.secondary', titleTextColor: 'text.primary' }}
                height={height}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
