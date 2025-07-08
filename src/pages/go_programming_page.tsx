import React, { useRef, useState } from "react";

const goVideos = [
  {
    title: "Go Programming Full Course (English)",
    src: "https://www.youtube-nocookie.com/embed/yyUHQIec83I",
    thumb: "https://img.youtube.com/vi/yyUHQIec83I/hqdefault.jpg"
  },
  {
    title: "Go Language Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/lbRYKngtZgY",
    thumb: "https://img.youtube.com/vi/lbRYKngtZgY/hqdefault.jpg"
  },
  {
    title: "REST API in GoLang",
    src: "https://www.youtube-nocookie.com/embed/d_L64KTlRQ8",
    thumb: "https://img.youtube.com/vi/d_L64KTlRQ8/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Understand Go syntax, variables, and functions",
  "Handle concurrency with goroutines",
  "Use channels, structs, and interfaces",
  "Build CLI tools with Go",
  "Connect Go to REST APIs",
  "Write Go web servers",
  "Compile cross-platform executables"
];

const GoProgrammingPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < goVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-cyan-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Go (or Golang) is an open-source language developed by Google for building efficient,
            reliable, and scalable software. This course will help you master Go from scratch,
            including concurrency and web apps, with video lessons in English and Tamil.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif"
              alt="Go Gopher"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/gh0RRgkTXedvF0pDc0/giphy.gif"
              alt="Go Code"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-cyan-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-cyan-400/20 text-cyan-400"
                    : "hover:scale-105 hover:bg-cyan-400/10 hover:text-cyan-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-cyan-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lessons */}
        <section>
          <h2 className="text-lg font-bold text-cyan-400 mb-4">🎬 Go Programming Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={goVideos[videoIndex].src}
              title={goVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-cyan-400 hover:text-[#10182a] text-cyan-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {goVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === goVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-cyan-400 hover:text-[#10182a] text-cyan-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & GitHub Resources */}
        <section>
          <h2 className="text-lg font-bold text-cyan-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Build a REST API server with Go</li>
            <li>CLI to-do list app</li>
            <li>Concurrent file downloader</li>
            <li>Microservice for user auth</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-cyan-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/golang/go"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300 transition"
              >
                Go Language Official GitHub
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-cyan-400 text-lg">🔗 Docs:</span>
              <a
                href="https://go.dev/doc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300 transition"
              >
                Go Language Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GoProgrammingPage;
