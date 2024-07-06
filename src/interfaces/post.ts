export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string; 
  excerpt: string;
  pinned: boolean;
  content: string;
  preview?: boolean;
  repoLink: string;
};
