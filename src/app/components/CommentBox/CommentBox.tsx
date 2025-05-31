"use client";
import React, { useState } from "react";
import { SendHorizonal } from "lucide-react"; // optional, install lucide-react if needed

const CommentBox = () => {
  const [comment, setComment] = useState("");

  const handleClear = () => {
    setComment("");
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setComment(text);
    } catch (err) {
      console.error("Failed to read clipboard: ", err);
    }
  };

  const handleSend = () => {
    if (comment.trim() === "") return;
    console.log("Send clicked:", comment);
    setComment("");
  };

  return (
    <div className="flex w-full max-w-[960px] items-center px-4 sm:px-6 py-3 gap-3">
      {/* Avatar */}
      <div
        className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 shrink-0"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuADapQGt_jFaQSb_LqPyb1MFeFfnJwOymixtsCgxaR-zMYzE3h3UvNSjgzbEbBSYD5wjt208RO6KA_JFkRaBQq6oQQwjBpq1LD0guz1HsNV0URsQMVwN97P9z_3xwP1d8FmxYzaURN1C8t5KcUtNI1na9SsNPdqRv2Y5Tl3NrwdhMrN4oGVGNxCfxVyJ9pPv0stPDbPyEeQArtvmMHozrlvBJFMYUPvh3-yS8OkOn_yY0wBO2hUgnF5ZXHA8BADcg2APGMO3MfUjpdI")',
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
        />

        {/* Send button - shown only if there's input */}
        {comment.trim() !== "" && (
          <>
            {/* Icon button for small screens */}
            <button
              onClick={handleSend}
              className="flex px-3 h-full items-center justify-center text-[#141414]"
            >
              <SendHorizonal className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
