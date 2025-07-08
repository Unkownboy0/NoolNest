import React, { useRef, useState } from "react";

const javaVideos = [
    {
        title: "Java Full Course for Beginners",
        src: "https://www.youtube-nocookie.com/embed/A74TOX803D0",
        thumb: "https://img.youtube.com/vi/A74TOX803D0/hqdefault.jpg",
    },
    {
        title: "Java OOP Tutorial - Object Oriented Programming",
        src: "https://www.youtube-nocookie.com/embed/UmnCZ7-9yDY",
        thumb: "https://img.youtube.com/vi/UmnCZ7-9yDY/hqdefault.jpg",
    },
    {
        title: "Java GUI Programming - Swing Tutorial",
        src: "https://www.youtube-nocookie.com/embed/5o3fMLPY7qY",
        thumb: "https://img.youtube.com/vi/5o3fMLPY7qY/hqdefault.jpg",
    },
    {
        title: "Java App Development Crash Course",
        src: "https://www.youtube-nocookie.com/embed/GrEKMHGYyns",
        thumb: "https://img.youtube.com/vi/GrEKMHGYyns/hqdefault.jpg",
    },
];

const whatYouWillLearn = [
    "Understand Java syntax and write your first program",
    "Work with variables, data types, and operators",
    "Master conditional statements and loops",
    "Create and use methods and classes",
    "Object Oriented Programming (OOP) concepts",
    "Build GUI applications with Swing",
    "Handle exceptions and file I/O",
    "Intro to Java app development",
];

const JavaProgrammingPage: React.FC = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const playerRef = useRef<HTMLIFrameElement>(null);
    const [videoIndex, setVideoIndex] = useState(0);

    // Go to next video
    const handleNext = () => {
        if (videoIndex < javaVideos.length - 1) setVideoIndex(videoIndex + 1);
    };

    // Go to previous video
    const handlePrev = () => {
        if (videoIndex > 0) setVideoIndex(videoIndex - 1);
    };

    // Auto-next when video ends (YouTube JS API)
    React.useEffect(() => {
        function onMessage(e: MessageEvent) {
            if (
                typeof e.data === "object" &&
                e.data &&
                e.data.event === "onStateChange" &&
                e.data.info === 0 // 0 = ended
            ) {
                handleNext();
            }
        }
        window.addEventListener("message", onMessage);
        return () => window.removeEventListener("message", onMessage);
        // eslint-disable-next-line
    }, [videoIndex]);

    return (
        <div className="bg-[#10182a] min-h-screen font-sans text-gray-100 transition-colors duration-500 w-full">
            <main className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-8">
                {/* Introduction */}
                <section>
                    <h2 className="text-xl font-bold text-[#ffe066] mb-2">
                        📝 Introduction
                    </h2>
                    <p className="mb-4 text-gray-200">
                        Java is a powerful, versatile, and widely-used programming language known for its portability, object-oriented features, and strong community support. It is used for building everything from desktop and mobile applications to large-scale enterprise systems. Java's "write once, run anywhere" philosophy makes it a top choice for cross-platform development.
                    </p>
                    <div className="flex flex-wrap gap-4 items-center mb-4">
                        <img
                            src="https://user-images.githubusercontent.com/45304978/197178414-391a5285-2ea4-46ed-b6d9-58dfd9789fd1.gif"
                            alt="Java Animation"
                            className="w-32 rounded-lg border border-[#232c3b] shadow"
                        />
                        <img
                            src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
                            alt="Coding Animation"
                            className="w-48 rounded-lg border border-[#232c3b] shadow"
                        />
                    </div>
                    <p className="mb-2 text-gray-300">
                        Here's what you'll master in this Java programming course:
                    </p>
                </section>

                {/* What you'll learn */}
                <section>
                    <h2 className="text-lg font-bold text-[#ffe066] mb-4">
                        ✨ What you'll learn
                    </h2>
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
                                style={{
                                    transition: "all 0.3s cubic-bezier(.4,1.4,.6,1.1)",
                                    animation: `fadeInUp 0.5s ${idx * 0.08 + 0.1}s both`,
                                }}
                            >
                                <span className="mr-3 text-[#ffe066] text-lg">✔</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Playlist Video */}
                <section>
                    <h2 className="text-lg font-bold text-[#ffe066] mb-4">
                        🎬 Java Video Lessons
                    </h2>
                    <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
                        <iframe
                            ref={playerRef}
                            width="560"
                            height="315"
                            src={javaVideos[videoIndex].src}
                            title={javaVideos[videoIndex].title}
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
                            Video {videoIndex + 1} of {javaVideos.length}
                        </span>
                        <button
                            onClick={handleNext}
                            disabled={videoIndex === javaVideos.length - 1}
                            className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#ffe066] hover:text-[#10182a] text-[#ffe066] font-semibold transition disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </section>

                {/* Java Examples & Projects */}
                <section>
                    <h2 className="text-lg font-bold text-[#ffe066] mb-4">
                        ☕ Java Examples & Projects
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-4">
                        <img
                            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzBsYmxhYmkzbTZxYnd6NDY1NDJkM2dnMzRjdmQxMmYwZjN0NWI5cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/2IudUHdI075HL02Pkk/200.webp"
                            alt="Java Project"
                            className="w-40 rounded shadow"
                        />
                        <img
                            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzBsYmxhYmkzbTZxYnd6NDY1NDJkM2dnMzRjdmQxMmYwZjN0NWI5cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d314tXXrfzPGqZlnMu/200.webp"
                            alt="Java Project"
                            className="w-40 rounded shadow"
                        />
                        <img
                            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzBsYmxhYmkzbTZxYnd6NDY1NDJkM2dnMzRjdmQxMmYwZjN0NWI5cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/j7QgmxatnXo0YbchVK/giphy.webp"
                            alt="Java Project"
                            className="w-40 rounded shadow"
                        />
                    </div>
                    <ul className="list-disc ml-6 text-gray-300 space-y-1">
                        <li>
                            <span className="font-semibold text-[#ffe066]">Calculator App:</span> A simple calculator with GUI using Java Swing.
                        </li>
                        <li>
                            <span className="font-semibold text-[#ffe066]">To-Do List:</span> Manage tasks with add, edit, and delete features.
                        </li>
                        <li>
                            <span className="font-semibold text-[#ffe066]">Number Guessing Game:</span> Console-based game to guess a random number.
                        </li>
                        <li>
                            <span className="font-semibold text-[#ffe066]">File Organizer:</span> Automatically sort and organize files in folders.
                        </li>
                        <li>
                            <span className="font-semibold text-[#ffe066]">Student Database:</span> CRUD operations for student records using Java and SQLite.
                        </li>
                    </ul>
                    <div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-[#ffe066] text-lg">
                                🔗 Projects:
                            </span>
                            <a
                                href="https://github.com/kishanrajput23/Java-Projects-Collections"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ffe066] underline hover:text-yellow-300 transition"
                            >
                                Java Algorithms & Projects Collection
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-[#ffe066] text-lg">
                                🔗 Project Github:
                            </span>
                            <a
                                href="https://github.com/ashishps1/awesome-system-design-resources?tab=readme-ov-file"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ffe066] underline hover:text-yellow-300 transition"
                            >
                                Java Design Patterns Collection
                            </a>
                        </div>
                    </div>
                </section>

                {/* Resources */}
                <section>
                    <h2 className="text-lg font-bold text-[#ffe066] mb-4">
                        📚 More Java Resources
                    </h2>
                    <ul className="list-disc ml-6 text-gray-300 space-y-1">
                        <li>
                            <a
                                href="https://docs.oracle.com/javase/tutorial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ffe066] underline"
                            >
                                Official Java Tutorial
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/TheAlgorithms/Java"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ffe066] underline"
                            >
                                Java Algorithms on GitHub
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.javatpoint.com/java-tutorial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ffe066] underline"
                            >
                                JavaTpoint Java Tutorials
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.geeksforgeeks.org/java/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ffe066] underline"
                            >
                                GeeksforGeeks Java
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.learnjavaonline.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ffe066] underline"
                            >
                                LearnJavaOnline.org
                            </a>
                        </li>
                    </ul>
                </section>
            </main>

            {/* Footer */}

            {/* Animation keyframes */}
            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
};

export default JavaProgrammingPage;