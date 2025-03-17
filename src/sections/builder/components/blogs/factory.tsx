import dynamic from 'next/dynamic';
import { IPost } from 'src/types/blog';
import { BlogsComponentName, BlogsComponentNameType } from './types';

const BlogsOne = dynamic(() => import('./blogs-one'), { ssr: false });

type BlogsFactoryProps = {
  name: BlogsComponentNameType;
  data: any;
  editMode?: boolean;
  setLocalData: (v: Record<string, any>) => void;
  posts: IPost[];
};

export default function BlogsFactory({ name, data, ...rest }: BlogsFactoryProps) {
  switch (name) {
    case BlogsComponentName.BLOGS_ONE:
      return <BlogsOne {...data} {...rest} />;

    case BlogsComponentName.BLOGS_TWO:
    default:
      return null;
  }
}
