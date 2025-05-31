import React from "react";
import CommentBox from "../CommentBox";

interface ConfessionProps {
  id?: number | string;
}

const Confession = ({ id }: ConfessionProps) => {
  return (
  <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 flex justify-center py-5">
  <div className="layout-content-container flex flex-col w-full max-w-[960px]">
    {/* Breadcrumbs */}
    <div className="flex flex-wrap gap-2 p-4">
      <a className="text-[#757575] text-base font-medium" href="#">Home</a>
      <span className="text-[#757575] text-base font-medium">/</span>
      <span className="text-[#141414] text-base font-medium">Confession</span>
    </div>

    {/* Confession Title */}
    <h2 className="text-[#141414] tracking-light text-[24px] sm:text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
      {id ? `Confession #${id}` : "Confession"}<br />
      My biggest fear is not being good enough for my family.
    </h2>

    {/* Confession Text */}
    <p className="text-[#141414] text-base font-normal px-4 pb-3 pt-1">
      I&apos;ve always felt like I&apos;m living in the shadow of my older siblings. They&apos;re both incredibly successful and seem to have it all figured out. I constantly worry that
      I&apos;ll never measure up to their achievements and that I&apos;ll disappoint my parents. It&apos;s a heavy burden to carry, and sometimes I feel like I&apos;m drowning in self-doubt.
    </p>

    {/* Reactions */}
    <div className="flex flex-wrap gap-4 px-4 py-2">
      {[
        { icon: "Heart", count: 23, svg: heartSvg },
        { icon: "Smiley", count: 5, svg: smileySvg },
        { icon: "Chat", count: 12, svg: chatSvg },
      ].map(({ svg, count }, idx) => (
        <div key={idx} className="flex items-center gap-2 px-3 py-2">
          <div className="text-[#757575]">{svg}</div>
          <p className="text-[#757575] text-[13px] font-bold tracking-[0.015em]">{count}</p>
        </div>
      ))}
    </div>

    {/* Comments */}
    <h2 className="text-[#141414] text-[20px] sm:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Comments</h2>
    
    {comments.map((comment, idx) => (
      <div key={idx} className="flex items-start gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{ backgroundImage: `url(${comment.image})` }}
        ></div>
        <div className="flex flex-1 flex-col">
          <div className="flex flex-wrap gap-x-3">
            <p className="text-[#141414] text-sm font-bold tracking-[0.015em]">{comment.name}</p>
            <p className="text-[#757575] text-sm">{comment.time}</p>
          </div>
          <p className="text-[#141414] text-sm">{comment.message}</p>
        </div>
      </div>
    ))}
    <CommentBox />
  </div>
</div>

  );
};

// Sample SVGs
const heartSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
  </svg>
);

const smileySvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z" />
  </svg>
);

const chatSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z" />
  </svg>
);

// Comments Data
const comments = [
  {
    name: "Sophia",
    time: "2d ago",
    message:
      "I can relate to this so much. It's tough when you feel like you're constantly being compared to others. Just remember that your worth isn't defined by your achievements, but by who you are as a person.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB986GmkJUsjufM2kf6NJiGjdwRi8bz70vnrqGWJ0E4ghMWqR8fFXoicyd1e7gS6D1TSX611RAD1oXdVJD0ehq4cIA9OBzbglCbVuuMf3TXdPOeNpPZEuh68Yluc1DBpjAqsU0GCSp8KwGoO_hT1ZC-Jzzyqbe7z_wpkDThaaIRYayWxnKefFbsfAyncsoakNWJhx_qqj6j8v2cqnDK4XxJ8maGspfDh11NvSKaHGDf9NjpOexg8mjn_phwlYxdP7OL4ESWjfA7_qOS",
  },
  {
    name: "Ethan",
    time: "1d ago",
    message:
      "You're not alone in this. Many people feel this way, even if it doesn't seem like it on the surface. Focus on your own journey and what makes you happy.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDEO6HeijfVcuhKpDIKzqcE-4hDecf1wq3_KMx_Y-LypCyatsER3oRbNFX3Pv9cU-7NQG-K_MCg8GQOE6apP_b6BvRdGKmkoj8e20Td79EeY17TGcrqofvAgyOmxBn1kN6g9VCG2RMfXgsSxVCb32DlVXpCLI2CJRrQ3eT79veN-q1tJm9X_UqAaNQGHWBY0fJL_fDuTv4RrdIYR2thWTy0G0v7BDXI9FTMd2KOr2k3xyFciVXRxrv81YEpbhi1i4WNnLX1_admpaL",
  },
];

export default Confession;
