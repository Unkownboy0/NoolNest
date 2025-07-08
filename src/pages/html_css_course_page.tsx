import React, { useRef, useState } from "react";

const htmlCssVideos = [
  {
    title: "HTML & CSS Full Course for Beginners (English)",
    src: "https://www.youtube-nocookie.com/embed/mU6anWqZJcc",
    thumb: "https://img.youtube.com/vi/mU6anWqZJcc/hqdefault.jpg"
  },
  {
    title: "HTML & CSS Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/W-vU0ulYXtE",
    thumb: "https://img.youtube.com/vi/W-vU0ulYXtE/hqdefault.jpg"
  },
  {
    title: "Responsive Web Design Crash Course",
    src: "https://www.youtube-nocookie.com/embed/srvUrASNj0s",
    thumb: "https://img.youtube.com/vi/srvUrASNj0s/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Structure a webpage using semantic HTML",
  "Style pages using CSS and custom layouts",
  "Build responsive websites with Flexbox and Grid",
  "Use modern CSS (variables, transitions, animations)",
  "Create forms, tables, and accessible content",
  "Understand mobile-first and adaptive design",
  "Host and publish static sites online"
];

const HtmlCssCoursePage: React.FC = () => {
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
          <h2 className="text-xl font-bold text-orange-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            HTML and CSS are the foundational building blocks of the web. This course helps you design
            beautiful and functional websites using semantic HTML and modern CSS. Videos are available
            in both English and Tamil.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif"
              alt="HTML CSS Code"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/l41lVsYDBC0UVQJCE/giphy.gif"
              alt="Website Design"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-orange-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-orange-400/20 text-orange-400"
                    : "hover:scale-105 hover:bg-orange-400/10 hover:text-orange-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-orange-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lessons */}
        <section>
          <h2 className="text-lg font-bold text-orange-400 mb-4">🎬 HTML & CSS Video Lessons (English + Tamil)</h2>
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-orange-400 hover:text-[#10182a] text-orange-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {htmlCssVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === htmlCssVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-orange-400 hover:text-[#10182a] text-orange-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-orange-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Build a personal portfolio site</li>
            <li>Create a responsive blog layout</li>
            <li>Design a landing page for a product</li>
            <li>Build an accessible contact form</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-orange-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/sindresorhus/awesome"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline hover:text-orange-300 transition"
              >
                Awesome Frontend Projects List
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-orange-400 text-lg">🔗 Docs:</span>
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 underline hover:text-orange-300 transition"
              >
                MDN Web Docs - HTML & CSS
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HtmlCssCoursePage;
