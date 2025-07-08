import React, { useRef, useState } from "react";

const jsVideos = [
  {
    title: "JavaScript Full Course for Beginners",
    src: "https://www.youtube-nocookie.com/embed/hdI2bqOjy3c",
    thumb: "https://img.youtube.com/vi/hdI2bqOjy3c/hqdefault.jpg",
  },
  {
    title: "JavaScript Tutorial for Beginners",
    src: "https://www.youtube-nocookie.com/embed/PkZNo7MFNFg",
    thumb: "https://img.youtube.com/vi/PkZNo7MFNFg/hqdefault.jpg",
  },
  {
    title: "JavaScript DOM Crash Course",
    src: "https://www.youtube-nocookie.com/embed/0ik6X4DJKCc",
    thumb: "https://img.youtube.com/vi/0ik6X4DJKCc/hqdefault.jpg",
  },
  {
    title: "Async JS Crash Course",
    src: "https://www.youtube-nocookie.com/embed/PoRJizFvM7s",
    thumb: "https://img.youtube.com/vi/PoRJizFvM7s/hqdefault.jpg",
  }
];

const whatYouWillLearn = [
  "Understand JS syntax, variables, and data types",
  "Use loops, conditionals, and functions",
  "Manipulate the DOM and handle events",
  "Work with arrays, objects, and classes",
  "Asynchronous programming (Promises, async/await)",
  "Make web pages interactive using JS",
  "Intro to APIs and AJAX",
  "Real-world JavaScript project building"
];

const JavaScriptBasicsPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < jsVideos.length - 1) setVideoIndex(videoIndex + 1);
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
            JavaScript is the most popular language for web development. From simple interactivity
            to full-blown web apps, JavaScript powers it all. In this course, you'll learn the
            fundamentals and build real interactive projects for the web.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/XHAv3GveJMXMX9n8V5/giphy.gif"
              alt="JavaScript Animation"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif"
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
          <h2 className="text-lg font-bold text-[#ffe066] mb-4">🎬 JavaScript Video Lessons</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={jsVideos[videoIndex].src}
              title={jsVideos[videoIndex].title}
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
              Video {videoIndex + 1} of {jsVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === jsVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#ffe066] hover:text-[#10182a] text-[#ffe066] font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-[#ffe066] mb-4">🛠️ JavaScript Projects & Examples</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Build a calculator and form validator</li>
            <li>Create interactive to-do and weather apps</li>
            <li>Make an image slider and modal window</li>
            <li>Fetch API data and display it dynamically</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#ffe066] text-lg">🔗 Projects:</span>
              <a
                href="https://github.com/bradtraversy/javascript-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffe066] underline hover:text-yellow-300 transition"
              >
                Brad Traversy’s JS Projects Repo
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#ffe066] text-lg">🔗 Resource:</span>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffe066] underline hover:text-yellow-300 transition"
              >
                MDN JavaScript Docs
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JavaScriptBasicsPage;
