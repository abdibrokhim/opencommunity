'use client';

import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from 'next/navigation'
import Image from "next/image";
import './components/pages.css';


export default function Home() {
  const router = useRouter()

  const [loading, setLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [humanizedTextWordCount, setHumanizedTextWordCount] = useState(0);
  const [text, setText] = useState('');
  const [humanizedText, setHumanizedText] = useState('');
  const [toggleCopy, setToggleCopy] = useState(false);
  const [isUsedOneTime, setIsUsedOneTime] = useState(false);

  useEffect(() => {
    const usedOneTime = localStorage.getItem('isUsedOneTime') === 'true';
    setIsUsedOneTime(usedOneTime);
  }, []);

  const humanaizeAiText = async (aiText: string) => {
    console.log('Sending POST request /api/humanaize');
    try {
      const response = await fetch('/api/humanaize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ aiText }),
      });

      if (!response.ok) {
        // throw new Error('API request failed');
        console.log('API request failed');
      }

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log('An error occurred while fetching the reply.');
      console.error('Error:', error);
      // alert('An error occurred while fetching the reply.');
      // return 'No response available';
      // send request to /api/gpt
      console.log('Trying GPT...');
      return tryGpt(aiText);
    } finally {
      console.log('POST request /api/humanaize completed');
    }
  };
  
  const tryGpt = async (aiText: string) => {
    console.log('Sending POST request /api/gpt');
    try {
      const response = await fetch('/api/gpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ aiText }),
      });

      if (!response.ok) {
        // throw new Error('API request failed');
        console.log('API request failed');
      }

      const data = await response.json();
      return data.message;
    } catch (error) {
      console.log('An error occurred while fetching the reply.');
      console.error('Error:', error);
      alert('An error occurred while fetching the reply.');
      return 'No response available';
    } finally {
      console.log('POST request /api/gpt completed');
    }
  };
  
  const handleHumanize = () => {

    console.log('Humanizing...');
    setLoading(true);
    humanaizeAiText(text)
      .then((humanized) => {
        setHumanizedText(humanized);
        const count = humanized.trim() === '' ? 0 : humanized.trim().split(/\s+/).length;
        setHumanizedTextWordCount(count);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const count = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    setWordCount(count);
  }, [text]);

  const loader = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <circle cx={4} cy={12} r={3} fill="currentColor">
        <animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3" />
      </circle>
      <circle cx={12} cy={12} r={3} fill="currentColor">
        <animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3" />
      </circle>
      <circle cx={20} cy={12} r={3} fill="currentColor">
        <animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3" />
      </circle>
    </svg>
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-[var(--bg-a)] items-center justify-items-center min-h-screen pb-8 gap-8 p-4 font-[family-name:var(--font-geist-sans)]">
      <Analytics />
      <button
        className={`absolute top-6 left-6 text-white flex items-center justify-center gap-2 text-sm sm:text-base`}
        onClick={() => router.push('https://theopencommunity.co')}
      >
        {`<- Back`}
      </button>
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-7xl">
        <div className="flex flex-col gap-4 items-center justify-center px-6 md:px-12 lg:px-48 text-center">
          <h1 className="text-[var(--text-a)] text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="italic font-black">HumanAIze </span>AI text
          </h1>
          <h2 className="font-bold text-[var(--text-b)] text-sm sm:text-base md:text-lg lg:text-xl">
            HumanAIze AI text with the smartest AI humanizer
          </h2>
          <p className="text-[var(--text-c)] text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Transform your AI-generated content into natural, human-like text with the ultimate HumanAIze AI text tool. This ai-to-human text converter effortlessly converts output from ChatGPT, Bard, Jasper, Grammarly, GPT4, and other AI text generators into text indistinguishable from human writing. Achieve 100% originality and enhance your content creation with the best HumanAIze AI solution available.
          </p>
          <div className="bg-background text-black dark:bg-foreground p-2 mt-4 rounded-lg shadow-md">
            <a
              className="flex items-center justify-center"
              href="https://aimlapi.com/?via=ibrohim"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image 
                src="/partners/powered_by_aimlapi.svg"
                alt="Powered by AIML API"
                width={120}
                height={120}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row justify-center items-center w-full">
          <div className="bg-[var(--bg-a)] p-4 w-full max-w-xl">
            <div className="relative">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-96 p-4 pb-12 bg-[var(--bg-a)] border border-solid border-gray-600 rounded-lg focus:outline-none resize-none focus:ring-2 focus:ring-[var(--text-c)] focus:border-transparent placeholder:text-sm text-sm"
                placeholder="Paste your AI-generated text here"
              />
              <div className="absolute bottom-4 left-4 bg-[var(--text-c)] text-white px-2 py-1 rounded-md text-sm text-gray-100 shadow">
                {wordCount} words
              </div>
              <button
                className={`absolute bottom-4 right-4 bg-[var(--text-a)] text-black rounded-md shadow border border-solid border-transparent transition-colors flex items-center justify-center gap-2 text-sm sm:text-base h-10 px-4
                  ${(loading || text.trim().length < 100) ? 'cursor-not-allowed bg-[var(--text-c)]' : 'cursor-pointer'}
                `}
                onClick={text.trim().length > 100 ? handleHumanize : undefined}
                disabled={loading}
              >
                {loading ? loader() : 'Humanize'}
              </button>
            </div>
          </div>
          <div className="bg-[var(--bg-a)] p-4 w-full max-w-xl">
            <div className="relative">
              <textarea 
                disabled={true}
                value={humanizedText}
                className="w-full h-96 p-4 bg-[var(--bg-a)] border border-solid border-gray-600 rounded-lg focus:outline-none resize-none focus:ring-2 focus:ring-[var(--text-c)] focus:border-transparent placeholder:text-sm text-sm" 
                placeholder="Humanized text will appear here"
              />
              <div className="absolute bottom-4 left-4 bg-[var(--text-c)] text-white px-2 py-1 rounded-md text-sm shadow">
                {humanizedTextWordCount} words
              </div>
              <button 
                disabled={(!loading && humanizedText.length > 0) ? false : true}
                className={`absolute bottom-4 right-4 bg-[var(--text-c)] text-white flex flex-row gap-1 items-center px-2 py-1 rounded-md text-sm shadow 
                  ${(loading || humanizedText.length < 1) ? 'cursor-not-allowed bg-[var(--text-c)]' : 'cursor-pointer'}
                `}
                onClick={() => {
                  if (!loading && humanizedText.length > 0) {
                    navigator.clipboard.writeText(humanizedText);
                    setToggleCopy(true);
                    setTimeout(() => {
                      setToggleCopy(false);
                    }, 1000);
                  }
                }}
              >
                <Image
                  aria-hidden
                  className=""
                  src={!toggleCopy ? '/essentials/copy.svg' : '/essentials/check.svg'}
                  alt="Copy icon"
                  width={16}
                  height={16}
                />
                copy
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}