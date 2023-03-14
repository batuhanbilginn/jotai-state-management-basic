import { postAtom } from "@/atoms/postAtoms";
import { useAtom } from "jotai";
import { focusAtom } from "jotai-optics";
import dynamic from "next/dynamic";
import { useMemo } from "react";
const ThumsUp = dynamic(() =>
  import("lucide-react").then((mod) => mod.ThumbsUp)
);
const ThumsDown = dynamic(() =>
  import("lucide-react").then((mod) => mod.ThumbsDown)
);

const ReactionButton = ({ type }: { type: "likes" | "dislikes" }) => {
  const focusedAtom = useMemo(
    () => focusAtom(postAtom, (optic) => optic.prop("reactions").prop(type)),
    [type]
  );
  const [state, setter] = useAtom(focusedAtom);

  const handleReaction = () => {
    setter((state) => state + 1);
  };

  return (
    <button
      className="flex items-center justify-center w-full gap-2 px-8 py-3 transition-colors duration-75 rounded-md text-neutral-800 bg-neutral-100 hover:bg-neutral-200"
      onClick={handleReaction}
    >
      {type === "likes" ? (
        <>
          {state} <ThumsUp size="16" />
        </>
      ) : (
        <>
          {state} <ThumsDown size="16" />
        </>
      )}
    </button>
  );
};

export default ReactionButton;
