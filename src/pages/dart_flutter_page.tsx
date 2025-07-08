import React, { useRef, useState } from "react";

const flutterVideos = [
  {
    title: "Flutter Full Course for Beginners (English)",
    src: "https://www.youtube-nocookie.com/embed/x0uinJvhNxI",
    thumb: "https://img.youtube.com/vi/x0uinJvhNxI/hqdefault.jpg"
  },
  {
    title: "Flutter Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/zY0nrrQq6CQ",
    thumb: "https://img.youtube.com/vi/zY0nrrQq6CQ/hqdefault.jpg"
  },
  {
    title: "Build Apps with Dart & Firebase",
    src: "https://www.youtube-nocookie.com/embed/s18F7x3L9yE",
    thumb: "https://img.youtube.com/vi/s18F7x3L9yE/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Understand Dart syntax and structure",
  "Build UI in Flutter with widgets",
  "Use stateless and stateful widgets",
  "Connect to Firebase for auth & database",
  "Use providers and routing",
  "Create cross-platform Android/iOS apps",
  "Deploy and test apps on emulator/device"
];

const DartFlutterPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < flutterVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-teal-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Dart and Flutter are used to build high-performance cross-platform mobile apps with a single
            codebase. This course includes UI building, logic, Firebase integration, and deployment,
            supported with English + Tamil video tutorials.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif"
              alt="Flutter Animation"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif"
              alt="App Building"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-teal-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-teal-400/20 text-teal-400"
                    : "hover:scale-105 hover:bg-teal-400/10 hover:text-teal-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-teal-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lessons */}
        <section>
          <h2 className="text-lg font-bold text-teal-400 mb-4">🎬 Dart & Flutter Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={flutterVideos[videoIndex].src}
              title={flutterVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-teal-400 hover:text-[#10182a] text-teal-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {flutterVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === flutterVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-teal-400 hover:text-[#10182a] text-teal-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & GitHub Resources */}
        <section>
          <h2 className="text-lg font-bold text-teal-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Task Manager App (CRUD with Firebase)</li>
            <li>Weather Forecast App using OpenWeather API</li>
            <li>Note-taking App with local storage</li>
            <li>Authentication-based Login UI</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-teal-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/flutter/flutter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 underline hover:text-teal-300 transition"
              >
                Flutter Official GitHub Repository
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-teal-400 text-lg">🔗 Docs:</span>
              <a
                href="https://docs.flutter.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 underline hover:text-teal-300 transition"
              >
                Flutter Developer Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DartFlutterPage;
