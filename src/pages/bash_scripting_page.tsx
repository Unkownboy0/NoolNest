import React, { useRef, useState } from "react";

const bashVideos = [
  {
    title: "Bash Scripting Full Course (English)",
    src: "https://www.youtube-nocookie.com/embed/SPwyp2NG-bU",
    thumb: "https://img.youtube.com/vi/SPwyp2NG-bU/hqdefault.jpg"
  },
  {
    title: "Bash Scripting Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/yxWrS8bnq8E",
    thumb: "https://img.youtube.com/vi/yxWrS8bnq8E/hqdefault.jpg"
  },
  {
    title: "Linux Automation Projects",
    src: "https://www.youtube-nocookie.com/embed/A7l7aRzPWDA",
    thumb: "https://img.youtube.com/vi/A7l7aRzPWDA/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Basics of Unix/Linux terminal",
  "Bash syntax, variables, and operators",
  "Control flow: if, loops, case",
  "Read input and handle arguments",
  "Create automation scripts",
  "Schedule cron jobs",
  "Monitor processes, logs, and system stats"
];

const BashScriptingPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < bashVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-lime-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Bash is the default shell in most Linux distributions and a powerful tool for automating
            repetitive tasks. Learn Bash scripting from basics to advanced with both English and Tamil
            video tutorials.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/kdFMv6vM4oW2YdLwqw/giphy.gif"
              alt="Terminal Commands"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/RJsG1eY7TQL0U/giphy.gif"
              alt="Shell Automation"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-lime-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-lime-400/20 text-lime-400"
                    : "hover:scale-105 hover:bg-lime-400/10 hover:text-lime-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-lime-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lessons */}
        <section>
          <h2 className="text-lg font-bold text-lime-400 mb-4">🎬 Bash Scripting Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={bashVideos[videoIndex].src}
              title={bashVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-lime-400 hover:text-[#10182a] text-lime-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {bashVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === bashVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-lime-400 hover:text-[#10182a] text-lime-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & GitHub Resources */}
        <section>
          <h2 className="text-lg font-bold text-lime-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Backup script for folders</li>
            <li>System health checker (disk/cpu/ram)</li>
            <li>Custom command line menu tool</li>
            <li>Automated server log parser</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-lime-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/dylanaraps/pure-bash-bible"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 underline hover:text-lime-300 transition"
              >
                Pure Bash Scripting Examples
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-lime-400 text-lg">🔗 Docs:</span>
              <a
                href="https://tldp.org/LDP/abs/html/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 underline hover:text-lime-300 transition"
              >
                Advanced Bash Scripting Guide
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BashScriptingPage;
