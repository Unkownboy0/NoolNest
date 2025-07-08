import React, { useRef, useState } from "react";

const asmVideos = [
  {
    title: "Assembly Programming Basics (English)",
    src: "https://www.youtube-nocookie.com/embed/75gBFiFtAb8",
    thumb: "https://img.youtube.com/vi/75gBFiFtAb8/hqdefault.jpg"
  },
  {
    title: "Assembly Language Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/3jcD1hvtx2E",
    thumb: "https://img.youtube.com/vi/3jcD1hvtx2E/hqdefault.jpg"
  },
  {
    title: "8086 Projects & Simulation",
    src: "https://www.youtube-nocookie.com/embed/UhZxdKxHh9M",
    thumb: "https://img.youtube.com/vi/UhZxdKxHh9M/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Understand CPU architecture and registers",
  "8086 instruction set and memory model",
  "Write and debug basic ASM programs",
  "Use TASM/MASM for compiling",
  "Perform arithmetic and logic operations",
  "Design simple microprocessor-based projects",
  "Simulate assembly with tools like EMU8086"
];

const AssemblyPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < asmVideos.length - 1) setVideoIndex(videoIndex + 1);
  };

  const handlePrev = () => {
    if (videoIndex > 0) setVideoIndex(videoIndex - 1);
  };

  React.useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (
        typeof e.data === "object" &&
        e.data &&
        e.data.event === "onStateChange" &&
        e.data.info === 0
      ) {
        handleNext();
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [videoIndex]);

  return (
    <div className="bg-[#10182a] min-h-screen font-sans text-gray-100 px-4 py-8">
      <main className="max-w-4xl mx-auto flex flex-col gap-8">
        <section>
          <h2 className="text-xl font-bold text-orange-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Assembly Language is a low-level programming language for microcontrollers and CPUs. Learn
            how computer instructions work, write programs in 8086 ASM, and simulate using tools like
            EMU8086 and TASM — with English and Tamil videos.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img src="https://media.giphy.com/media/xUOxf2X8tC7kTrAKhy/giphy.gif" alt="Assembly CPU" className="w-32 rounded-lg border border-[#232c3b] shadow" />
            <img src="https://media.giphy.com/media/l0MYu5P5U4cP0L6iY/giphy.gif" alt="8086 Emulator" className="w-48 rounded-lg border border-[#232c3b] shadow" />
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-orange-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx ? "scale-105 bg-orange-400/20 text-orange-400" : "hover:scale-105 hover:bg-orange-400/10 hover:text-orange-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-orange-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-orange-400 mb-4">🎬 Assembly Language Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={asmVideos[videoIndex].src}
              title={asmVideos[videoIndex].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePrev}
              disabled={videoIndex === 0}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-orange-400 hover:text-[#10182a] text-orange-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">Video {videoIndex + 1} of {asmVideos.length}</span>
            <button
              onClick={handleNext}
              disabled={videoIndex === asmVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-orange-400 hover:text-[#10182a] text-orange-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold text-orange-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>LED blinking program with delay loop</li>
            <li>Simple calculator using assembly logic</li>
            <li>String reversal and palindrome checker</li>
            <li>Multiplication/division using shift ops</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-orange-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/mgechev/8086"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline hover:text-orange-300 transition"
              >
                8086 Assembly Programs GitHub
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-orange-400 text-lg">🔗 Docs:</span>
              <a
                href="https://emu8086-microprocessor-emulator.en.softonic.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline hover:text-orange-300 transition"
              >
                EMU8086 Documentation & Tool
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AssemblyPage;
