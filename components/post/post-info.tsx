import PostAuthor from "./post-author";
import PostLikes from "./post-likes";

const PostInfo = () => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <PostAuthor />
      <div className="w-[4px] h-[4px] rounded-full bg-neutral-800" />
      <PostLikes />
    </div>
  );
};

export default PostInfo;
