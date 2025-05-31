"use client";
import React from "react";
import IntroSection from "./components/IntroSection";
import ExploreSection from "./components/ExploreSection";
export default function Home() {
  return (
    <div
      className=" bg-white"
      style={{ fontFamily: `"Public Sans", "Noto Sans", sans-serif` }}
    >
      <div>
        <main>
          <div>
            <IntroSection />
            <ExploreSection />
          </div>
        </main>
      </div>
    </div>
  );
}
