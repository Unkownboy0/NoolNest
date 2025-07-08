import React, { useRef, useState } from "react";

const kotlinVideos = [
  {
    title: "Kotlin Full Course for Android Development (English)",
    src: "https://www.youtube-nocookie.com/embed/F9UC9DY-vIU",
    thumb: "https://img.youtube.com/vi/F9UC9DY-vIU/hqdefault.jpg"
  },
  {
    title: "Kotlin Tutorial in Tamil",
    src: "https://www.youtube-nocookie.com/embed/RErlR7H_NN8",
    thumb: "https://img.youtube.com/vi/RErlR7H_NN8/hqdefault.jpg"
  },
  {
    title: "Kotlin Android CRUD App",
    src: "https://www.youtube-nocookie.com/embed/d7U8e-xfjlE",
    thumb: "https://img.youtube.com/vi/d7U8e-xfjlE/hqdefault.jpg"
  }
];

const whatYouWillLearn = [
  "Set up Android Studio and Kotlin project",
  "Understand Kotlin syntax and OOP",
  "Build simple UI with XML layouts",
  "Use RecyclerView, ViewBinding, and Intents",
  "Connect to SQLite or Firebase",
  "Handle permissions and camera input",
  "Publish APKs and test on emulator"
];

const KotlinAppDevPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const playerRef = useRef<HTMLIFrameElement>(null);
  const [videoIndex, setVideoIndex] = useState(0);

  const handleNext = () => {
    if (videoIndex < kotlinVideos.length - 1) setVideoIndex(videoIndex + 1);
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
            Kotlin is a modern programming language officially supported by Google for Android app
            development. This course covers Kotlin basics, UI building, Firebase and APK deployment —
            all with Tamil and English video tutorials.
          </p>
          <div className="flex gap-4 flex-wrap">
            <img
              src="https://media.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif"
              alt="Kotlin Dev"
              className="w-32 rounded-lg border border-[#232c3b] shadow"
            />
            <img
              src="https://media.giphy.com/media/3ohzdUIsjbpK3P4nDi/giphy.gif"
              alt="App Design"
              className="w-48 rounded-lg border border-[#232c3b] shadow"
            />
          </div>
        </section>

        {/* What You'll Learn */}
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

        {/* Video Lessons */}
        <section>
          <h2 className="text-lg font-bold text-green-400 mb-4">🎬 Kotlin App Dev Video Lessons (English + Tamil)</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              ref={playerRef}
              width="560"
              height="315"
              src={kotlinVideos[videoIndex].src}
              title={kotlinVideos[videoIndex].title}
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
              Video {videoIndex + 1} of {kotlinVideos.length}
            </span>
            <button
              onClick={handleNext}
              disabled={videoIndex === kotlinVideos.length - 1}
              className="px-4 py-2 rounded bg-[#232c3b] hover:bg-green-400 hover:text-[#10182a] text-green-400 font-semibold transition disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {/* Projects & Resources */}
        <section>
          <h2 className="text-lg font-bold text-green-400 mb-4">🛠️ Projects & GitHub Resources</h2>
          <ul className="list-disc ml-6 text-gray-300 space-y-1">
            <li>To-do List App with SQLite</li>
            <li>Note-taking app using ViewModel & LiveData</li>
            <li>Firebase Realtime Chat App</li>
            <li>Camera + Gallery Image App</li>
          </ul>

          <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-green-400 text-lg">🔗 GitHub Projects:</span>
              <a
                href="https://github.com/android/sunflower"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300 transition"
              >
                Android Sunflower by Google
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-green-400 text-lg">🔗 Docs:</span>
              <a
                href="https://developer.android.com/kotlin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline hover:text-green-300 transition"
              >
                Kotlin Docs on Android Developer
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default KotlinAppDevPage;
