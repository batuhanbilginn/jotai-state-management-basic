"use client";
import { postAtom } from "@/atoms/postAtoms";
import { useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";
import Image from "next/image";
import PostInfo from "./post-info";
const selectedAtom = selectAtom(postAtom, (state) => state.header);

const PostHeader = () => {
  const header = useAtomValue(selectedAtom);
  return (
    <header>
      <h1 className="mb-2 text-4xl font-bold">{header.title}</h1>
      <p className="mb-4 font-lg text-neutral-600">{header.description}</p>
      <PostInfo />
      <Image
        width={1200}
        height={500}
        priority
        alt={header.title}
        src={header.image}
        className="rounded-md max-h-[500px]"
      />
    </header>
  );
};

export default PostHeader;
