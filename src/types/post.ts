export interface Post {
  title: string;
  slug: { current: string; _type: string };
  publishedAt: null | Date;
  excerpt: string;
}
