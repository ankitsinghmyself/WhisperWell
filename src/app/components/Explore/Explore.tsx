"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaRegComment, FaHeart, FaClock } from "react-icons/fa";
import { timeSince } from "@/lib/utils";

const tabs = ["Recent", "Popular"];

interface Post {
  id: string;
  name: string;
  createdAt: string;
  likes: number;
  comments: number;
  content: string;
  _count: {
    comments: number;
  };
}
export const images = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAP910_F3tvJweAT2obGK2BqlN9KvcL6seWHKmh2MtpC-sejTRvwJ7UWxrR08vMvAyKLUPdPdcfQjsaLrDW7wpAtaG1o8PVMREZBaMFy5etolZv5hlPrNAu-_prRaZcoSjYBrUnp-sPjO-In42OZuRzv59h0fmtDs_EmzpHQV81VeOzq3rFJuM0v_K32m1Q_h--YxgyF1q7U0QeRifTXhbyFNx7q0-MftLgKNn543CXrlRkTZ6F7uc19pwVNMprdU4aBSAWH6QVBi5R",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCSBfiUyjwuzj-QFat4Jm6Ffl0c3cwPeM40vJ3WcEexLTyljswF7PfHCGDZV5r2n_ezyR8PVSJN2hNrh7MVM63N-28V3jaNnnexGhy9xNqP22Ztkr-hJLBzms3Pq-w6yXTcRs0spiJ8j1EHBu9ejADhSTYAy_FgS8VADrVX2FwtfA1zg1X99k9BHudW64FbHtE6a3CaGv5sgC17OA43oPn2MX2Eb9PUEAXOaPeh3smh0g8dzLn3BN6VVPkyWzFb1QpI8S6cH1UY_dFG",
];
const Explore: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(tabs[0]); // default to "Recent"

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/posts/allPosts");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  // Sort/filter posts based on active tab
  const displayedPosts = [...posts];
  if (activeTab === "Recent") {
    displayedPosts.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  } else if (activeTab === "Popular") {
    displayedPosts.sort((a, b) => b.likes - a.likes);
  }

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
        {/* Tabs */}
        <div className="pb-3">
          <div className="flex flex-wrap border-b border-[#e0e0e0] px-2 sm:px-4 gap-6 sm:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex flex-col items-center justify-center border-b-[3px] ${
                  activeTab === tab
                    ? "border-[#141414] text-[#141414]"
                    : "border-transparent text-[#757575]"
                } pb-[13px] pt-4 font-bold text-sm sm:text-base tracking-wide`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        {displayedPosts.length === 0 ? (
          <p className="text-center py-10 text-gray-500">No posts found.</p>
        ) : (
          displayedPosts.map((post) => (
            <Link
              href={`/whispers/${post.id}`}
              key={post.id}
              className="flex flex-col sm:flex-row gap-4 bg-white px-4 py-3 border border-[#eee] rounded-md mb-3 hover:bg-gray-50 transition cursor-pointer"
            >
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] shrink-0"
                style={{
                  backgroundImage: `url("${
                    images[Math.floor(Math.random() * images.length)]
                  }")`,
                }}
              ></div>
              <div className="flex flex-1 flex-col justify-center">
                <p className="text-[#141414] text-base font-medium">
                  {post.name}
                </p>
                <p className="text-[#757575] text-sm flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <FaClock className="text-[14px]" />
                    {timeSince(post.createdAt)}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaHeart className="text-[14px] text-red-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaRegComment className="text-[14px]" />
                    {post._count.comments}
                  </span>
                </p>

                <p className="text-[#757575] text-sm line-clamp-3">
                  {post.content}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Explore;
