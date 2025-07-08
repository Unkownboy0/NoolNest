import React, { useRef, useState } from "react";

const matlabVideos = [
  {
    title: "MATLAB Full Course for Engineers (English)",
    src: "https://www.youtube-nocookie.com/embed/XXu4bMu2jXY",
    thumb: "https://img.youtube.com/vi/XXu4bMu2jXY/hqdefault.jpg"
  },
  {
    title: "MATLAB Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/E1a4WmTx9yo",
    thumb: "https://img.youtube.com/vi/E1a4WmTx9yo/hqdefault.jpg"
  },
  {
    title: "Signal Processing Projects in MATLAB",
    src: "https://www.youtube-nocookie.com/embed/0Hml-F3NJS8",
    thumb: "https://img.youtube.com/vi/0Hml-F3NJS8/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "MATLAB environment and interface",
  "Matrix operations and array manipulation",
  "Control flow: loops, conditionals, functions",
  "Plotting graphs and visualizing data",
  "Signal and image processing basics",
  "Simulink modeling overview",
  "Engineering computation and simulation"
];

const MatlabPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < matlabVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-yellow-300 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            MATLAB is a high-performance language for technical computing, visualization, and programming.
            It is widely used in engineering, math, physics, and simulations. Learn MATLAB basics,
            visualization, and processing tools with English + Tamil tutorials.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif"
              alt="MATLAB Demo"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/BpDYzs6sP9ZYY/giphy.gif"
              alt="Engineering Calculation"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-yellow-300 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-yellow-300/20 text-yellow-300"
                    : "hover:scale-105 hover:bg-yellow-300/10 hover:text-yellow-300"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-yellow-300 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lessons */}
        <section>
          <h2 className="text-lg font-bold text-yellow-300 mb-4">🎬 MATLAB Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={matlabVideos[videoIndex].src}
              title={matlabVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-yellow-300 hover:text-[#10182a] text-yellow-300 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {matlabVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === matlabVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-yellow-300 hover:text-[#10182a] text-yellow-300 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & GitHub Resources */}
        <section>
          <h2 className="text-lg font-bold text-yellow-300 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>Signal denoising with filter design</li>
            <li>Image enhancement using matrix operations</li>
            <li>Fourier analysis on sound samples</li>
            <li>Simulink model for basic DC motor</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-yellow-300 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/matlab-deep-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 underline hover:text-yellow-200 transition"
              >
                MATLAB Deep Learning Demos
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-yellow-300 text-lg">🔗 Docs:</span>
              <a
                href="https://www.mathworks.com/help/matlab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 underline hover:text-yellow-200 transition"
              >
                MATLAB Official Documentation
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MatlabPage;
