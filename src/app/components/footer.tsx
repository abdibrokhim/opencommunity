'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function Footer() {

  return (
      <footer className="row-start-3 w-full space-y-8 md:space-y-0 flex flex-col md:flex-row justify-between items-center sm:p-20 p-8">
        <div className="invisible md:visible">
          <p className="text-sm text-center text-[var(--tint)]">
            © 2024 Open Community. All rights reserved.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap items-center justify-center">
          <a
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3"
              href="https://github.com/abdibrokhim?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/github-mark-white.svg"
                alt="github icon"
                width={22}
                height={22}
              />
          </a>
          <a
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3"
              href="https://discord.gg/nVtmDUN2sR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/discord.svg"
                alt="discord icon"
                width={22}
                height={22}
              />
            </a>
            <a
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3"
              href="https://linkedin.com/company/opencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/linkedin.svg"
                alt="linkedin icon"
                width={22}
                height={22}
              />
            </a>
            <a
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3"
              href="https://x.com/xopencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/x.svg"
                alt="x icon"
                width={22}
                height={22}
              />
            </a>
            <a
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3"
              href="https://instagram.com/theopencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/instagram.svg"
                alt="instagram icon"
                width={22}
                height={22}
              />
            </a>
            <a
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3"
              href="https://youtube.com/@theopencommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/socials/youtube.svg"
                alt="youtube icon"
                width={22}
                height={22}
              />
            </a>
        </div>
        <div className="md:hidden">
          <p className="text-sm text-center text-[var(--tint)]">
            © 2024 Open Community. All rights reserved.
          </p>
        </div>
      </footer>
  );
}