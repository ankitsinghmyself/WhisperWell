"use client";
import React, { useState } from "react";
import { SendHorizonal } from "lucide-react";
import toast from "react-hot-toast";
import { images } from "../Explore/Explore";

interface CommentBoxProps {
  whisperId: string;
  setIsComment?: (value: boolean) => void;
}

const CommentBox = ({ whisperId, setIsComment }: CommentBoxProps) => {
  const [comment, setComment] = useState("");

  const handleSend = async () => {
    const trimmed = comment.trim();
    if (!trimmed) return;
    try {
      const res = await fetch("/api/posts/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId: whisperId,
          content: trimmed,
        }),
      });

      if (!res.ok) throw new Error("Failed to post comment");
      setIsComment?.(true);
      toast.success("Comment posted");
      setComment("");
    } catch (err) {
      console.error("Error posting comment:", err);
      toast.error("Failed to post comment");
    }
  };

  return (
    <div className="flex w-full max-w-[960px] items-center px-4 sm:px-6 py-3 gap-3">
      {/* Avatar */}
      <div
        className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 shrink-0"
        style={{
          backgroundImage: `url("${
            images[Math.floor(Math.random() * images.length)]
          }")`,
        }}
      />

      {/* Input + Send */}
      <div className="flex w-full items-center bg-[#f2f2f2] rounded-lg h-12">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 px-4 text-base bg-transparent outline-none placeholder:text-[#757575] text-[#141414]"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
        />

        {comment.trim() && (
          <button
            onClick={handleSend}
            className="flex px-3 h-full items-center justify-center text-[#141414]"
          >
            <SendHorizonal className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
