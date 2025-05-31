"use client";
import React from "react";
import IntroSection from "./components/IntroSection";
import ExploreSection from "./components/ExploreSection";
import AdminDashboard from "./components/admin/AdminDashboard";
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
            {/* <AdminDashboard /> */}
          </div>
        </main>
      </div>
    </div>
  );
}
