import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { PostsAsBlocks } from "./_components/posts-as-blocks";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro /> 
        {allPosts.length > 0 && <PostsAsBlocks posts={allPosts} />}
      </Container>
    </main>
  );
}