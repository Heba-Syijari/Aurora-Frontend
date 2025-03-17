import { PostItem } from 'src/sections/builder/common/posts';
import { IPost } from 'src/types/blog';

type Props = {
  post: IPost;
  config: { titleTextColor: string; descriptionTextColor: string };
};

export default function BlogsOneItem(props: Props) {
  return <PostItem {...props} />;
}
