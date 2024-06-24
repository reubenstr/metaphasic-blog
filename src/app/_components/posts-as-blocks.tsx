import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function PostsAsBlocks({ posts }: Props) {
  return (
    <section>   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-x-16 lg:gap-x-32 gap-y-14 md:gap-y-18 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}            
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
