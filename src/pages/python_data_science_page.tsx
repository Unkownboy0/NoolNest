import React, { useRef, useState } from "react";

const dataSciVideos = [
  {
    title: "Python for Data Science - Full Course (English)",
    src: "https://www.youtube-nocookie.com/embed/r-uOLxNrNk8",
    thumb: "https://img.youtube.com/vi/r-uOLxNrNk8/hqdefault.jpg",
  },
  {
    title: "Data Science with Python in Tamil",
    src: "https://www.youtube-nocookie.com/embed/E2E9IQdoyMU",
    thumb: "https://img.youtube.com/vi/E2E9IQdoyMU/hqdefault.jpg",
  },
  {
    title: "Data Analysis Project using Pandas",
    src: "https://www.youtube-nocookie.com/embed/ZjU62K-vBLc",
    thumb: "https://img.youtube.com/vi/ZjU62K-vBLc/hqdefault.jpg",
  }
];

const whatYouWillLearn = [
  "Use Python libraries: Numpy, Pandas, Matplotlib",
  "Perform data cleaning and preprocessing",
  "Visualize data with charts and plots",
  "Analyze large CSV datasets",
  "Use descriptive statistics and aggregations",
  "Understand basic machine learning workflows",
  "Explore real-world datasets (Kaggle, public APIs)",
  "Build interactive dashboards and reports"
];

const PythonDataSciencePage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < dataSciVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-yellow-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            Python is the most popular language for data science. In this course, you’ll learn how to
            use libraries like Numpy, Pandas, and Matplotlib to clean, analyze, and visualize real
            data — explained in both English and Tamil.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/kH1DBkPNyZPOk0x4RW/giphy.gif"
              alt="Python Data Science"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/kH1DBkPNyZPOk0x4RW/giphy.gif"
              alt="Charts Animation"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What you'll learn */}
        <section>
          <h2 className="text-lg font-bold text-yellow-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-yellow-400/20 text-yellow-400"
                    : "hover:scale-105 hover:bg-yellow-400/10 hover:text-yellow-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-yellow-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Playlist */}
        <section>
          <h2 className="text-lg font-bold text-yellow-400 mb-4">🎬 Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={dataSciVideos[videoIndex].src}
              title={dataSciVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-yellow-400 hover:text-[#10182a] text-yellow-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {dataSciVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === dataSciVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-yellow-400 hover:text-[#10182a] text-yellow-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-yellow-400 mb-4">🛠️ Projects & GitHub Repos</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>COVID-19 Data Tracker & Visualizer</li>
            <li>Movie Dataset Analysis with Pandas</li>
            <li>Stock Market Trend Plotting</li>
            <li>Beginner ML model with sklearn</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-yellow-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/datablist/sample-csv-files"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 underline hover:text-yellow-300 transition"
              >
                Sample Datasets & CSV Repos
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-yellow-400 text-lg">🔗 Tools:</span>
              <a
                href="https://www.kaggle.com/datasets"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 underline hover:text-yellow-300 transition"
              >
                Kaggle Dataset Explorer
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PythonDataSciencePage;
