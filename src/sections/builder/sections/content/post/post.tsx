import dynamic from 'next/dynamic';
import { useCallback } from 'react';
import { useAuthContext } from 'src/auth/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { EditPostDialogProps, EditPostWrapper } from 'src/sections/builder/editors/post';
import SubscriptionExpiredDialog from 'src/sections/builder/editors/section/subscription-expired-dialog';
import { IPost } from 'src/types/blog';
import { PostHeroSection } from './hero-section';
import { PostsList } from './posts-list';
import { PostTextSection } from './text-section';

const EditPostDialog = dynamic<EditPostDialogProps>(
  () => import('src/sections/builder/editors/post').then((module) => module.EditPostDialog),
  { ssr: false }
);

type PostProps = {
  post: IPost;
  relatedPosts: IPost[];
  isPreview?: boolean;
};

export default function Post({ post, relatedPosts, isPreview }: PostProps) {
  const { subscription } = useAuthContext();

  const dialog = useBoolean();
  const subscriptionExpiredDialogOpen = useBoolean();

  const checkCanDoAction = useCallback(
    () =>
      new Promise<boolean>((resolve) => {
        if (!subscription || subscription.isExpired) {
          // subscriptionExpiredDialogOpen.onTrue();
          resolve(true);
        } else {
          resolve(true);
        }
      }),
    [subscription]
  );

  const handleEditClick = useCallback(() => {
    checkCanDoAction().then(dialog.setValue);
  }, [checkCanDoAction, dialog]);

  return (
    <>
      <main>
        <EditPostWrapper onEditClick={handleEditClick} isPreview={isPreview}>
          <PostHeroSection
            title={post.title}
            description={post.description}
            imageURL={post.imagePath}
            createdAt={post.createdAt}
          />
        </EditPostWrapper>

        <PostTextSection body={post.body} />

        <PostsList posts={relatedPosts.filter(({ id }) => post.id !== id)} />
      </main>

      {!isPreview && (
        <EditPostDialog open={dialog.value} post={post} onCloseClicked={dialog.onFalse} />
      )}

      <SubscriptionExpiredDialog
        open={subscriptionExpiredDialogOpen.value}
        onClose={subscriptionExpiredDialogOpen.onFalse}
      />
    </>
  );
}
