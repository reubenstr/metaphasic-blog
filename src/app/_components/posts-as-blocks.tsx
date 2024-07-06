import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function PostsAsBlocks({ posts }: Props) {
  return (
    <section>   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-4 lg:gap-x-8 gap-y-4 md:gap-y-8 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}              
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
