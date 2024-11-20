'use client';

import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const portfolio = [
    {
      title: "CoMed",
      description: "an Open-source, AI-powered, and completely Autonomous Brain MRI analysis & diagnosis platform for doctors to help their patients.",
      ps: "",
      youtube: "https://youtu.be/-umYRToyuQ4",
      tutorial: "",
      github: "https://github.com/abdibrokhim/comed-web",
      demo: "https://comedai.vercel.app/"
    },
    {
      title: "PrepAlly",
      description: "an Open-source, AI-powered coding prep platform, offering real-time feedback, voice-guided insights, and secure, interactive practice.",
      ps: "",
      youtube: "https://youtu.be/wyp8tRTLLfQ",
      tutorial: "https://github.com/abdibrokhim/ai-coding-interviewer/blob/main/TUTORIAL.md",
      github: "https://github.com/abdibrokhim/ai-coding-interviewer",
      demo: ""
    },
    {
      title: "HumanAIze",
      description: "Transform your AI-generated content into natural, human-like text with the ultimate HumanAIze AI text tool.",
      ps: "",
      youtube: "https://youtu.be/CLrENdjIe58",
      tutorial: "https://dev.to/abdibrokhim/step-by-step-tutorial-on-building-an-ai-text-humanizer-with-aiml-api-and-integration-with-clerk-auth-and-deploying-to-vercel-moj",
      github: "https://github.com/abdibrokhim/humanaize",
      demo: "https://humanaize.vercel.app/"
    },
    {
      title: "PaperAI",
      description: "an Open-source, AI-powered research companion that streamlines literature reviews, enhances real-time collaboration, and offers a smart voice assistant to revolutionize your research experience.",
      ps: "",
      youtube: "https://youtu.be/E7d1rLyXXVE",
      tutorial: "",
      github: "https://github.com/abdibrokhim/paper-ai-voice-assistant",
      demo: ""
    },
    {
      title: "AI Sticker Maker",
      description: "Generate AI stickers with a single prompt at a time. The coolest AI Sticker Maker in the market.",
      ps: "",
      youtube: "",
      tutorial: "https://dev.to/abdibrokhim/building-an-ai-sticker-maker-platform-with-aiml-api-nextjs-react-and-tailwind-css-using-openai-gpt-4o-and-dalle-3-models-46ip",
      github: "https://github.com/abdibrokhim/ai-sticker-maker",
      demo: "https://ai-sticker-maker.vercel.app"
    },
    {
      title: "NextGen o1",
      description: "Overcomes the OpenAI o1 model's limitations by enabling browsing, file uploads, and system messages. Break free from restrictions and experience real-time data access, advanced workflows, and task automation with NextGen o1.",
      ps: "",
      youtube: "https://youtu.be/_wTaMLL4by0",
      tutorial: "",
      github: "https://github.com/abdibrokhim/nextgen-o1",
      demo: ""
    },
    {
      title: "MonkeytypeAI",
      description: "A minimalistic and customizable AI-powered typing test. Adjust user-configurable features such as themes, typing contents and more by simply generating using AI.",
      ps: "",
      youtube: "https://youtu.be/SGibxV1YHDo",
      tutorial: "",
      github: "https://github.com/abdibrokhim/monkeytype-ai/",
      demo: "https://monkeytypeai.vercel.app/"
    },
    {
      title: "LangflowAI",
      description: "We automate Langflow with AI. No more drag and drop. Simply dictate and AI gets the work done!",
      ps: "",
      youtube: "https://youtu.be/d9eJJHAp8v8",
      tutorial: "",
      github: "https://github.com/abdibrokhim/langflow",
      demo: "https://langflow-4fi8.onrender.com/"
    },
    {
      title: "lovido",
      description: "Free and open-source platform for downloading Loom videos. It's designed to help free Loom account users who are unable to download their recordings directly through the Loom platform.",
      ps: "",
      youtube: "",
      tutorial: "",
      github: "https://github.com/abdibrokhim/loom-dl-web",
      demo: "https://lovido.lol"
    },
    {
      title: "StoryAI",
      description: "StoryAI presents climate change data in a story format that can be generated according to the user's interests and level of academic knowledge in the field. Never get lost in the data again - StoryAI not only sorts through the data to make it more understandable and interactive for you, but also provides the context for various climate change phenomena. There is no doubt that climate change is happening, and we think that people of all ages and educational backgrounds should be aware of it and get ready to act: to stand with Earth and the sustainable future of humanity. StoryAI presents climate change data in a story format that can be generated according to the user's interests and level of academic knowledge in the field.",
      ps: "",
      youtube: "https://youtu.be/-IPLUUTiZak",
      tutorial: "",
      github: "https://github.com/abdibrokhim/story-ai-chrome-extension",
      demo: "https://chatgpt.com/g/g-PRa3ZXK36-story-ai"
    },
    {
      title: "AI Magic Flashcards",
      description: "Generate flashcards simple invoke your imagination. Guess others flashcards and earn points. Exchange points to extra flashcard generations or cash them out (soon).",
      ps: "",
      youtube: "https://youtu.be/1NcGAoXCouM",
      tutorial: "",
      github: "https://github.com/abdibrokhim/AI-Magic-FlashCards-with-Stripe",
      demo: "https://ai-magic-flashcards.vercel.app/"
    },
    {
      title: "Chat With PDF",
      description: "",
      ps: "",
      youtube: "https://youtu.be/AAy8ejtgBh4",
      tutorial: "",
      github: "https://github.com/abdibrokhim/Chat-With-PDF-NextJS-Langchain-Pinecone-OpenAI",
      demo: "https://crunchgpt.vercel.app/"
    },
    {
      title: "Harmony Quest",
      description: "Harmony Quest is an engaging multiplayer game that combines creativity, guessing, and social interaction. Players can generate images and audio, then challenge their friends to guess what they are.",
      ps: "",
      youtube: "https://youtu.be/6opWWYy7yos",
      tutorial: "",
      github: "https://github.com/abdibrokhim/aiio",
      demo: ""
    },
    {
      title: "Harmony Quest",
      description: "Harmony Quest is an engaging multiplayer game that combines creativity, guessing, and social interaction. Players can generate images and audio, then challenge their friends to guess what they are.",
      ps: "",
      youtube: "https://youtu.be/6opWWYy7yos",
      tutorial: "",
      github: "https://github.com/abdibrokhim/aiio",
      demo: ""
    },
    {
      title: "EcoShopAI",
      description: "Hey, there! I help you make eco-friendly purchasing decisions with minimal environmental impact.",
      ps: "",
      youtube: "https://youtu.be/8GTJseYt7TA",
      tutorial: "",
      github: "",
      demo: "https://chatgpt.com/g/g-rTTibE8p9-ecoshop-ai"
    },
    {
      title: "EcoShopAI",
      description: "Hey, there! I help you make eco-friendly purchasing decisions with minimal environmental impact.",
      ps: "",
      youtube: "https://youtu.be/8GTJseYt7TA",
      tutorial: "",
      github: "",
      demo: "https://chatgpt.com/g/g-rTTibE8p9-ecoshop-ai"
    },
    {
      title: "MeWellAI",
      description: "",
      ps: "",
      youtube: "https://youtu.be/eTCg3pfm69o",
      tutorial: "",
      github: "https://github.com/abdibrokhim/mentalwellness",
      demo: ""
    },
  ]

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-5 pb-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header Section */}
      <header className="w-full flex justify-between items-center bg-[#111216] border-b-[0.1px] border-[#A1A2A5] sticky top-0 py-2 px-4 md:px-8 border-opacity-50 z-50">
        <div>
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
          <a
            className="hover:text-[#A1A2A5] transition"
            href="#toppicks"
            rel="noopener noreferrer"
          >
            Top Picks
          </a>
          <a
            className="hover:text-[#A1A2A5] transition"
            href="#portfolio"
            rel="noopener noreferrer"
          >
            Portfolio
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
            src="/menu.svg"
            alt="menu icon"
            width={22}
            height={22}
          />
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full sm:w-[50%] w-full bg-[#1f2024] shadow-lg z-50 transform sm:border-l-[0.1px] sm:border-[#A1A2A5] sm:border-opacity-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Sidebar Top Bar */}
        <div className="w-full bg-[#111216] px-4 py-2 flex justify-between items-center">
          <p className="text-lg font-bold text-[#ededed]">Hey, there!</p>
          <button 
            onClick={toggleSidebar} 
            aria-label="Close Sidebar" 
            className="hover:bg-[#A1A2A5] hover:bg-opacity-10 rounded-full p-3">
            <Image
              aria-hidden
              src="/close.svg"
              alt="close icon"
              width={22}
              height={22}
            />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4 flex flex-col gap-1">
          <a
            className="text-[#e5e5e6] hover:text-[#ffffff] transition hover:bg-[#BBBCBE] hover:bg-opacity-10 rounded-md p-3"
            href="#toppicks"
            rel="noopener noreferrer"
            onClick={toggleSidebar}
          >
            Top Picks
          </a>
          <a
            className="text-[#e5e5e6] hover:text-[#ffffff] transition hover:bg-[#BBBCBE] hover:bg-opacity-10 rounded-md p-3"
            href="#portfolio"
            rel="noopener noreferrer"
            onClick={toggleSidebar}
          >
            Portfolio
          </a>
          <a
            className="text-[#e5e5e6] hover:text-[#ffffff] transition hover:bg-[#BBBCBE] hover:bg-opacity-10 rounded-md p-3"
            href="#contact"
            rel="noopener noreferrer"
            onClick={toggleSidebar}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* Hero Section */}
        {/* background image, h1 text, button that scrolls next section, min-h-screeen should be text very bottom in the visible area */}
        <div
          className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative sm:p-20 p-8"
          style={{ backgroundImage: "url('/back_drop.png')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Making AI Uncool Again
            </h1>
            <p className="text-lg md:text-xl text-[var(--text)] mb-8 px-0 lg:px-48">
              An open-source and AI-powered community that empowers developers, researchers, and creators to build the future together.
            </p>
            <button
              className="bg-[var(--button)] text-white px-24 py-3 rounded-lg text-lg font-bold hover:bg-[var(--primary)] transition"
              onClick={() =>
                document
                  .getElementById("toppicks")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Here
            </button>
          </div>
        </div>
        {/* Top Picks Section */}
        <div className="my-16 w-full sm:p-20 p-8" id="toppicks">
          <h2 className="text-3xl font-bold text-center mb-8">
            Top Picks
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold mb-4">Discord</h3>
              <p className="text-lg mb-4">
              Join our Discord community for real-time discussions, insights, and support.
              </p>
              <a href="https://github.com/abdibrokhim/paper-ai-voice-assistant" 
                className="text-[#335fff] hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join our Discord
              </a>
            </div>
            <div className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold mb-4">X</h3>
              <p className="text-lg mb-4">
                Follow us on X for updates, insights, and more.
              </p>
              <a href="https://discord.gg/nVtmDUN2sR" 
                className="text-[#335fff] hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Follow us on X
              </a>
            </div>
            <div className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold mb-4">LinkedIn</h3>
              <p className="text-lg mb-4">
                Follow us on LinkedIn for updates, insights, and more. Let&apos;s connect!
              </p>
              <a href="https://www.linkedin.com/company/paperai/" 
                className="text-[#335fff] hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Follow us on LinkedIn
              </a>
            </div>
          </div>
        </div>
        {/* Portfolio Section */}
        <div className="my-16 w-full sm:p-20 p-8" id="portfolio">
          <h2 className="text-3xl font-bold text-center mb-8">
            Portfolio
          </h2>
          <h6 className="text-md font-bold text-center mb-8 text-[var(--text)]">
            An open-source and AI-powered...
          </h6>
          <div className="flex flex-col md:flex-row gap-8 border border-[var(--primary)] p-16">
            <div className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold mb-4">Discord</h3>
              <p className="text-lg mb-4 text-[var(--text)]">
              Join our Discord community for real-time discussions, insights, and support.
              </p>
              <a href="https://github.com/abdibrokhim/paper-ai-voice-assistant" 
                className="text-[#335fff] hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join our Discord
              </a>
            </div>
          </div>
        </div>
        {/* Community Section */}
        <div className="my-16 w-full sm:p-20 p-8" id="contact">
          <h2 className="text-3xl font-bold text-center mb-8">
          Say Hello!
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold mb-4">Discord</h3>
              <p className="text-lg mb-4 text-[var(--text)]">
              Join our Discord community for real-time discussions, insights, and support.
              </p>
              <a href="https://github.com/abdibrokhim/paper-ai-voice-assistant" 
                className="text-[#335fff] hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Join our Discord
              </a>
            </div>
            <div className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold mb-4">X</h3>
              <p className="text-lg mb-4 text-[var(--text)]">
                Follow us on X for updates, insights, and more.
              </p>
              <a href="https://discord.gg/nVtmDUN2sR" 
                className="text-[#335fff] hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Follow us on X
              </a>
            </div>
            <div className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1">
              <h3 className="text-xl font-bold mb-4">LinkedIn</h3>
              <p className="text-lg mb-4 text-[var(--text)]">
                Follow us on LinkedIn for updates, insights, and more. Let&apos;s connect!
              </p>
              <a href="https://www.linkedin.com/company/paperai/" 
                className="text-[#335fff] hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Follow us on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="row-start-3 w-full space-y-8 md:space-y-0 flex flex-col md:flex-row justify-between items-center sm:p-20 p-8">
        <div className="invisible md:visible">
          <p className="text-sm text-center text-[var(--tint)]">
            © 2024 Open Community. All rights reserved.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap items-center justify-center">
          <a
              className="flex items-center hover:underline hover:underline-offset-4 hover:bg-[#335fff] hover:bg-opacity-30 rounded-full p-3"
              href=""
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
              href=""
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
              href=""
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
              href=""
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
              href=""
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
              href=""
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
    </div>
  );
}
