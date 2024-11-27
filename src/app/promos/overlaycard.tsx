import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const OverlayCard = ({ handleClose }: { handleClose: () => void }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40 p-8">
      <div className="relative bg-[#1f2024] rounded-md p-4">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close Sidebar"
          className="absolute top-2 left-2 hover:bg-[#A1A2A5] hover:bg-opacity-10 rounded-full p-3"
        >
          <Image
            aria-hidden
            src="/essentials/close.svg"
            alt="close icon"
            width={22}
            height={22}
          />
        </button>
        <div className="p-4">
    <h2 className="text-3xl font-bold text-center mb-8">
      🎉 Join our Giveaway 🎉
    </h2>
    <h6 className="text-md font-bold text-center mb-8 text-[var(--text)]">
            just follow us <a href="https://x.com/xopencommunity" target="_blank" className="text-[var(--button)] hover:text-[var(--primary)] hover:underline">Open Community</a>
          </h6>
    <Image
    src="/assets/giveaway-banner.png"
    alt="Giveaway Banner"
    width={500}
    height={300}
    className="mb-4 rounded w-full"
  />
    </div>
      </div>
    </div>
  );
};

export default OverlayCard;