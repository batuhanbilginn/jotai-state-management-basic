import Post from "@/components/post/post";
import { DUMMY_POSTS } from "@/dummy-posts";
import { notFound } from "next/navigation";

const PostPage = async ({ params: { id } }: { params: { id: string } }) => {
  const getPost = () => {
    const post = DUMMY_POSTS.find((post) => post.id === id);
    if (!post) {
      notFound();
    } else {
      return post;
    }
  };

  const post = getPost();

  return <Post post={post} />;
};

export default PostPage;
