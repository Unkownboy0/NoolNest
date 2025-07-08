import React, { useRef, useState } from "react";

const rVideos = [
  {
    title: "R Programming for Data Science (English)",
    src: "https://www.youtube-nocookie.com/embed/_V8eKsto3Ug",
    thumb: "https://img.youtube.com/vi/_V8eKsto3Ug/hqdefault.jpg"
  },
  {
    title: "R Language Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/TbPAkNVI4CI",
    thumb: "https://img.youtube.com/vi/TbPAkNVI4CI/hqdefault.jpg"
  },
  {
    title: "Data Visualization with R",
    src: "https://www.youtube-nocookie.com/embed/g-8JChJbGb0",
    thumb: "https://img.youtube.com/vi/g-8JChJbGb0/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Understand R syntax and environment",
  "Load, clean, and manipulate datasets",
  "Use tidyverse packages like dplyr and ggplot2",
  "Create statistical visualizations",
  "Perform linear regression and basic ML",
  "Import/export data from Excel, CSV, DBs",
  "Build simple dashboards using R Shiny"
];

const RLanguagePage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < rVideos.length - 1) setVideoIndex(videoIndex + 1);
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
          <h2 className="text-xl font-bold text-sky-400 mb-2">📝 Introduction</h2>
          <p className="text-gray-300 mb-4">
            R is a statistical programming language widely used in data science, research, and data
            visualization. In this course, you'll explore the R ecosystem using tidyverse, create charts,
            analyze datasets, and even build dashboards. Includes Tamil and English video support.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/q7UpUzo6RduXeWtnRJ/giphy.gif"
              alt="R Studio Data"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/dBu0SGqDLn4BOvNm4S/giphy.gif"
              alt="Data Analytics"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
        <section>
          <h2 className="text-lg font-bold text-sky-400 mb-4">✨ What you'll learn</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouWillLearn.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center px-4 py-3 rounded-lg bg-[#232c3b] shadow transition-all duration-300 cursor-pointer ${
                  hovered === idx
                    ? "scale-105 bg-sky-400/20 text-sky-400"
                    : "hover:scale-105 hover:bg-sky-400/10 hover:text-sky-400"
                }`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <span className="mr-3 text-sky-400 text-lg">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Video Lessons */}
        <section>
          <h2 className="text-lg font-bold text-sky-400 mb-4">🎬 R Programming Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={rVideos[videoIndex].src}
              title={rVideos[videoIndex].title}
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
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-sky-400 hover:text-[#10182a] text-sky-400 font-semibold transition disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-300 font-mono">
              Video {videoIndex + 1} of {rVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === rVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-sky-400 hover:text-[#10182a] text-sky-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & GitHub Resources */}
        <section>
          <h2 className="text-lg font-bold text-sky-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>CSV Data Explorer using tidyverse</li>
            <li>Interactive Chart Dashboard with Shiny</li>
            <li>Linear Regression with real-world data</li>
            <li>Weather visualizer with ggplot2</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-sky-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/rstudio/shiny-examples"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-blue-300 transition"
              >
                RStudio Shiny Example Apps
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-sky-400 text-lg">🔗 Docs:</span>
              <a
                href="https://cran.r-project.org/manuals.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 underline hover:text-blue-300 transition"
              >
                R Project Documentation (CRAN)
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RLanguagePage;
