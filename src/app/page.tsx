'use client';

import Image from "next/image";
import React, { useState, useRef } from "react";
import { Analytics } from "@vercel/analytics/react"
import { portfolio, toppicks } from "./components/projects_json_data";
import Footer from "./components/footer";
import Header from "./components/header";
import Portfolio from "./sections/portfolioSection";
import TopPicks from "./sections/topPicksSection";
import ContactUs from "./sections/contactUsSection";
import GiveawayBanner from "./promos/banner";
import Partners from "./sections/partnersSection";
import Notification from './components/notify';

export default function Home() {

  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Add type for the ref
  const [notification, setNotification] = useState<{ message: string; type: 'error' | 'success' | 'info' } | null>(null);  // notification message

  const toggleMusic = () => {
    setNotification({ message: "We can't play music right now", type: "info" });

    // if (audioRef.current) {
    //   if (isPlaying) {
    //     audioRef.current.pause();
    //   } else {
    //     console.log("Playing bg music");
    //     // audioRef.current.play();
    //   }
    //   setIsPlaying(!isPlaying);
    // }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-5 pb-20 font-[family-name:var(--font-geist-sans)] scroll-smooth">
      <Analytics />
      {notification && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={() => setNotification(null)}
                />
            )}
      {/* Audio */}
      <audio ref={audioRef} src="/album/MeWellAI.mp3" autoPlay={false} loop />
      {/* Toggle Button */}
      <button
        onClick={toggleMusic}
        className="fixed top-32 right-5 z-40 bg-[var(--surface)] text-white p-2 rounded-full shadow-md hover:bg-[var(--tint)] transition"
        aria-label="Toggle Music"
      >
        <Image
          src="/essentials/note-music.svg"
          alt="Music Note Icon"
          width={24}
          height={24}
        />
      </button>
      {/* Header Section */}
      <Header />
      {/* Main Section */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Hero Section */}
        {/* background image, h1 text, button that scrolls next section, min-h-screeen should be text very bottom in the visible area */}
        <div
          className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative sm:p-20 p-8"
          style={{ backgroundImage: "url('/assets/back_drop.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Making AI Uncool Again
            </h1>
            <p className="text-lg md:text-xl text-[var(--text)] mb-8 px-0 lg:px-48">
              An open-source and AI-powered community that empowers developers, researchers, and creators to build the future together.
            </p>
            <button
              className="bg-[var(--button)] text-white md:px-24 px-12 py-3 rounded-lg text-lg font-bold hover:bg-[var(--primary)] transition"
              onClick={() =>
                document
                  .getElementById("toppicks")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Here <Image
                aria-hidden
                src="/essentials/arrow-left.svg"
                alt="Arrow left icon"
                width={18}
                height={18}
                className="inline w-[14px] h-[14px] ml-2"
              />
            </button>
          </div>
        </div>
        {/* Top Picks Section */}
        <TopPicks />
        {/* Portfolio Section */}
        <Portfolio />
        {/* Giveaway Section */}
        <GiveawayBanner />
        {/* Partners Section */}
        <Partners />
        {/* Community Section */}
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}
