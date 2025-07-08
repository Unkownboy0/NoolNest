import React, { useRef, useState } from "react";

const swiftVideos = [
  {
    title: "Swift Full Course for Beginners (English)",
    src: "https://www.youtube-nocookie.com/embed/comQ1-x2a1Q",
    thumb: "https://img.youtube.com/vi/comQ1-x2a1Q/hqdefault.jpg"
  },
  {
    title: "Swift Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/QSoRbKe5AqA",
    thumb: "https://img.youtube.com/vi/QSoRbKe5AqA/hqdefault.jpg"
  },
  {
    title: "iOS App with SwiftUI",
    src: "https://www.youtube-nocookie.com/embed/2O9HkqYPHuo",
    thumb: "https://img.youtube.com/vi/2O9HkqYPHuo/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Understand Swift syntax and safety features",
  "Use variables, functions, loops, and classes",
  "Work with optionals, structs, and protocols",
  "Build iOS UI using SwiftUI or UIKit",
  "Connect Swift with APIs and databases",
  "Create reusable components and logic",
  "Deploy apps on iOS simulator or device"
];

const SwiftProgrammingPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < swiftVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-pink-300 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Swift is Apple's powerful and intuitive language for iOS, macOS, and watchOS development.
            In this course, you'll build apps using Swift and SwiftUI with help from English and Tamil
            video tutorials.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/YTbZzCkRQCEJa/giphy.gif"
              alt="Swift Coding"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/dUt1HkOH7phqU/giphy.gif"
              alt="iOS Dev"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-pink-300 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-pink-300/20 text-pink-300"
                    : "hover:scale-105 hover:bg-pink-300/10 hover:text-pink-300"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-pink-300 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lessons */}
        <section>
          <h2 className="text-lg font-bold text-pink-300 mb-4">🎬 Swift Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={swiftVideos[videoIndex].src}
              title={swiftVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-pink-300 hover:text-[#10182a] text-pink-300 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {swiftVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === swiftVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-pink-300 hover:text-[#10182a] text-pink-300 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & GitHub Resources */}
        <section>
          <h2 className="text-lg font-bold text-pink-300 mb-4">🛠️ Projects & Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Weather Forecast App with API</li>
            <li>Notes App using SwiftUI</li>
            <li>Tip Calculator with Input Validation</li>
            <li>Simple Quiz App for iOS</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-pink-300 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/CodeWithChris/iOS-App-Development"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 underline hover:text-pink-200 transition"
              >
                CodeWithChris Swift Project Repo
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-pink-300 text-lg">🔗 Docs:</span>
              <a
                href="https://developer.apple.com/swift/resources/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-300 underline hover:text-pink-200 transition"
              >
                Swift Official Developer Docs
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SwiftProgrammingPage;
