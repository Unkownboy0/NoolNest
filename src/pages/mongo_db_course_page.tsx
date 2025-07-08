import React, { useRef, useState } from "react";

const mongoVideos = [
  {
    title: "MongoDB Full Course - English",
    src: "https://www.youtube-nocookie.com/embed/-56x56UppqQ",
    thumb: "https://img.youtube.com/vi/-56x56UppqQ/hqdefault.jpg",
  },
  {
    title: "MongoDB Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/CgDF0wBXHZc",
    thumb: "https://img.youtube.com/vi/CgDF0wBXHZc/hqdefault.jpg",
  },
  {
    title: "MongoDB Aggregation Tutorial",
    src: "https://www.youtube-nocookie.com/embed/6s0DI1YjUDg",
    thumb: "https://img.youtube.com/vi/6s0DI1YjUDg/hqdefault.jpg",
  }
];

const whatYouWillLearn = [
  "Understand NoSQL vs SQL database differences",
  "Install and connect MongoDB locally & in cloud",
  "Use MongoDB shell & Compass UI",
  "Perform CRUD operations on documents",
  "Create collections and design schemas",
  "Run queries, filters, and projections",
  "Use aggregation pipeline and indexes",
  "Integrate MongoDB with Node.js"
];

const MongoDbCoursePage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < mongoVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-green-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            MongoDB is a powerful NoSQL database used to store flexible, JSON-like documents.
            This course teaches MongoDB fundamentals and best practices, with video lessons in both
            English and Tamil.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/USV0ym3bVWQJJmNu3N/giphy.gif"
              alt="MongoDB Dev"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmJyaHk4OWlyZ3Nnd3k0ZW5sNnI1bTdhZXdmZGE5bHMzZTI0bDhhdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7LZpMpzzFz0PK1N7ZC/giphy.gif"
              alt="Database"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What you'll learn */}
        <section>
          <h2 className="text-lg font-bold text-green-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-green-400/20 text-green-400"
                    : "hover:scale-105 hover:bg-green-400/10 hover:text-green-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-green-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-green-400 mb-4">🎬 MongoDB Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={mongoVideos[videoIndex].src}
              title={mongoVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-green-400 hover:text-[#10182a] text-green-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {mongoVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === mongoVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-green-400 hover:text-[#10182a] text-green-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-green-400 mb-4">🛠️ MongoDB Projects & Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Blog application with MongoDB and Express.js</li>
            <li>Inventory tracker with aggregation</li>
            <li>Student record management system</li>
            <li>E-commerce product database design</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-green-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/codewithsadee/MongoDB-Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300 transition"
              >
                CodeWithSadee's MongoDB Project Repo
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-green-400 text-lg">🔗 Docs:</span>
              <a
                href="https://www.mongodb.com/docs/manual/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300 transition"
              >
                MongoDB Official Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MongoDbCoursePage;
