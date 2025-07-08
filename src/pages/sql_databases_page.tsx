import React, { useRef, useState } from "react";

const sqlVideos = [
  {
    title: "SQL Full Course for Beginners (English)",
    src: "https://www.youtube-nocookie.com/embed/HXV3zeQKqGY",
    thumb: "https://img.youtube.com/vi/HXV3zeQKqGY/hqdefault.jpg",
  },
  {
    title: "SQL Tutorial in Tamil - Full Course",
    src: "https://www.youtube-nocookie.com/embed/bu5wXjz2KvU",
    thumb: "https://img.youtube.com/vi/bu5wXjz2KvU/hqdefault.jpg",
  },
  {
    title: "Advanced SQL Tutorial (English)",
    src: "https://www.youtube-nocookie.com/embed/7S_tz1z_5bA",
    thumb: "https://img.youtube.com/vi/7S_tz1z_5bA/hqdefault.jpg",
  }
];

const whatYouWillLearn = [
  "Understand relational databases",
  "Perform CRUD operations (SELECT, INSERT, UPDATE, DELETE)",
  "Use WHERE, GROUP BY, and ORDER BY",
  "Apply JOINs to combine tables",
  "Design database schemas",
  "Use primary keys, foreign keys, constraints",
  "Write subqueries and nested queries",
  "Create real-world database projects"
];

const SqlDatabasesPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < sqlVideos.length - 1) setVideoIndex(videoIndex + 1);
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
            SQL (Structured Query Language) is used to communicate with databases. In this course,
            you'll learn how to work with SQL databases like MySQL, PostgreSQL, and SQLite with both
            English and Tamil video lessons.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/WFZvB7VIXBgiz3oDXE/giphy.gif"
              alt="SQL Animation"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif"
              alt="DB Coding"
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
          <h2 className="text-lg font-bold text-[#ffe066] mb-4">🎬 SQL Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={sqlVideos[videoIndex].src}
              title={sqlVideos[videoIndex].title}
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
              Video {videoIndex + 1} of {sqlVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === sqlVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#ffe066] hover:text-[#10182a] text-[#ffe066] font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-[#ffe066] mb-4">🛠️ SQL Projects & Practice</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Employee database management</li>
            <li>Library system with borrowing records</li>
            <li>Sales dashboard with queries and filters</li>
            <li>Design ER diagrams and write relational schemas</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#ffe066] text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/savitha-prabu/SQL-Queries-and-Projects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffe066] underline hover:text-yellow-300 transition"
              >
                Awesome SQL Projects Collection
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#ffe066] text-lg">🔗 Resource:</span>
              <a
                href="https://www.sqltutorial.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffe066] underline hover:text-yellow-300 transition"
              >
                SQLTutorial.org (Interactive Examples)
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SqlDatabasesPage;
