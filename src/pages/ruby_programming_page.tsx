import React, { useRef, useState } from "react";

const rubyVideos = [
  {
    title: "Ruby Programming Full Course (English)",
    src: "https://www.youtube-nocookie.com/embed/t_ispmWmdjY",
    thumb: "https://img.youtube.com/vi/t_ispmWmdjY/hqdefault.jpg"
  },
  {
    title: "Ruby Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/0YDjwmxR7Lg",
    thumb: "https://img.youtube.com/vi/0YDjwmxR7Lg/hqdefault.jpg"
  },
  {
    title: "Ruby on Rails Crash Course",
    src: "https://www.youtube-nocookie.com/embed/fmyvWz5TUWg",
    thumb: "https://img.youtube.com/vi/fmyvWz5TUWg/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Understand Ruby syntax and structure",
  "Work with classes, modules, and objects",
  "Handle files, exceptions, and input/output",
  "Use built-in Ruby libraries",
  "Build command-line Ruby scripts",
  "Introduction to Ruby on Rails",
  "Create dynamic apps using MVC structure"
];

const RubyProgrammingPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < rubyVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-rose-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Ruby is a simple, clean, and expressive programming language. It’s used for scripting,
            automation, and most popularly with Ruby on Rails for full-stack web development. This
            course covers Ruby fundamentals, with videos in both English and Tamil.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/1jvRJWvuDjjTG/giphy.gif"
              alt="Ruby Coding"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/kFgzrTt798dD2/giphy.gif"
              alt="Terminal Ruby"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-rose-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-rose-400/20 text-rose-400"
                    : "hover:scale-105 hover:bg-rose-400/10 hover:text-rose-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-rose-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-rose-400 mb-4">🎬 Ruby Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={rubyVideos[videoIndex].src}
              title={rubyVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-rose-400 hover:text-[#10182a] text-rose-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {rubyVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === rubyVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-rose-400 hover:text-[#10182a] text-rose-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-rose-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Command-line task manager app</li>
            <li>URL shortener script</li>
            <li>CRUD blog app with Ruby on Rails</li>
            <li>To-do list with MVC routing</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-rose-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/rails/rails"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-400 underline hover:text-rose-300 transition"
              >
                Ruby on Rails (GitHub)
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-rose-400 text-lg">🔗 Docs:</span>
              <a
                href="https://www.ruby-lang.org/en/documentation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-400 underline hover:text-rose-300 transition"
              >
                Ruby Language Official Docs
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RubyProgrammingPage;
