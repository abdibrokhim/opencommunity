'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function AdsBanner() {

  return (
    <div className="w-full sm:p-20 p-8" id="giveawayy">
    <h2 className="text-3xl font-bold text-center mb-8">
        here could be your ad
    </h2>
    <h6 className="text-md font-bold text-center mb-8 text-[var(--text)]">
            contact us <a href="mailto:abdibrokhim@gmail.com" target="_blank" className="text-[var(--button)] hover:text-[var(--primary)] hover:underline">Ibrohim Abdivokhidov</a>
          </h6>
    <Image
    src="/assets/ads.png"
    alt="Giveaway Banner"
    width={500}
    height={300}
    className="mb-4 rounded w-full"
  />
    </div>
  );
}