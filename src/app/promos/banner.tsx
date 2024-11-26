'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function GiveawayBanner() {

  return (
    <div className="w-full sm:p-20 p-8" id="giveawayy">
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
  );
}