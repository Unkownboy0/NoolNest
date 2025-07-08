import React, { useRef, useState } from "react";

const tsVideos = [
  {
    title: "TypeScript Crash Course (English)",
    src: "https://www.youtube-nocookie.com/embed/30LWjhZzg50",
    thumb: "https://img.youtube.com/vi/30LWjhZzg50/hqdefault.jpg"
  },
  {
    title: "TypeScript Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/YKp0ZVgWzLk",
    thumb: "https://img.youtube.com/vi/YKp0ZVgWzLk/hqdefault.jpg"
  },
  {
    title: "TypeScript Projects with React",
    src: "https://www.youtube-nocookie.com/embed/FJDVKeh7RJI",
    thumb: "https://img.youtube.com/vi/FJDVKeh7RJI/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Understand TypeScript syntax and setup",
  "Use types, interfaces, and enums",
  "Add type safety to JavaScript apps",
  "Work with TypeScript in React projects",
  "Create reusable components with types",
  "Use generics and utility types",
  "Configure tsconfig and module bundling"
];

const TypeScriptPage: React.FC = () => {
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
          <h2 className="text-xl font-bold text-blue-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            TypeScript is a superset of JavaScript that adds strong typing, interfaces, and compile-time
            checks. Learn how to scale your JS projects with TypeScript and build safer, maintainable
            code — with videos in English and Tamil.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img src="https://media.giphy.com/media/iFmw13t6qivj2/giphy.gif" alt="TS Flow" className="w-32 rounded-lg border border-[#232c3b] shadow" />
            <img src="https://media.giphy.com/media/j2qF7R1mI6QW8tP9Nk/giphy.gif" alt="Code Compilation" className="w-48 rounded-lg border border-[#232c3b] shadow" />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-blue-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx ? "scale-105 bg-blue-400/20 text-blue-400" : "hover:scale-105 hover:bg-blue-400/10 hover:text-blue-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-blue-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lessons */}
        <section>
          <h2 className="text-lg font-bold text-blue-400 mb-4">🎬 TypeScript Video Lessons (English + Tamil)</h2>
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-blue-400 hover:text-[#10182a] text-blue-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">Video {videoIndex + 1} of {tsVideos.length}</span>
            <button
              onClick={handleNext}
              disabled={videoIndex === tsVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-blue-400 hover:text-[#10182a] text-blue-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & GitHub Resources */}
        <section>
          <h2 className="text-lg font-bold text-blue-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Type-safe to-do app in React</li>
            <li>Custom reusable UI component library</li>
            <li>Blog system with interfaces and generics</li>
            <li>Form validation and type-safe API calls</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-blue-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/microsoft/TypeScript"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300 transition"
              >
                Microsoft TypeScript GitHub Repo
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-blue-400 text-lg">🔗 Docs:</span>
              <a
                href="https://www.typescriptlang.org/docs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300 transition"
              >
                TypeScript Official Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TypeScriptPage;
