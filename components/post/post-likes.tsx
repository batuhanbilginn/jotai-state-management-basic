import { postAtom } from "@/atoms/postAtoms";
import { useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";
const selectedAtom = selectAtom(postAtom, (state) => state.reactions.likes);

const PostLikes = () => {
  const totalLikes = useAtomValue(selectedAtom);
  return (
    <div className="text-sm">
      <span>Total Likes: </span>
      <span className="font-medium">{totalLikes}</span>
    </div>
  );
};

export default PostLikes;
