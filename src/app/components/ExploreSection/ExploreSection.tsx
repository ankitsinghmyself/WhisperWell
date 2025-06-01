"use client";
import { Button } from "@/components/ui/button";
import { getRandomId } from "@/lib/utils";
import { Post } from "@prisma/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ExploreSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [visibleCount, setVisibleCount] = useState(4); // Show first 4 posts initially
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
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  // Get only the visible posts based on visibleCount
  const visiblePosts = posts.slice(0, visibleCount);

  // Helper function to chunk posts into groups of 4 for mobile rows
  function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const mobilePostChunks = chunkArray(visiblePosts, 4);

  return (
    <div className="flex-1 justify-center px-4 sm:px-10 md:px-20 lg:px-40 py-5">
      <h2 className="text-[#141414] text-center text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5 px-4 pb-5">
        Explore Whispers
      </h2>

      {loading && <p className="text-center">Loading posts...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          {/* Desktop: Grid with 4 columns and multiple rows */}
          <div className="hidden md:grid md:grid-cols-4 md:gap-4">
            {visiblePosts.map((post, i) => (
              <div
                key={post.id || i}
                className="flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4"
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

          {/* Mobile: Multiple horizontally scrollable rows, each max 4 posts */}
          <div className="md:hidden flex flex-col gap-6">
            {mobilePostChunks.map((chunk, idx) => (
              <div
                key={idx}
                className="flex overflow-x-auto no-scrollbar gap-3 px-4"
              >
                {chunk.map((post, i) => (
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
            ))}
          </div>

          {/* Load More button */}
          {visibleCount < posts.length && (
            <div className="flex justify-center px-4 pt-4">
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
