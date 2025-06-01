"use client";
import { Button } from "@/components/ui/button";
import { getRandomId } from "@/lib/utils";
import { Post } from "@prisma/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ExploreSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(4); // How many posts to show
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="flex-1 justify-center px-4 sm:px-10 md:px-20 lg:px-40 py-5">
      <h2 className="text-[#141414] text-center text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5 px-4 pb-5">
        Explore Whispers
      </h2>

      {loading && <p className="text-center">Loading posts...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <div className="overflow-x-auto no-scrollbar md:flex flex-1 md:justify-center">
            <div className="flex gap-3 w-max px-4 pb-4">
              {posts.slice(0, visibleCount).map((post, i) => (
                <div
                  key={post.id || i}
                  className="flex-shrink-0 w-[16rem] flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4"
                >
                  <Link href={`/whispers/${post?.id}`}>
                    <img
                      src={`https://picsum.photos/200/300?random=${getRandomId()}`}
                      alt="whisper"
                      className="aspect-square w-full rounded-lg object-cover"
                    />
                    <p className="text-xs font-normal text-gray-800 line-clamp-2">
                      {post?.content}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {visibleCount < posts.length && (
            <div className="flex justify-center px-4">
              <Button
                variant="outline"
                className="min-w-[84px] max-w-[480px] h-10 px-4 font-bold tracking-[0.015em]"
                onClick={handleLoadMore}
              >
                Explore More Whispers
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
