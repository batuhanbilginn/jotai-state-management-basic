import { postAtom } from "@/atoms/postAtoms";
import { useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";
const selectedAtom = selectAtom(postAtom, (state) => state.author);

const PostAuthor = () => {
  const author = useAtomValue(selectedAtom);
  return (
    <div className="text-sm">
      <span>The Writer: </span>
      <span className="font-medium">{author}.</span>
    </div>
  );
};

export default PostAuthor;
