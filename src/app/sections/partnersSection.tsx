'use client';

import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div className="w-full p-8 sm:p-20 bg-gray-100" id="partners">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Partners
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Partner 1 */}
        <a
          href="https://aimlapi.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <Image
            src="/partners/aimlapi_logo_big_vector.svg"
            alt="AI/ML API"
            width={200}
            height={100}
            className="object-contain"
          />
        </a>

        {/* Partner 2 */}
        <a
          href="https://imcook.in"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <Image
            src="/partners/iamstartup.png"
            alt="I AM STARTUP"
            width={100}
            height={100}
            className="object-contain"
          />
        </a>

        {/* Partner 3 */}
        <a
          href="https://paperai.pro"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <Image
            src="/partners/paperai-logo-icon.png"
            alt="Paper AI"
            width={150}
            height={100}
            className="object-contain"
          />
        </a>
        {/* Partner 4 */}
        <a
          href="https://comedai.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <Image
            src="/partners/comed_logo_black.png"
            alt="CoMed"
            width={150}
            height={100}
            className="object-contain"
          />
        </a>
      </div>
    </div>
  );
}