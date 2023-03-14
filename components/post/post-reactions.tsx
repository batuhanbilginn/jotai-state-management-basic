import ReactionButton from "./reaction-button";

const PostReactions = () => {
  return (
    <div className="flex items-center gap-6 mt-6">
      <ReactionButton type="likes" />
      <ReactionButton type="dislikes" />
    </div>
  );
};

export default PostReactions;
