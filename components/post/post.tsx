"use client";

import { postAtom } from "@/atoms/postAtoms";
import { PostI } from "@/dummy-posts";
import { useHydrateAtoms } from "jotai/utils";
import PostBody from "./post-body";
import PostHeader from "./post-header";
import PostReactions from "./post-reactions";

const Post = ({ post }: { post: PostI }) => {
  useHydrateAtoms([[postAtom, post] as const]);

  return (
    <div className="w-full px-8 py-10 mx-auto max-w-7xl">
      <PostHeader />
      <PostReactions />
      <PostBody />
    </div>
  );
};

export default Post;
