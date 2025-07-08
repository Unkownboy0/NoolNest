import React, { useRef, useState } from "react";

const aiVideos = [
  {
    title: "AI for Beginners with Python (English)",
    src: "https://www.youtube-nocookie.com/embed/JMUxmLyrhSk",
    thumb: "https://img.youtube.com/vi/JMUxmLyrhSk/hqdefault.jpg"
  },
  {
    title: "Artificial Intelligence in Tamil",
    src: "https://www.youtube-nocookie.com/embed/7TtG0brXpXc",
    thumb: "https://img.youtube.com/vi/7TtG0brXpXc/hqdefault.jpg"
  },
  {
    title: "Python AI Projects for Beginners",
    src: "https://www.youtube-nocookie.com/embed/V7nDXU8LzY8",
    thumb: "https://img.youtube.com/vi/V7nDXU8LzY8/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Understand the basics of Artificial Intelligence",
  "Learn AI vs ML vs Deep Learning",
  "Use Python libraries like NumPy & scikit-learn",
  "Build a simple chatbot with Python",
  "Create rule-based and logic-based systems",
  "Explore OpenCV for vision-based AI",
  "Train small models on structured data",
  "Understand ethical use of AI tools"
];

const AIBasicsPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < aiVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-fuchsia-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Artificial Intelligence allows computers to simulate human intelligence such as learning,
            decision-making, and problem solving. In this beginner-friendly course, you'll explore
            the fundamentals of AI using Python. Tamil + English videos available!
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif"
              alt="AI Animation"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/xUOxf3mC0KJZqz6s3G/giphy.gif"
              alt="AI Brain"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-fuchsia-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-fuchsia-400/20 text-fuchsia-400"
                    : "hover:scale-105 hover:bg-fuchsia-400/10 hover:text-fuchsia-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-fuchsia-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-fuchsia-400 mb-4">🎬 AI Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={aiVideos[videoIndex].src}
              title={aiVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-fuchsia-400 hover:text-[#10182a] text-fuchsia-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {aiVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === aiVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-fuchsia-400 hover:text-[#10182a] text-fuchsia-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-fuchsia-400 mb-4">🛠️ Projects & Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>AI Chatbot using rule-based logic</li>
            <li>Face detection using OpenCV</li>
            <li>Basic movie recommender system</li>
            <li>Tic-Tac-Toe AI using minimax</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-fuchsia-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/llSourcell/AI_Experiments"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 underline hover:text-pink-300 transition"
              >
                AI Experiments by Sourav
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-fuchsia-400 text-lg">🔗 Learning Platform:</span>
              <a
                href="https://www.learnwithgoogle.com/ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-fuchsia-400 underline hover:text-pink-300 transition"
              >
                Google Learn AI for Beginners
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIBasicsPage;
