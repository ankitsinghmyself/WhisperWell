import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center border-t border-[#f2f2f2] bg-white px-4 py-10">
      <div className="w-full max-w-[960px] text-center flex flex-col items-center gap-6">
        {/* Link Section */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-10">
          <a
            href="/terms-of-service"
            className="text-[#757575] text-base font-normal leading-normal hover:underline"
          >
            Terms of Service
          </a>
          <a
            href="/privacy-policy"
            className="text-[#757575] text-base font-normal leading-normal hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="/contact-us"
            className="text-[#757575] text-base font-normal leading-normal hover:underline"
          >
            Contact Us
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[#757575] text-base font-normal leading-normal">
          © {new Date().getFullYear()} Whispers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
