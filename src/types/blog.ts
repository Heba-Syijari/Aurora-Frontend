export interface IPost {
  id: number;
  title: string;
  slug: string;
  description: string;
  body: string;
  imagePath: string;
  imageAlt?: string;
  createdAt: string;
}
