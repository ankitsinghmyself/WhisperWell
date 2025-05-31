import { Button } from "@/components/ui/button";
import React from "react";
import ShareWhisperModal from "../modals/ShareWhisperModal/ShareWhisperModal";

export default function IntroSection() {
  return (
    <div className=" flex-1 justify-center px-4 sm:px-10 md:px-20 lg:px-40 py-5">
      <section
        className="flex flex-col  items-center justify-center min-h-[480px] px-4 py-8 text-center rounded-xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYPdRl30XqXcLvEQ68-cT_QaY_5_3gPqo6O2yihCzY0TTYupZUgCMlLDubtqSKSaqDnAsG5xbGEvh0UoS-7iJeNFjGozq6AylcPA9rW6DBTAtkT2ChiZ2q1fTXK9uyWytR-7vLleKqYMjQ-RS4T17c7zzn_yKuUIyJTfOs94KkZmbfB5lteP-c_WbvVMnS2yEO3QES-MCWQJLdAbf4hJXTBWFyrNlqxiregj564YKFo3zbz2eTs5FD2dzRpG-ieZwg6gNNimHL-I6T")`,
        }}
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-xl">
          Share Your Thoughts, Anonymously
        </h1>
        <h2 className="text-white text-sm sm:text-base md:text-lg font-normal mt-3 max-w-md">
          Unburden your mind and connect with others through shared experiences.
          No login required.
        </h2>
        <Button
          variant="default"
          className="mt-6 min-w-[84px] max-w-[480px] h-10 px-6 font-bold tracking-[0.015em]"
        >
          <ShareWhisperModal />
        </Button>
      </section>
    </div>
  );
}
