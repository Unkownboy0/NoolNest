import React, { useRef, useState } from "react";

const reactVideos = [
  {
    title: "React.js Full Course for Beginners",
    src: "https://www.youtube-nocookie.com/embed/bMknfKXIFA8",
    thumb: "https://img.youtube.com/vi/bMknfKXIFA8/hqdefault.jpg",
  },
  {
    title: "React Crash Course 2023",
    src: "https://www.youtube-nocookie.com/embed/w7ejDZ8SWv8",
    thumb: "https://img.youtube.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
  },
  {
    title: "React Hooks Tutorial",
    src: "https://www.youtube-nocookie.com/embed/TNhaISOUy6Q",
    thumb: "https://img.youtube.com/vi/TNhaISOUy6Q/hqdefault.jpg",
  }
];

const whatYouWillLearn = [
  "Build components and manage state",
  "Understand props, events, and JSX",
  "Use React Hooks like useState and useEffect",
  "Build and manage form inputs",
  "Create reusable UI structures",
  "Render conditional and dynamic content",
  "Fetch API data and handle loading",
  "Build real-world React apps"
];

const ReactJsCoursePage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < reactVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-[#61dafb] mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            React.js is the most in-demand frontend JavaScript library for building modern web
            interfaces. In this course, you'll learn the React fundamentals, hooks, and build
            powerful UI applications.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
              alt="React Logo"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/XHAv3GveJMXMX9n8V5/giphy.gif"
              alt="React Dev"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What you'll learn */}
        <section>
          <h2 className="text-lg font-bold text-[#61dafb] mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-[#61dafb]/20 text-[#61dafb]"
                    : "hover:scale-105 hover:bg-[#61dafb]/10 hover:text-[#61dafb]"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-[#61dafb] text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-[#61dafb] mb-4">🎬 React Video Lessons</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={reactVideos[videoIndex].src}
              title={reactVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#61dafb] hover:text-[#10182a] text-[#61dafb] font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {reactVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === reactVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#61dafb] hover:text-[#10182a] text-[#61dafb] font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-[#61dafb] mb-4">🛠️ React Projects & Examples</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Todo list with hooks</li>
            <li>Weather app with API calls</li>
            <li>Personal portfolio using reusable components</li>
            <li>Blog post layout with dynamic routing</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#61dafb] text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/abhisheknaiidu/awesome-react-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#61dafb] underline hover:text-cyan-400 transition"
              >
                Awesome React Project Collection
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#61dafb] text-lg">🔗 Docs:</span>
              <a
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#61dafb] underline hover:text-cyan-400 transition"
              >
                React Official Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReactJsCoursePage;
