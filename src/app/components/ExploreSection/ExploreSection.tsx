import { Button } from "@/components/ui/button";
import { getRandomId } from "@/lib/utils";
import React from "react";

const whispers = [
  {
    image: `https://picsum.photos/200/300?random=${getRandomId()}`,
    text: "I've always felt like an imposter in my career, despite my successes.",
  },
  {
    image: `https://picsum.photos/200/300?random=${getRandomId()}`,
    text: "I secretly dream of leaving everything behind and starting a new life.",
  },
  {
    image: `https://picsum.photos/200/300?random=${getRandomId()}`,

    text: "Sometimes, I wish I could erase all the mistakes I've made.",
  },
  {
    image: `https://picsum.photos/200/300?random=${getRandomId()}`,

    text: "I fear that my loneliness will never truly end.",
  },
];

export default function ExploreSection() {
  return (
    <div className=" flex-1 justify-center px-4 sm:px-10 md:px-20 lg:px-40 py-5">
      <h2 className="text-[#141414] text-center text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5 px-4 pb-5">
        Explore Whispers
      </h2>

      <div className="overflow-x-auto no-scrollbar md:flex flex-1 md:justify-center">
        <div className="flex gap-3 w-max px-4 pb-4">
          {whispers.map(({ image, text }, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[16rem] flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4"
            >
              <img
                src={image}
                alt="whisper"
                className="aspect-square w-full rounded-lg object-cover"
              />
              <p className="text-xs font-normal text-gray-800">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center px-4">
        <Button
          variant="outline"
          className="min-w-[84px] max-w-[480px] h-10 px-4 font-bold tracking-[0.015em]"
        >
          Explore More Whispers
        </Button>
      </div>
    </div>
  );
}
