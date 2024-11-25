'use client';

import Image from "next/image";
import React from "react";

const Album = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30 p-4 sm:p-8">
      <div className="relative bg-[#1f2024] rounded-md w-full max-w-5xl p-4 sm:p-6">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close Trailer"
          className="absolute top-2 right-2 hover:bg-[#A1A2A5] hover:bg-opacity-10 rounded-full p-3"
        >
          <Image
            aria-hidden
            src="/essentials/close.svg"
            alt="close icon"
            width={22}
            height={22}
          />
        </button>
        {/* Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
            We just Dropped 🐐
          </h2>
          <h6 className="text-sm sm:text-md font-bold text-center text-[var(--text)]">
            follow us{" "}
            <a
              href="https://x.com/xopencommunity"
              target="_blank"
              className="text-[var(--button)] hover:text-[var(--primary)] hover:underline"
            >
              Open Community
            </a>
          </h6>
          {/* Responsive Video */}
          <div className="relative w-full md:h-[540px] h-[360px]">
            <iframe
            width="100%" height="100%" 
              className="rounded-md"
              src="https://www.patreon.com/posts/open-community-116639418"
              title="I'm quitting... the game 🤧"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <h6 className="text-sm sm:text-md font-bold text-center text-[var(--text)]">
            All available now:{" "}
            <a
              href="https://www.patreon.com/collection/897243"
              target="_blank"
              className="text-[var(--orange)] hover:text-[var(--hover-orange)] hover:underline"
            >
              Get full access
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Album;
