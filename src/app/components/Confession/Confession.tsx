import React, { useEffect, useState } from "react";
import CommentBox from "../CommentBox";
import { timeSince } from "@/lib/utils";
import { FaHeart } from "react-icons/fa";
interface Comment {
  author: string;
  createdAt: string;
  content: string;
  image?: string;
}

interface ConfessionData {
  title: string;
  body: string;
  content: string; 
  reactions: { type: string; count: number }[];
  comments: Comment[];
  _count: {
    comments: number;
  };
}

interface ConfessionProps {
  whisperId?: string;
}
const Confession = ({ whisperId }: ConfessionProps) => {
  const [data, setData] = useState<ConfessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isComment, setIsComment] = useState(false);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  useEffect(() => {
    if (!whisperId) return;

    const fetchData = async () => {
      try {
        const response = await fetch(`/api/posts/getById/${whisperId}`);
        const result = await response.json();
        setData(result);
        setLikes(result.likes || 0);
      } catch (error) {
        console.error("Error fetching confession:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [whisperId, isComment]);
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "{}");
    setLiked(whisperId ? !!likedPosts[whisperId] : false);
  }, [whisperId]);

  const handleLikeToggle = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("/api/posts/like", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ whisperId, liked }),
      });

      const data = await res.json();
      if (res.ok) {
        setLikes(data.newLikeCount);
        setLiked(data.liked);

        // Save new status to localStorage
        const likedPosts = JSON.parse(
          localStorage.getItem("likedPosts") || "{}"
        );
        if (data.liked && whisperId) {
          likedPosts[whisperId] = true;
        } else if (whisperId) {
          delete likedPosts[whisperId];
        }
        localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
      }
    } catch (err) {
      console.error("Error toggling like:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 flex justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px]">
        {/* Confession Text */}
        <div className="text-[#141414] text-base font-normal px-4 pb-3 pt-1">
          <h2 className="text-[#141414] tracking-light text-[24px] sm:text-[28px] font-bold leading-tight text-left pb-1 pt-5 inline">
            {data?.content?.charAt(0)}
          </h2>
          <span>{data?.content?.slice(1)}</span>
        </div>

        {/* Reactions */}
        <div className="flex flex-wrap gap-4 px-4 py-2">
          {/* Like button */}
          <button
            onClick={handleLikeToggle}
            disabled={loading}
            className="flex items-center gap-2 px-3 py-2"
            aria-label={liked ? "Unlike" : "Like"}
          >
            <div
              className={`cursor-pointer ${
                liked ? "text-red-500 fill-red-500" : "text-[#757575]"
              }`}
            >
              {heartSvg}
            </div>
            <p className="text-[#757575] text-[13px] font-bold tracking-[0.015em]">
              {likes}
            </p>
          </button>

          {/* Comments (read-only) */}
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="text-[#757575]">{chatSvg}</div>
            <p className="text-[#757575] text-[13px] font-bold tracking-[0.015em]">
              {data?._count.comments}
            </p>
          </div>
        </div>

        {/* Comments */}
        <h2 className="text-[#141414] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Comments
        </h2>

        {data?.comments.map((comment, idx) => (
          <div key={idx} className="flex items-start gap-3 p-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
              style={{
                backgroundImage: `url(https://lh3.googleusercontent.com/aida-public/AB6AXuB986GmkJUsjufM2kf6NJiGjdwRi8bz70vnrqGWJ0E4ghMWqR8fFXoicyd1e7gS6D1TSX611RAD1oXdVJD0ehq4cIA9OBzbglCbVuuMf3TXdPOeNpPZEuh68Yluc1DBpjAqsU0GCSp8KwGoO_hT1ZC-Jzzyqbe7z_wpkDThaaIRYayWxnKefFbsfAyncsoakNWJhx_qqj6j8v2cqnDK4XxJ8maGspfDh11NvSKaHGDf9NjpOexg8mjn_phwlYxdP7OL4ESWjfA7_qOS)`,
              }}
            ></div>
            <div className="flex flex-1 flex-col">
              <div className="flex flex-wrap gap-x-3">
                <p className="text-[#141414] text-sm font-bold tracking-[0.015em]">
                  {comment?.author}
                </p>
                <p className="text-[#757575] text-sm">
                  {timeSince(comment?.createdAt)}
                </p>
              </div>
              <p className="text-[#141414] text-sm">{comment?.content}</p>
            </div>
          </div>
        ))}
        {whisperId && (
          <CommentBox whisperId={whisperId} setIsComment={setIsComment} />
        )}
      </div>
    </div>
  );
};

// Sample SVGs
const heartSvg = <FaHeart className="text-[24px] text-red-500" />;

const chatSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z" />
  </svg>
);

export default Confession;
