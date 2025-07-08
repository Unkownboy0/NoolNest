import React, { useRef, useState } from "react";

const dockerVideos = [
  {
    title: "Docker Crash Course for Beginners (English)",
    src: "https://www.youtube-nocookie.com/embed/pTFZFxd4hOI",
    thumb: "https://img.youtube.com/vi/pTFZFxd4hOI/hqdefault.jpg"
  },
  {
    title: "Docker Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/jc4rbDzvP9A",
    thumb: "https://img.youtube.com/vi/jc4rbDzvP9A/hqdefault.jpg"
  },
  {
    title: "Docker Compose in 100 Seconds",
    src: "https://www.youtube-nocookie.com/embed/Qw9zlE3t8Ko",
    thumb: "https://img.youtube.com/vi/Qw9zlE3t8Ko/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Understand containers, images, and Dockerfiles",
  "Install and run Docker on any OS",
  "Build and run custom containers",
  "Use Docker CLI and GUI tools",
  "Connect services with Docker Compose",
  "Persist data using volumes",
  "Expose ports and setup container networking",
  "Deploy containerized apps"
];

const DockerCoursePage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < dockerVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-sky-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Docker allows developers to package applications and dependencies into lightweight,
            portable containers. This course covers everything from basics to Docker Compose,
            with videos in English and Tamil.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif"
              alt="Docker Animation"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/VE88f8dLqTxoQ2M95U/giphy.gif"
              alt="Docker CLI"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-sky-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-sky-400/20 text-sky-400"
                    : "hover:scale-105 hover:bg-sky-400/10 hover:text-sky-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-sky-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-sky-400 mb-4">🎬 Docker Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={dockerVideos[videoIndex].src}
              title={dockerVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-sky-400 hover:text-[#10182a] text-sky-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {dockerVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === dockerVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-sky-400 hover:text-[#10182a] text-sky-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-sky-400 mb-4">🛠️ Docker Projects & GitHub</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Containerize a Node.js app with MongoDB</li>
            <li>Create a Dockerfile for a React project</li>
            <li>Set up multi-container app using Docker Compose</li>
            <li>Push and pull custom images from Docker Hub</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-sky-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/docker/awesome-compose"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-300 transition"
              >
                Docker Awesome Compose Examples
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-sky-400 text-lg">🔗 Docs:</span>
              <a
                href="https://docs.docker.com/get-started/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-sky-300 transition"
              >
                Docker Official Docs (Get Started)
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DockerCoursePage;
