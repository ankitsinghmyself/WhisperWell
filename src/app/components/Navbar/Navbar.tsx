"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../Logo";
import ShareWhisperModal from "../modals/ShareWhisperModal/ShareWhisperModal";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-[#f2f2f2] px-5 py-3 md:px-10">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-9 text-[#141414]">
            <Link href="/" className="text-sm font-medium leading-normal">
              Home
            </Link>
            <Link href="/explore" className="text-sm font-medium leading-normal">
              Explore
            </Link>
            <Link href="/about-us" className="text-sm font-medium leading-normal">
              About
            </Link>
          </nav>
          <Button className="min-w-[84px] h-10 px-4 font-bold tracking-[0.015em]">
            <ShareWhisperModal />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-[#141414]">
          <Link href="/" className="text-sm font-medium leading-normal">
            Home
          </Link>
          <Link href="/explore" className="text-sm font-medium leading-normal">
            Explore
          </Link>
          <Link href="/about-us" className="text-sm font-medium leading-normal">
            About
          </Link>
          <Button className="mt-2 w-full font-bold tracking-[0.015em]">
            <ShareWhisperModal />
          </Button>
        </div>
      )}
    </header>
  );
}
