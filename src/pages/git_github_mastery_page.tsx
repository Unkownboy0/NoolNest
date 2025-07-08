import React, { useRef, useState } from "react";

const gitVideos = [
  {
    title: "Git & GitHub Full Course (English)",
    src: "https://www.youtube-nocookie.com/embed/apGV9Kg7ics",
    thumb: "https://img.youtube.com/vi/apGV9Kg7ics/hqdefault.jpg",
  },
  {
    title: "Git & GitHub Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/YBP6v1vX4nc",
    thumb: "https://img.youtube.com/vi/YBP6v1vX4nc/hqdefault.jpg",
  },
  {
    title: "Git Branching & Merging Explained",
    src: "https://www.youtube-nocookie.com/embed/oFYyTZwMyAg",
    thumb: "https://img.youtube.com/vi/oFYyTZwMyAg/hqdefault.jpg",
  }
];

const whatYouWillLearn = [
  "Understand version control concepts",
  "Install and initialize Git projects",
  "Stage, commit, and manage file changes",
  "Use branches, merge, rebase effectively",
  "Push and pull from GitHub repositories",
  "Create pull requests and manage issues",
  "Collaborate using forks and contributions",
  "Set up a GitHub portfolio and profile"
];

const GitGithubMasteryPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < gitVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-pink-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Git is a version control system used by millions of developers to manage and track
            changes in code. GitHub is the cloud platform where you can host, share, and collaborate
            on your projects. This course covers both in depth, with videos in English and Tamil.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/kH1DBkPNyZPOk0x4RW/giphy.gif"
              alt="GitHub Dev"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif"
              alt="Terminal Git"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What you'll learn */}
        <section>
          <h2 className="text-lg font-bold text-pink-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-pink-400/20 text-pink-400"
                    : "hover:scale-105 hover:bg-pink-400/10 hover:text-pink-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-pink-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-pink-400 mb-4">🎬 Git & GitHub Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={gitVideos[videoIndex].src}
              title={gitVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-pink-400 hover:text-[#10182a] text-pink-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {gitVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === gitVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-pink-400 hover:text-[#10182a] text-pink-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-pink-400 mb-4">🛠️ Projects & Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Host a personal portfolio on GitHub</li>
            <li>Collaborate on open-source projects</li>
            <li>Create a version-controlled blog project</li>
            <li>Practice GitFlow for team collaboration</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-pink-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/git-guides"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 underline hover:text-pink-300 transition"
              >
                GitHub Guide Projects
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-pink-400 text-lg">🔗 Docs:</span>
              <a
                href="https://docs.github.com/en/get-started"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 underline hover:text-pink-300 transition"
              >
                GitHub Docs for Beginners
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GitGithubMasteryPage;
