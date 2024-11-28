'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function Meme() {

  return (
    <div className="w-full sm:p-20 p-8" id="meme">
    <h1 className="text-3xl font-bold text-center mb-8">
        Meme
    </h1>
    <h2 className="text-2xl font-bold text-center mb-8 line-through">
      🎉 Join our Giveaway 🎉
    </h2>
    <h6 className="text-md font-bold text-center mb-8 text-[var(--text)] line-through">
            more on X here <a aria-label="Open Community" href="https://x.com/xopencommunity" target="_blank" className="text-[var(--button)] hover:text-[var(--primary)] hover:underline">Open Community</a>
          </h6>
    <Image
    src="/assets/giveaway-banner.png"
    alt="Giveaway Banner"
    width={500}
    height={300}
    className="mb-4 rounded w-full"
  />
      <h2 className="text-2xl font-bold text-center my-8">
      No Giveaways for now 😂
    </h2>
      <h6 className="text-md font-bold text-center mb-8 text-[var(--text)]">
      <a 
        aria-label="imcookin" 
        href="https://imcook.in" 
        target="_blank"
        rel="noopener noreferrer"
        className="">imcook.in</a> smth even cooler!
          </h6>
    <Image
    src="/assets/no-giveaway.png"
    alt="Giveaway Banner"
    width={500}
    height={300}
    className="mb-4 rounded w-full"
  />
    </div>
  );
}