import React, { useRef, useState } from "react";

const htmlCssVideos = [
  {
    title: "HTML & CSS Full Course - Beginner to Pro",
    src: "https://www.youtube-nocookie.com/embed/mU6anWqZJcc",
    thumb: "https://img.youtube.com/vi/mU6anWqZJcc/hqdefault.jpg",
  },
  {
    title: "Build a Website with HTML & CSS",
    src: "https://www.youtube-nocookie.com/embed/Wm6CUkswsNw",
    thumb: "https://img.youtube.com/vi/Wm6CUkswsNw/hqdefault.jpg",
  },
  {
    title: "Responsive Web Design with Flexbox & Grid",
    src: "https://www.youtube-nocookie.com/embed/JJSoEo8JSnc",
    thumb: "https://img.youtube.com/vi/JJSoEo8JSnc/hqdefault.jpg",
  }
];

const whatYouWillLearn = [
  "Structure web pages using HTML",
  "Style elements using CSS properties",
  "Use semantic tags, lists, tables, and forms",
  "Build responsive layouts using Flexbox & Grid",
  "Create navigation menus and styled buttons",
  "Add animations and transitions",
  "Design landing pages and personal portfolios",
  "Deploy static websites online"
];

const HTMLCssCoursePage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < htmlCssVideos.length - 1) setVideoIndex(videoIndex + 1);
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
            HTML and CSS are the building blocks of the web. In this course, you’ll learn how
            to build clean, modern, and responsive web pages from scratch using only HTML and CSS.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif"
              alt="Web Design"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
              alt="HTML CSS Animation"
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
          <h2 className="text-lg font-bold text-[#ffe066] mb-4">🎬 HTML & CSS Video Lessons</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={htmlCssVideos[videoIndex].src}
              title={htmlCssVideos[videoIndex].title}
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
              Video {videoIndex + 1} of {htmlCssVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === htmlCssVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#ffe066] hover:text-[#10182a] text-[#ffe066] font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-[#ffe066] mb-4">🛠️ HTML & CSS Projects</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Design a personal portfolio website</li>
            <li>Create a product landing page</li>
            <li>Build a responsive contact form</li>
            <li>Clone a homepage of a famous website</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#ffe066] text-lg">🔗 Projects:</span>
              <a
                href="https://github.com/florinpop17/app-ideas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffe066] underline hover:text-yellow-300 transition"
              >
                HTML & CSS App Ideas (GitHub)
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#ffe066] text-lg">🔗 Resource:</span>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffe066] underline hover:text-yellow-300 transition"
              >
                MDN HTML Reference
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HTMLCssCoursePage;
