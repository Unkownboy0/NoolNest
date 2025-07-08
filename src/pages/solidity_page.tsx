import React, { useRef, useState } from "react";

const solidityVideos = [
  {
    title: "Solidity & Ethereum Smart Contracts Full Course (English)",
    src: "https://www.youtube-nocookie.com/embed/M576WGiDBdQ",
    thumb: "https://img.youtube.com/vi/M576WGiDBdQ/hqdefault.jpg"
  },
  {
    title: "Solidity Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/hq-VfYrb84Q",
    thumb: "https://img.youtube.com/vi/hq-VfYrb84Q/hqdefault.jpg"
  },
  {
    title: "Build Dapps with Solidity & Hardhat",
    src: "https://www.youtube-nocookie.com/embed/gyMwXuJrbJQ",
    thumb: "https://img.youtube.com/vi/gyMwXuJrbJQ/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Smart contract basics and Solidity syntax",
  "Use Remix IDE and Metamask",
  "Deploy contracts on Ethereum testnets",
  "Write functions, mappings, modifiers",
  "Use events, structs, enums",
  "Understand gas fees and storage",
  "Build DApps with frontend integrations"
];

const SolidityPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < solidityVideos.length - 1) setVideoIndex(videoIndex + 1);
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
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-bold text-emerald-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Solidity is the programming language used for writing smart contracts on the Ethereum blockchain.
            In this course, you will learn the essentials of blockchain programming with interactive smart contract examples
            and DApp integrations — with English & Tamil tutorials.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img src="https://media.giphy.com/media/3oKIPwoeGErMmaI43C/giphy.gif" alt="Solidity Dev" className="w-32 rounded-lg border border-[#232c3b] shadow" />
            <img src="https://media.giphy.com/media/SWnOaYJRSv0jWPmNCH/giphy.gif" alt="Ethereum Code" className="w-48 rounded-lg border border-[#232c3b] shadow" />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-emerald-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx ? "scale-105 bg-emerald-400/20 text-emerald-400" : "hover:scale-105 hover:bg-emerald-400/10 hover:text-emerald-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-emerald-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lessons */}
        <section>
          <h2 className="text-lg font-bold text-emerald-400 mb-4">🎬 Solidity Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={solidityVideos[videoIndex].src}
              title={solidityVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-emerald-400 hover:text-[#10182a] text-emerald-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">Video {videoIndex + 1} of {solidityVideos.length}</span>
            <button
              onClick={handleNext}
              disabled={videoIndex === solidityVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-emerald-400 hover:text-[#10182a] text-emerald-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & GitHub Resources */}
        <section>
          <h2 className="text-lg font-bold text-emerald-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Simple Voting Contract</li>
            <li>Token (ERC20) Smart Contract</li>
            <li>Decentralized To-do List</li>
            <li>Buy Me a Coffee (Donation DApp)</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-emerald-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/OpenZeppelin/openzeppelin-contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline hover:text-green-300 transition"
              >
                OpenZeppelin Solidity Contracts
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-emerald-400 text-lg">🔗 Docs:</span>
              <a
                href="https://docs.soliditylang.org/en/v0.8.21/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 underline hover:text-green-300 transition"
              >
                Solidity Official Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SolidityPage;
