import React, { useRef, useState } from "react";

const tsVideos = [
  {
    title: "TypeScript Full Course for Beginners (English)",
    src: "https://www.youtube-nocookie.com/embed/d56mG7DezGs",
    thumb: "https://img.youtube.com/vi/d56mG7DezGs/hqdefault.jpg",
  },
  {
    title: "TypeScript Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/vW8a7fIIO4U",
    thumb: "https://img.youtube.com/vi/vW8a7fIIO4U/hqdefault.jpg",
  },
  {
    title: "Advanced TypeScript Tutorial",
    src: "https://www.youtube-nocookie.com/embed/ahCwqrYpIuM",
    thumb: "https://img.youtube.com/vi/ahCwqrYpIuM/hqdefault.jpg",
  }
];

const whatYouWillLearn = [
  "Understand static typing and type inference",
  "Use interfaces, types, enums, and generics",
  "Handle functions, tuples, and unions",
  "Integrate TypeScript with React.js",
  "Catch bugs early with type checking",
  "Create reusable and scalable codebases",
  "Understand TypeScript configs and compiler",
  "Build full-stack projects using TS"
];

const TypeScriptEssentialsPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < tsVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-[#3178c6] mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            TypeScript is a superset of JavaScript that helps you write safer and more predictable
            code with static typing. This course covers the core TypeScript features with lessons
            available in both English and Tamil.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="TypeScript Dev"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/IeRdg7zOZxoGC/giphy.gif"
              alt="Coding TypeScript"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What you'll learn */}
        <section>
          <h2 className="text-lg font-bold text-[#3178c6] mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-[#3178c6]/20 text-[#3178c6]"
                    : "hover:scale-105 hover:bg-[#3178c6]/10 hover:text-[#3178c6]"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-[#3178c6] text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-[#3178c6] mb-4">🎬 TypeScript Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={tsVideos[videoIndex].src}
              title={tsVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#3178c6] hover:text-[#10182a] text-[#3178c6] font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {tsVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === tsVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#3178c6] hover:text-[#10182a] text-[#3178c6] font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-[#3178c6] mb-4">🛠️ TypeScript Projects & GitHub</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Type-safe to-do app with React</li>
            <li>Form validation using interfaces and generics</li>
            <li>API client with fetch + TypeScript types</li>
            <li>Reusable UI components using TS</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#3178c6] text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/microsoft/TypeScript-Website/tree/v2/packages/documentation/copy/en/project-code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3178c6] underline hover:text-blue-400 transition"
              >
                Microsoft TypeScript Project Examples
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#3178c6] text-lg">🔗 Resource:</span>
              <a
                href="https://www.typescriptlang.org/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3178c6] underline hover:text-blue-400 transition"
              >
                TypeScript Official Docs
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TypeScriptEssentialsPage;
