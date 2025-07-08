import React, { useRef, useState } from "react";

const phpVideos = [
  {
    title: "PHP Full Course for Beginners (English)",
    src: "https://www.youtube-nocookie.com/embed/OK_JCtrrv-c",
    thumb: "https://img.youtube.com/vi/OK_JCtrrv-c/hqdefault.jpg"
  },
  {
    title: "PHP Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/39lGNOjyZfA",
    thumb: "https://img.youtube.com/vi/39lGNOjyZfA/hqdefault.jpg"
  },
  {
    title: "PHP CRUD with MySQL",
    src: "https://www.youtube-nocookie.com/embed/QxZxHUf7c_4",
    thumb: "https://img.youtube.com/vi/QxZxHUf7c_4/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Understand PHP syntax and variables",
  "Work with forms and user input",
  "Connect to MySQL databases",
  "Perform CRUD operations securely",
  "Handle sessions and cookies",
  "Build simple login/register systems",
  "Create dynamic websites with PHP"
];

const PhpProgrammingPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < phpVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-purple-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            PHP is a powerful scripting language used to build dynamic websites and web applications.
            This course introduces PHP from scratch and helps you build forms, handle data, and connect
            with MySQL — with both English and Tamil video support.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/iN3vrgdoL1mQ0/giphy.gif"
              alt="PHP Coding"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/l41m2zj5U7xJzvTWM/giphy.gif"
              alt="PHP Developer"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-purple-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-purple-400/20 text-purple-400"
                    : "hover:scale-105 hover:bg-purple-400/10 hover:text-purple-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-purple-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-purple-400 mb-4">🎬 PHP Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={phpVideos[videoIndex].src}
              title={phpVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-purple-400 hover:text-[#10182a] text-purple-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {phpVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === phpVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-purple-400 hover:text-[#10182a] text-purple-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-purple-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>User login and registration system</li>
            <li>Blog app with PHP + MySQL</li>
            <li>Simple contact form handler</li>
            <li>Online product listing site</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-purple-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/fahmidasclassroom/PHP-Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 underline hover:text-purple-300 transition"
              >
                PHP Sample Projects on GitHub
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-purple-400 text-lg">🔗 Docs:</span>
              <a
                href="https://www.php.net/manual/en/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 underline hover:text-purple-300 transition"
              >
                PHP Official Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PhpProgrammingPage;
