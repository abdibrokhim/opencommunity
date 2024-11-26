'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function ContactUs() {
return (
<div className="w-full sm:p-20 p-8" id="contact">
          <h2 className="text-3xl font-bold text-center mb-8">
          Say Hello!
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold mb-4">X (Twitter)</h3>
              <p className="text-lg mb-4 text-[var(--text)]">
                Follow us on X for updates, insights, and more.
              </p>
              <div
                className="flex flex-row gap-2 bg-[var(--button)] text-white w-full items-center justify-center py-2 rounded-lg text-md font-bold hover:bg-[var(--primary)] transition cursor-pointer">
                <a 
                aria-label="Open Community on X"
                href="https://x.com/xopencommunity" 
                  className="text-[#ffffff] hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Follow us on X
                </a>
                <Image
                  aria-hidden
                  src="/essentials/arrow-top.svg"
                  alt="Demo icon"
                  width={22}
                  height={22}
                  className="inline"
                />
              </div>
            </div>
            <div className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold mb-4">LinkedIn</h3>
              <p className="text-lg mb-4 text-[var(--text)]">
                Follow us on LinkedIn for updates, insights, and more. Let&apos;s connect!
              </p>
              <div
                className="flex flex-row gap-2 bg-[var(--button)] text-white w-full items-center justify-center py-2 rounded-lg text-md font-bold hover:bg-[var(--primary)] transition cursor-pointer">
                <a 
                aria-label="Open Community on LinkedIn"
                href="https://www.linkedin.com/company/opencommunity/" 
                  className="text-[#ffffff] hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Follow us on LinkedIn
                </a>
                <Image
                  aria-hidden
                  src="/essentials/arrow-top.svg"
                  alt="Demo icon"
                  width={22}
                  height={22}
                  className="inline"
                />
              </div>
            </div>
            <div className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold mb-4">Book a Call</h3>
              <p className="text-lg mb-4 text-[var(--text)]">
                Book a call with us to discuss your project, partnership, or any other inquiries.
              </p>
              <div
                className="flex flex-row gap-2 bg-[var(--button)] text-white w-full items-center justify-center py-2 rounded-lg text-md font-bold hover:bg-[var(--primary)] transition cursor-pointer">
                <a 
                aria-label="Book a Call"
                href="https://topmate.io/abdibrokhim/1291447" 
                  className="text-[#ffffff] hover:underline"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book a Call
                </a>
                <Image
                  aria-hidden
                  src="/essentials/arrow-top.svg"
                  alt="Demo icon"
                  width={22}
                  height={22}
                  className="inline"
                />
              </div>
            </div>
          </div>
        </div>
        );
    }