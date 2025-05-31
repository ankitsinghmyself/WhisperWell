import React from "react";
import Link from "next/link";

const tabs = ["Recent", "Popular", "Categories"];

const posts = [
  {
    id: 1,
    name: "Anonymous",
    time: "2 hours ago",
    likes: 123,
    comments: 45,
    content:
      "I've always felt like an outsider in my own family. It's like I'm living a double life, pretending to be someone I'm not just to fit in. The loneliness is crushing sometimes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP910_F3tvJweAT2obGK2BqlN9KvcL6seWHKmh2MtpC-sejTRvwJ7UWxrR08vMvAyKLUPdPdcfQjsaLrDW7wpAtaG1o8PVMREZBaMFy5etolZv5hlPrNAu-_prRaZcoSjYBrUnp-sPjO-In42OZuRzv59h0fmtDs_EmzpHQV81VeOzq3rFJuM0v_K32m1Q_h--YxgyF1q7U0QeRifTXhbyFNx7q0-MftLgKNn543CXrlRkTZ6F7uc19pwVNMprdU4aBSAWH6QVBi5R",
  },
  {
    id: 2,
    name: "Anonymous",
    time: "4 hours ago",
    likes: 87,
    comments: 22,
    content:
      "I'm terrified of failure. It paralyzes me, and I end up not even trying. I know it's irrational, but the fear is so real.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKmnvC2jEiqpu4kYxkPvrQOdVV7kLfVBvuuLZmLd-F_Ppz1OTEYvsgoMiSqdXifAC3iSoE5tVUhzxTPrFC5WcDHdOEI2PNyP2LqXMmLDTT9GCZ7dpNV_HPUVILwqwzY600nQj012CVq43pzHZFlLblojw5dLLwlfqNHr1lHZ6QHcZOCtyeNX8F_HrwKYC7f6WXw8QkdBaSBo8JmIUdQUpSMh3iQEwMP906vWM2iXqHsbAj1ZJA9WFUGAKmeMdNdVMAUrgwcJK8GQVp",
  },
];

const Explore: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col w-full max-w-[960px] flex-1">
        {/* Tabs */}
        <div className="pb-3">
          <div className="flex flex-wrap border-b border-[#e0e0e0] px-2 sm:px-4 gap-6 sm:gap-8">
            {tabs.map((tab, idx) => (
              <a
                key={tab}
                href="#"
                className={`flex flex-col items-center justify-center border-b-[3px] ${
                  idx === 0
                    ? "border-[#141414] text-[#141414]"
                    : "border-transparent text-[#757575]"
                } pb-[13px] pt-4`}
              >
                <p className="text-sm sm:text-base font-bold tracking-wide">
                  {tab}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <Link
            href={`/whispers/${post.id}`}
            key={post.id}
            className="flex flex-col sm:flex-row gap-4 bg-white px-4 py-3 border border-[#eee] rounded-md mb-3 hover:bg-gray-50 transition cursor-pointer"
          >
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] shrink-0"
              style={{ backgroundImage: `url("${post.image}")` }}
            ></div>
            <div className="flex flex-1 flex-col justify-center">
              <p className="text-[#141414] text-base font-medium">
                {post.name}
              </p>
              <p className="text-[#757575] text-sm">
                {post.time} · {post.likes} likes · {post.comments} comments
              </p>
              <p className="text-[#757575] text-sm line-clamp-3">
                {post.content}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;
