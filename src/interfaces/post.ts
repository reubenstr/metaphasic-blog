export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string; 
  excerpt: string;
  favorited: boolean;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
