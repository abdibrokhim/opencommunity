
'use client';

import Image from 'next/image';
import React from 'react';

const Album = ({ handleClose }: { handleClose: () => void }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  // Array of album images and audio previews
  const albums = [
    { image: '/cover/comed.png', audio: '/album/comed.MP3' },
    { image: '/cover/paperai.png', audio: '/album/paperai.mp3' },
    { image: '/cover/prepally.png', audio: '/album/prepally.mp3' },
    { image: '/cover/humanaize.png', audio: '/album/humanaize.mp3' },
    { image: '/cover/ai-sticker-maker.png', audio: '/album/ai-sticker-maker.mp3' },
    { image: '/cover/nextgen-o1.png', audio: '/album/nextgen-o1.mp3' },
    { image: '/cover/monkeytypeai.png', audio: '/album/monkeytypeai.mp3' },
    { image: '/cover/langflowai.png', audio: '/album/langflowai.mp3' },
    { image: '/cover/lovido.lol.png', audio: '/album/lovido.lol.mp3' },
    { image: '/cover/storyai.png', audio: '/album/storyai.mp3' },
    { image: '/cover/ecoshopai.png', audio: '/album/ecoshopai.mp3' },
    { image: '/cover/ai-magic-cards.png', audio: '/album/ai-magic-cards.mp3' },
    { image: '/cover/chatwithpdf.png', audio: '/album/chatwithpdf.mp3' },
    { image: '/cover/harmony-quest.png', audio: '/album/harmony-quest.mp3' },
    { image: '/cover/mewellai.png', audio: '/album/mewellai-short.mp3' },

  ];

  // Function to go to the previous album
  const prevAlbum = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? albums.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next album
  const nextAlbum = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % albums.length);
  };

  React.useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      setIsLoading(true);
      audio.pause();
      audio.src = albums[currentIndex].audio;
      audio.load();

      const handleCanPlayThrough = () => {
        audio
          .play()
          .then(() => {
            setIsLoading(false);
          })
          .catch((error) => {
            if (error.name !== 'AbortError') {
              console.error('Error playing audio:', error);
            }
            setIsLoading(false);
          });
      };

      audio.addEventListener('canplaythrough', handleCanPlayThrough);

      return () => {
        audio.removeEventListener('canplaythrough', handleCanPlayThrough);
      };
    }
  }, [currentIndex]);

  // Add an event listener for the 'ended' event to auto-play next track
  React.useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        nextAlbum();
      };
      audio.addEventListener('ended', handleEnded);
      return () => {
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, [audioRef, currentIndex]);

  const loading = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-8">
      <div className="relative bg-[#1f2024] rounded-md w-full max-w-5xl p-4 sm:p-6">
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close Trailer"
          className="absolute top-2 left-2 hover:bg-[#A1A2A5] hover:bg-opacity-10 rounded-full p-3"
        >
          <Image
            aria-hidden
            src="/essentials/close.svg"
            alt="close icon"
            width={22}
            height={22}
          />
        </button>
        {/* Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
            We just Dropped 🐐
          </h2>
          <h6 className="text-sm sm:text-md font-bold text-center text-[var(--text)]">
            follow us{' '}
            <a
              href="https://x.com/xopencommunity"
              target="_blank"
              className="text-[var(--button)] hover:text-[var(--primary)] hover:underline"
            >
              Open Community
            </a>
          </h6>
          {/* Album Display */}
          <div className="relative w-full md:h-[540px] h-[360px] flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={prevAlbum}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 hover:bg-[#A1A2A5] hover:bg-opacity-30 rounded-full p-3 z-50"
              aria-label="Previous Album"
            >
              <Image
                className='transform rotate-180'
                src="/essentials/arrow-right.svg"
                alt="Previous Album"
                width={24}
                height={24}
              />
            </button>
            {/* Album Image */}
            <div className="relative w-full h-full">
              <Image
                src={albums[currentIndex].image}
                alt="Album image"
                layout="fill"
                objectFit="contain"
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  {loading()}
                </div>
              )}
            </div>
            {/* Right Arrow */}
            <button
              onClick={nextAlbum}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 hover:bg-[#A1A2A5] hover:bg-opacity-30 rounded-full p-3 z-50"
              aria-label="Next Album"
            >
              <Image
                src="/essentials/arrow-right.svg"
                alt="Next Album"
                width={24}
                height={24}
              />
            </button>
          </div>
          {/* Audio Element */}
          <audio ref={audioRef} />
          <h6 className="text-sm sm:text-md font-bold text-center text-[var(--text)]">
            All available now:{' '}
            <a
              href="https://www.patreon.com/collection/897243"
              target="_blank"
              className="text-[var(--orange)] hover:text-[var(--hover-orange)] hover:underline"
            >
              Get full access
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Album;
