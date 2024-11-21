'use client';

import Image from "next/image";
import React, { useState } from "react";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  const portfolio = [
    {
      cover: "/portfolio/comed.png",
      title: "CoMed",
      description: "An AI platform transforming Brain MRI diagnostics to be easier, faster, and more accessible, especially in underserved rural areas. By integrating advanced AI into hospital workflows, we boost diagnostic accuracy from 84% to 95% and reduce waiting times from days to 15-30 minutes. Targeting hospitals and clinics lacking advanced diagnostics and radiologists, we aim to bridge critical healthcare gaps.",
      ps: "",
      youtube: "https://youtu.be/-umYRToyuQ4",
      tutorial: "",
      github: "https://github.com/abdibrokhim/comed-web",
      demo: "https://comedai.vercel.app/"
    },
    {
      cover: "/portfolio/paperai.png",
      title: "PaperAI",
      description: "Researchers and scholars often face challenges like information overload and time-consuming literature review. Aside from making personal notes, Paper Ai enables users to annotate, discuss collaboratively and ask AI for quick summary on complex points across a piece of article or research paper. It fosters a shared learning ecosystem and encourages collaboration across disciplines and geographic boundaries.",
      ps: "",
      youtube: "https://youtu.be/E7d1rLyXXVE",
      tutorial: "",
      github: "https://github.com/abdibrokhim/paper-ai-voice-assistant",
      demo: "https://paperai.pro"
    },
    {
      cover: "/portfolio/prepally.png",
      title: "PrepAlly",
      description: "Current tools offer practice but fall short of providing the interactive, AI-driven insights candidates need to feel truly prepared. Interviews are still notoriously stressful, leaving candidates feeling unprepared despite available resources. PrepAlly changes that by delivering real-time feedback and personalized insights, empowering candidates with the confidence and readiness to ace their interviews.",
      ps: "",
      youtube: "https://youtu.be/wyp8tRTLLfQ",
      tutorial: "https://github.com/abdibrokhim/ai-coding-interviewer/blob/main/TUTORIAL.md",
      github: "https://github.com/abdibrokhim/ai-coding-interviewer",
      demo: ""
    },
    {
      cover: "/portfolio/humanaize.png",
      title: "HumanAIze",
      description: "Transform your AI-generated content into natural, human-like text with the ultimate HumanAIze AI text tool. This ai-to-human text converter effortlessly converts output from ChatGPT, Bard, Jasper, Grammarly, GPT4, and other AI text generators into text indistinguishable from human writing. Achieve 100% originality and enhance your content creation with the best HumanAIze AI solution available.",
      ps: "",
      youtube: "https://youtu.be/CLrENdjIe58",
      tutorial: "https://dev.to/abdibrokhim/step-by-step-tutorial-on-building-an-ai-text-humanizer-with-aiml-api-and-integration-with-clerk-auth-and-deploying-to-vercel-moj",
      github: "https://github.com/abdibrokhim/humanaize",
      demo: "https://humanaize.vercel.app/"
    },
    {
      cover: "/portfolio/aistickermaker.png",
      title: "AI Sticker Maker",
      description: "Our AI sticker generator simplifies the sticker design process. In just seconds, you can effortlessly transform your ideas into custom stickers. Just enter a short description of your sticker design idea, and our AI will automatically generate multiple stickers that match your vision. No design skills are needed at all. Get high-quality, print-ready stickers effortlessly with AI.",
      ps: "",
      youtube: "",
      tutorial: "https://dev.to/abdibrokhim/building-an-ai-sticker-maker-platform-with-aiml-api-nextjs-react-and-tailwind-css-using-openai-gpt-4o-and-dalle-3-models-46ip",
      github: "https://github.com/abdibrokhim/ai-sticker-maker",
      demo: "https://ai-sticker-maker.vercel.app"
    },
    {
      cover: "/portfolio/nextgeno1.png",
      title: "NextGen o1",
      description: "NextGen o1 overcomes the limitations of the OpenAI o1 model by adding critical functionalities. It introduces seamless browsing support, file uploads, and system messages, transforming the model into a powerful assistant capable of handling real-world tasks. Whether accessing real-time data, interacting with documents, or automating workflows, NextGen o1 delivers an unrestricted AI experience.",
      ps: "",
      youtube: "https://youtu.be/_wTaMLL4by0",
      tutorial: "",
      github: "https://github.com/abdibrokhim/nextgen-o1",
      demo: ""
    },
    {
      cover: "/portfolio/monkeytypeai.png",
      title: "MonkeytypeAI",
      description: "A minimalistic and customizable AI-powered typing test. Adjust user-configurable features such as themes, typing contents and more by simply generating using AI. When a user makes a typing mistake, the app instantly regenerates the current word, creating a new, correct English word that continues from the mistaken letter. This means users no longer need to stop and correct errors manually, allowing for a smoother and more efficient typing process.",
      ps: "",
      youtube: "https://youtu.be/SGibxV1YHDo",
      tutorial: "",
      github: "https://github.com/abdibrokhim/monkeytype-ai/",
      demo: "https://monkeytypeai.vercel.app/"
    },
    {
      cover: "/portfolio/langflowai.png",
      title: "LangflowAI",
      description: "We automate Langflow with AI. No more drag and drop. Simply dictate and AI gets the work done! PS: Langflow is a low-code app builder for RAG and multi-agent AI applications. It's Python-based and agnostic to any model, API, or database. ",
      ps: "",
      youtube: "https://youtu.be/d9eJJHAp8v8",
      tutorial: "",
      github: "https://github.com/abdibrokhim/langflow",
      demo: "https://langflow-4fi8.onrender.com/"
    },
    {
      cover: "/portfolio/lovido.png",
      title: "lovido",
      description: "Free and open-source platform for downloading Loom videos. It's designed to help free Loom account users who are unable to download their recordings directly through the Loom platform.",
      ps: "",
      youtube: "",
      tutorial: "",
      github: "https://github.com/abdibrokhim/loom-dl-web",
      demo: "https://lovido.lol"
    },
    {
      cover: "/portfolio/storyai.png",
      title: "StoryAI",
      description: "StoryAI presents climate change data in a story format that can be generated according to the user's interests and level of academic knowledge in the field.",
      ps: "",
      youtube: "https://youtu.be/-IPLUUTiZak",
      tutorial: "",
      github: "https://github.com/abdibrokhim/story-ai-chrome-extension",
      demo: "https://chatgpt.com/g/g-PRa3ZXK36-story-ai"
    },
    {
      cover: "/portfolio/ecoshopai.png",
      title: "EcoShopAI",
      description: "Your personal shopping assistant for a greener lifestyle. It helps you find products that are not only good for you but also kind to the planet. Simply tell it what you're looking for, and it suggests eco-friendly alternatives with less environmental impact. Whether you're shopping for clothes, gadgets, or groceries, EcoShop AI provides real-time recommendations and even shows you how much you're reducing your carbon footprint with each choice. It's like having an eco-expert in your pocket!",
      ps: "",
      youtube: "https://youtu.be/8GTJseYt7TA",
      tutorial: "",
      github: "",
      demo: "https://chatgpt.com/g/g-rTTibE8p9-ecoshop-ai"
    },
    {
      cover: "/portfolio/aimagicflashcards.png",
      title: "AI Magic Flashcards",
      description: "Generate flashcards simple invoke your imagination. Guess others flashcards and earn points. Exchange points to extra flashcard generations or cash them out (soon).",
      ps: "",
      youtube: "https://youtu.be/1NcGAoXCouM",
      tutorial: "",
      github: "https://github.com/abdibrokhim/AI-Magic-FlashCards-with-Stripe",
      demo: "https://ai-magic-flashcards.vercel.app/"
    },
    {
      cover: "/portfolio/chatwithpdf.png",
      title: "Chat With PDF",
      description: "Join millions of students, researchers and professionals to instantly answer questions and understand research with AI.",
      ps: "",
      youtube: "https://youtu.be/AAy8ejtgBh4",
      tutorial: "",
      github: "https://github.com/abdibrokhim/Chat-With-PDF-NextJS-Langchain-Pinecone-OpenAI",
      demo: "https://crunchgpt.vercel.app/"
    },
    {
      cover: "/portfolio/harmonyquest.png",
      title: "Harmony Quest",
      description: "Harmony Quest is an engaging multiplayer game that combines creativity, guessing, and social interaction. Players can generate images and audio, then challenge their friends to guess what they are.",
      ps: "",
      youtube: "https://youtu.be/6opWWYy7yos",
      tutorial: "",
      github: "https://github.com/abdibrokhim/aiio",
      demo: ""
    },
    {
      cover: "/portfolio/mentalwellness.png",
      title: "MeWellAI",
      description: "MeWellAI is an AI-powered mobile application designed to revolutionize mental wellness support by combining the familiarity of social media with personalized mental health assistance. By leveraging specialized AI \"Agents\" for specific mental health areas, MeWellAI provides users with accessible, engaging, and tailored support to improve their overall well-being.",
      ps: "",
      youtube: "https://youtu.be/eTCg3pfm69o",
      tutorial: "",
      github: "https://github.com/abdibrokhim/mentalwellness",
      demo: ""
    },
  ]

  const toppicks = [
    {
      cover: "/portfolio/comed.png",
      title: "CoMed",
      description: "An AI platform transforming Brain MRI diagnostics to be easier, faster, and more accessible, especially in underserved rural areas. By integrating advanced AI into hospital workflows, we boost diagnostic accuracy from 84% to 95% and reduce waiting times from days to 15-30 minutes. Targeting hospitals and clinics lacking advanced diagnostics and radiologists, we aim to bridge critical healthcare gaps.",
      ps: "",
      youtube: "https://youtu.be/-umYRToyuQ4",
      tutorial: "",
      github: "https://github.com/abdibrokhim/comed-web",
      demo: "https://comedai.vercel.app/"
    },
    {
      cover: "/portfolio/paperai.png",
      title: "PaperAI",
      description: "Researchers and scholars often face challenges like information overload and time-consuming literature review. Aside from making personal notes, Paper Ai enables users to annotate, discuss collaboratively and ask AI for quick summary on complex points across a piece of article or research paper. It fosters a shared learning ecosystem and encourages collaboration across disciplines and geographic boundaries.",
      ps: "",
      youtube: "https://youtu.be/E7d1rLyXXVE",
      tutorial: "",
      github: "https://github.com/abdibrokhim/paper-ai-voice-assistant",
      demo: "https://paperai.pro"
    },
    {
      cover: "/portfolio/prepally.png",
      title: "PrepAlly",
      description: "Current tools offer practice but fall short of providing the interactive, AI-driven insights candidates need to feel truly prepared. Interviews are still notoriously stressful, leaving candidates feeling unprepared despite available resources. PrepAlly changes that by delivering real-time feedback and personalized insights, empowering candidates with the confidence and readiness to ace their interviews.",
      ps: "",
      youtube: "https://youtu.be/wyp8tRTLLfQ",
      tutorial: "https://github.com/abdibrokhim/ai-coding-interviewer/blob/main/TUTORIAL.md",
      github: "https://github.com/abdibrokhim/ai-coding-interviewer",
      demo: ""
    },
  ]

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pt-5 pb-20 font-[family-name:var(--font-geist-sans)]">
      <Analytics />
      {/* Header Section */}
      <header className="w-full flex justify-between items-center bg-[#111216] border-b-[0.1px] border-[#A1A2A5] sticky top-0 py-2 px-4 md:px-8 border-opacity-30 z-50">
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
      </header>

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
            className="hover:bg-[#A1A2A5] hover:bg-opacity-10 rounded-full p-3">
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
              className="bg-[var(--button)] text-white px-24 py-3 rounded-lg text-lg font-bold hover:bg-[var(--primary)] transition"
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
        <div className="w-full sm:p-20 p-8" id="toppicks">
          <h2 className="text-3xl font-bold text-center mb-8">
            Most Popular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {toppicks.map((project, index) => (
              <div
                key={index}
                className="bg-[var(--tertiary)] p-6 rounded-lg shadow-lg flex-1"
              >
                {/* Display cover image if available */}
                {project.cover && (
                  <Image
                    src="/assets/intro.png"
                    alt={project.title}
                    width={500}
                    height={300}
                    className="mb-4 rounded w-full"
                  />
                )}
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-md md:text-lg mb-4 text-[var(--text)]">
                  {project.description}
                </p>
                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.youtube && (
                    <a
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
        {/* Portfolio Section */}
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
                {/* Display cover image if available */}
                {project.cover && (
                  <Image
                    src="/assets/intro.png"
                    alt={project.title}
                    width={500}
                    height={300}
                    className="mb-4 rounded w-full"
                  />
                )}
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <p className="text-md md:text-lg mb-4 text-[var(--text)]">
                  {project.description}
                </p>
                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.youtube && (
                    <a
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
        {/* Community Section */}
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
                <a href="https://x.com/xopencommunity" 
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
                <a href="https://www.linkedin.com/company/opencommunity/" 
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
                <a href="https://topmate.io/abdibrokhim/1291447" 
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
    </div>
  );
}
