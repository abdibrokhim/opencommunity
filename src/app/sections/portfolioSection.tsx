'use client';

import Image from "next/image";
import React, { useState } from "react";
import { portfolio, toppicks } from "../components/projects_json_data";

export default function Portfolio() {

  return (
        <div className="w-full sm:p-20 p-8" id="portfolio">
          <h2 className="text-3xl font-bold text-center mb-8">
            Solution
          </h2>
          <h6 className="text-md font-bold text-center mb-8 text-[var(--text)]">
            An open-source and AI-powered...
          </h6>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1"
              >
                {project.youtube ? (
                <div className="relative w-full md:h-[540px] h-[360px]">
            <iframe
            width="100%" height="100%" 
              className="rounded-md"
              src={project.youtubeEmbed}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
                ) :
                                project.cover && (
                  <Image
                    src="/assets/ads.png"
                    alt={project.title}
                    width={500}
                    height={300}
                    className="my-4 rounded w-full"
                  />
                )
              }
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-md md:text-lg mb-4 text-[var(--text)]">
                  {project.description}
                </p>
                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.youtube && (
                    <a
                      aria-label="Watch on YouTube"
                      className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3 group"
                      href={project.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        aria-hidden
                        src="/socials/youtube.svg"
                        alt="YouTube icon"
                        width={22}
                        height={22}
                      />
                      <span className="hidden group-hover:inline ml-2">
                        Watch on YouTube
                      </span>
                    </a>
                  )}
                  {project.tutorial && (
                    <a
                      aria-label="Build from Scratch"
                      className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3 group"
                      href={project.tutorial}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        aria-hidden
                        src="/essentials/file.svg"
                        alt="Tutorial icon"
                        width={22}
                        height={22}
                      />
                      <span className="hidden group-hover:inline ml-2">
                        Build from Scratch
                      </span>
                    </a>
                  )}
                  {project.github && (
                    <a
                      aria-label="View on GitHub"
                      className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3 group"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        aria-hidden
                        src="/socials/github-mark-white.svg"
                        alt="GitHub icon"
                        width={22}
                        height={22}
                      />
                      <span className="hidden group-hover:inline ml-2">
                        View on GitHub
                      </span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      aria-label="Live Demo"
                      className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3 group"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        aria-hidden
                        src="/essentials/globe.svg"
                        alt="Demo icon"
                        width={22}
                        height={22}
                      />
                      <span className="hidden group-hover:inline ml-2">
                        Live Demo
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
  );
}
