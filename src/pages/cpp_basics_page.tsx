import React, { useRef, useState } from "react";

const cppVideos = [
  {
    title: "C++ Full Course for Beginners",
    src: "https://www.youtube-nocookie.com/embed/ZzaPdXTrSb8",
    thumb: "https://img.youtube.com/vi/ZzaPdXTrSb8/hqdefault.jpg",
  },
  {
    title: "C++ Object Oriented Programming",
    src: "https://www.youtube-nocookie.com/embed/xJZa2_aldDs",
    thumb: "https://img.youtube.com/vi/xJZa2_aldDs/hqdefault.jpg",
  },
  {
    title: "C++ Projects for Beginners",
    src: "https://www.youtube-nocookie.com/embed/OuQz0W3VZ3s",
    thumb: "https://img.youtube.com/vi/OuQz0W3VZ3s/hqdefault.jpg",
  }
];

const whatYouWillLearn = [
  "Understand C++ syntax and basic structure",
  "Work with variables, data types, and operators",
  "Use conditional statements and loops",
  "Define and use functions effectively",
  "Grasp Object Oriented Programming in C++",
  "File handling and basic I/O operations",
  "Build real-world console apps",
  "Intro to STL (Standard Template Library)"
];

const CppBasicsPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < cppVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-[#ffe066] mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            C++ is a powerful general-purpose programming language used for building
            system applications, games, high-performance software, and more.
            This course will take you from the basics to intermediate concepts with
            real-world examples.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif"
              alt="C++ Animation"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/iFmw13LV1hHhViPPWz/giphy.gif"
              alt="Coding Animation"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What you'll learn */}
        <section>
          <h2 className="text-lg font-bold text-[#ffe066] mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-[#ffe066]/20 text-[#ffe066]"
                    : "hover:scale-105 hover:bg-[#ffe066]/10 hover:text-[#ffe066]"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-[#ffe066] text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-[#ffe066] mb-4">🎬 C++ Video Lessons</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={cppVideos[videoIndex].src}
              title={cppVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#ffe066] hover:text-[#10182a] text-[#ffe066] font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {cppVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === cppVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#ffe066] hover:text-[#10182a] text-[#ffe066] font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-[#ffe066] mb-4">🛠️ C++ Projects & Examples</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Basic calculator using functions</li>
            <li>Simple game like number guessing or tic-tac-toe</li>
            <li>Bank management system (console-based)</li>
            <li>Student record manager using file I/O</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#ffe066] text-lg">🔗 Projects:</span>
              <a
                href="https://github.com/TheAlgorithms/C-Plus-Plus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffe066] underline hover:text-yellow-300 transition"
              >
                TheAlgorithms C++ GitHub Repo
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#ffe066] text-lg">🔗 Resource:</span>
              <a
                href="https://cplusplus.com/doc/tutorial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffe066] underline hover:text-yellow-300 transition"
              >
                C++ Official Tutorial
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CppBasicsPage;
