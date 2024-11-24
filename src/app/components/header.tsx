'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import './styles.css';
import GiveawayBanner from "../promos/banner";
import OverlayCard from "../promos/overlaycard";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowOverlay(false);
  };

//   if (!showOverlay) return null;


  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleGiveawayClick = () => {
    // Logic to call the OverlayCard component
    console.log("OverlayCard called!");
    setShowOverlay(true);
  };

  return (
    <>
      <header className="w-full flex flex-col justify-between items-center bg-[#111216] border-b-[0.1px] border-[#A1A2A5] sticky top-0 border-opacity-30 z-50">
        
        {/* Giveaway Section */}
        <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-2 z-50 overflow-hidden">
          <div
            className="flex whitespace-nowrap items-center animate-marquee cursor-pointer"
            onClick={handleGiveawayClick}
          >
            <p className="text-lg md:text-xl font-bold hover:underline px-4">
                🎁 Join our Giveaway 🎁
            </p>
          </div>
        </div>

        {showOverlay && <OverlayCard handleClose={handleClose} />}

        <div className="w-full flex justify-between items-center py-2 px-4 md:px-8">
          <div className="">
            <a
              className="flex justify-center items-center gap-2"
              href="/"
              rel="noopener noreferrer"
            >
              <Image
                objectFit="contain"
                src="/oc.png"
                alt="Open Community Logo"
                width={40}
                height={40}
                priority
              />
              <p className="text-2xl font-bold text-white">Open Community</p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row gap-6 justify-between items-center text-[#BBBCBE]">
            <button
              className="bg-[var(--button)] text-white md:px-8 px-8 py-2 rounded-lg text-md font-bold hover:bg-[var(--primary)] transition"
              onClick={() => {}}
            >
              Watch Trailer
            </button>
            <a
              className="hover:text-[#A1A2A5] transition"
              href="#toppicks"
              rel="noopener noreferrer"
            >
              Most Popular
            </a>
            <a
              className="hover:text-[#A1A2A5] transition"
              href="#portfolio"
              rel="noopener noreferrer"
            >
              Solution
            </a>
            <a
              className="hover:text-[#A1A2A5] transition"
              href="#contact"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden flex items-center hover:bg-[#A1A2A5] hover:bg-opacity-10 rounded-full p-3"
            onClick={toggleSidebar}
            aria-label="Open Sidebar"
          >
            <Image
              aria-hidden
              src="/essentials/menu.svg"
              alt="menu icon"
              width={22}
              height={22}
            />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full sm:w-[50%] w-full bg-[#1f2024] shadow-lg z-50 transform sm:border-l-[0.1px] sm:border-[#A1A2A5] sm:border-opacity-30 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}
        >
          {/* Sidebar Top Bar */}
          <div className="w-full bg-[#111216] px-4 py-2 flex justify-between items-center">
            <p className="text-lg font-bold text-[#ededed]">Hey, there!</p>
            <button
              onClick={toggleSidebar}
              aria-label="Close Sidebar"
              className="hover:bg-[#A1A2A5] hover:bg-opacity-10 rounded-full p-3"
            >
              <Image
                aria-hidden
                src="/essentials/close.svg"
                alt="close icon"
                width={22}
                height={22}
              />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="p-4 flex flex-col gap-1">
            <button
              className="bg-[var(--button)] text-white md:px-8 px-8 py-2 rounded-lg text-md font-bold hover:bg-[var(--primary)] transition"
              onClick={() => {}}
            >
              Watch Trailer
            </button>
            <a
              className="text-[#e5e5e6] hover:text-[#ffffff] transition hover:bg-[#BBBCBE] hover:bg-opacity-10 rounded-md p-3"
              href="#toppicks"
              rel="noopener noreferrer"
              onClick={toggleSidebar}
            >
              Most Popular
            </a>
            <a
              className="text-[#e5e5e6] hover:text-[#ffffff] transition hover:bg-[#BBBCBE] hover:bg-opacity-10 rounded-md p-3"
              href="#portfolio"
              rel="noopener noreferrer"
              onClick={toggleSidebar}
            >
              Solution
            </a>
            <a
              className="text-[#e5e5e6] hover:text-[#ffffff] transition hover:bg-[#BBBCBE] hover:bg-opacity-10 rounded-md p-3"
              href="#contact"
              rel="noopener noreferrer"
              onClick={toggleSidebar}
            >
              Contact Us
            </a>
            <GiveawayBanner />
          </div>
        </div>

        {/* Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </header>
    </>
  );
}
