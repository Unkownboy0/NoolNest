import React, { useRef, useState } from "react";

const nodeVideos = [
  {
    title: "Node.js Full Course - Beginner to Pro (English)",
    src: "https://www.youtube-nocookie.com/embed/Oe421EPjeBE",
    thumb: "https://img.youtube.com/vi/Oe421EPjeBE/hqdefault.jpg",
  },
  {
    title: "Node.js Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/lUcw5l5S1Fw",
    thumb: "https://img.youtube.com/vi/lUcw5l5S1Fw/hqdefault.jpg",
  },
  {
    title: "Express.js REST API Tutorial",
    src: "https://www.youtube-nocookie.com/embed/lY6icfhap2o",
    thumb: "https://img.youtube.com/vi/lY6icfhap2o/hqdefault.jpg",
  }
];

const whatYouWillLearn = [
  "Understand Node.js runtime and event-driven model",
  "Work with built-in modules and file system",
  "Build REST APIs with Express.js",
  "Use routing, middleware, and request handling",
  "Connect to databases like MongoDB",
  "Implement authentication and JWT",
  "Create scalable backend services",
  "Deploy Node.js apps to production"
];

const NodeJsBackendPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < nodeVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-green-300 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Node.js is a powerful JavaScript runtime used to build fast, scalable server-side
            applications. This course teaches you how to create REST APIs and full-stack apps using
            Node.js and Express, with lessons in both English and Tamil.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/coxQHKASG60HrHtvkt/giphy.gif"
              alt="Node.js Dev"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/iIGT8Y1rOYhBpdHh1C/giphy.gif"
              alt="Backend Coding"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What you'll learn */}
        <section>
          <h2 className="text-lg font-bold text-green-300 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-green-300/20 text-green-300"
                    : "hover:scale-105 hover:bg-green-300/10 hover:text-green-300"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-green-300 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-green-300 mb-4">🎬 Node.js Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={nodeVideos[videoIndex].src}
              title={nodeVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-green-300 hover:text-[#10182a] text-green-300 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {nodeVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === nodeVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-green-300 hover:text-[#10182a] text-green-300 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-green-300 mb-4">🛠️ Node.js Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>RESTful blog API using Express</li>
            <li>Authentication with JWT and middleware</li>
            <li>File upload system using multer</li>
            <li>Task manager app with MongoDB</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-green-300 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/Academind/node-restful-api"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 underline hover:text-green-200 transition"
              >
                Academind Node.js REST API Project
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-green-300 text-lg">🔗 Docs:</span>
              <a
                href="https://nodejs.org/en/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-300 underline hover:text-green-200 transition"
              >
                Node.js Official Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NodeJsBackendPage;
