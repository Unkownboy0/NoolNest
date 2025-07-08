import React, { useRef, useState } from "react";

const pythonVideos = [
	{
		title: "Python Full Course for Beginners",
		src: "https://www.youtube-nocookie.com/embed/m67-bOpOoPU?si=Pov4tN3IzgDbpT25",
		thumb: "https://img.youtube.com/vi/m67-bOpOoPU/hqdefault.jpg",
	},
	{
		title: "Python Tutorial for Beginners - Learn Python in 5 Hours",
		src: "https://www.youtube-nocookie.com/embed/_uQrJ0TkZlc",
		thumb: "https://img.youtube.com/vi/_uQrJ0TkZlc/hqdefault.jpg",
	},
	{
		title: "Python OOP Tutorial - Object Oriented Programming",
		src: "https://www.youtube-nocookie.com/embed/JeznW_7DlB0",
		thumb: "https://img.youtube.com/vi/JeznW_7DlB0/hqdefault.jpg",
	},
	{
		title: "Python Automation Projects",
		src: "https://www.youtube-nocookie.com/embed/6iF8Xb7Z3wQ",
		thumb: "https://img.youtube.com/vi/6iF8Xb7Z3wQ/hqdefault.jpg",
	},
	{
		title: "Python Data Science Crash Course",
		src: "https://www.youtube-nocookie.com/embed/XKHEtdqhLK8",
		thumb: "https://img.youtube.com/vi/XKHEtdqhLK8/hqdefault.jpg",
	},
];

const whatYouWillLearn = [
	"Understand Python syntax and write your first code",
	"Work with variables, data types, and operators",
	"Master conditional statements and loops",
	"Create and use functions for reusable code",
	"Solve real-world problems with logic and algorithms",
	"Work with files and modules",
	"Handle errors and exceptions",
	"Use Python for automation and scripting",
	"Intro to OOP and data science basics",
];

const PythonBasicsPage: React.FC = () => {
	const [current, setCurrent] = useState(0);
	const [hovered, setHovered] = useState<number | null>(null);
	const playerRef = useRef<HTMLIFrameElement>(null);
	const [videoIndex, setVideoIndex] = useState(0);

	// Go to next video
	const handleNext = () => {
		if (current < pythonVideos.length - 1) setCurrent(current + 1);
	};

	// Go to previous video
	const handlePrev = () => {
		if (current > 0) setCurrent(current - 1);
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
	}, [current]);

	return (
		<div className="bg-[#10182a] min-h-screen font-sans text-gray-100 transition-colors duration-500 w-full">
			{/* Header */}

			{/* Banner */}

			{/* Main Content */}
			<main className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-8">
				{/* Introduction */}
				<section>
					<h2 className="text-xl font-bold text-[#ffe066] mb-2">
						📝 Introduction
					</h2>
					<p className="mb-4 text-gray-200">
						Welcome to the ultimate Python course! Whether you're a complete beginner
						or looking to brush up on advanced concepts, this course covers
						everything: syntax, logic, OOP, data science, automation, and more.
						You'll build real projects and gain the skills to solve real-world
						problems.
					</p>
					<div className="flex flex-wrap gap-4 items-center mb-4">
						<img
							src="https://media.giphy.com/media/KAq5w47R9rmTuvWOWa/giphy.gif"
							alt="Python Animation"
							className="w-32 rounded-lg border border-[#232c3b] shadow"
						/>
						<img
							src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
							alt="Coding Animation"
							className="w-48 rounded-lg border border-[#232c3b] shadow"
						/>
					</div>
					<p className="mb-2 text-gray-300">
						Here's what you'll master in this course:
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
						🎬 Python Video Lessons
					</h2>
					<div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden shadow-lg flex justify-center">
						<iframe
							ref={playerRef}
							width="560"
							height="315"
							src={pythonVideos[videoIndex].src}
							title={pythonVideos[videoIndex].title}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
						></iframe>
					</div>
					<div className="flex justify-between items-center mb-4">
						<button
							onClick={() => setVideoIndex((i) => Math.max(0, i - 1))}
							disabled={videoIndex === 0}
							className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#ffe066] hover:text-[#10182a] text-[#ffe066] font-semibold transition disabled:opacity-50"
						>
							Previous
						</button>
						<span className="text-gray-300 font-mono">
							Video {videoIndex + 1} of {pythonVideos.length}
						</span>
						<button
							onClick={() =>
								setVideoIndex((i) => Math.min(pythonVideos.length - 1, i + 1))
							}
							disabled={videoIndex === pythonVideos.length - 1}
							className="px-4 py-2 rounded bg-[#232c3b] hover:bg-[#ffe066] hover:text-[#10182a] text-[#ffe066] font-semibold transition disabled:opacity-50"
						>
							Next
						</button>
					</div>
				</section>

				{/* Python Examples & Projects */}
				<section>
					<h2 className="text-lg font-bold text-[#ffe066] mb-4">
						🐍 Python Examples & Projects
					</h2>
					<div className="flex flex-wrap gap-4 mb-4">
						<img
							src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
							alt="Python Project"
							className="w-40 rounded shadow"
						/>
						<img
							src="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif"
							alt="Python Project"
							className="w-40 rounded shadow"
						/>
						<img
							src="https://media.giphy.com/media/5ndklThG9vUUdTmgMn/giphy.gif"
							alt="Python Project"
							className="w-40 rounded shadow"
						/>
					</div>
					<ul className="list-disc ml-6 text-gray-300 space-y-1">
						<li>Build a calculator, a to-do app, and a simple game</li>
						<li>Automate boring tasks with scripts</li>
						<li>Analyze data and visualize results</li>
						<li>Work with files, APIs, and databases</li>
					</ul>
					<div className="mt-6 bg-[#232c3b] rounded-lg p-4 shadow flex flex-col gap-2">
						<div className="flex items-center gap-3">
							<span className="font-bold text-[#ffe066] text-lg">
								🔗 Projects:
							</span>
							<a
								href="https://www.codewithfaraz.com/article/129/50-python-projects-with-source-code-beginner-to-advanced#2-calculator"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#ffe066] underline hover:text-yellow-300 transition"
							>
								50 Python Projects with Source Code (Beginner to Advanced)
							</a>
						</div>
						<div className="flex items-center gap-3">
							<span className="font-bold text-[#ffe066] text-lg">
								🔗 Project Github:
							</span>
							<a
								href="https://amazing-python-scripts.avinashranjan.com/scripts"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#ffe066] underline hover:text-yellow-300 transition"
							>
								Amazing Python Scripts Collection
							</a>
						</div>
					</div>
				</section>

				{/* Resources */}
				<section>
					<h2 className="text-lg font-bold text-[#ffe066] mb-4">
						📚 More Python Resources
					</h2>
					<ul className="list-disc ml-6 text-gray-300 space-y-1">
						<li>
							<a
								href="https://docs.python.org/3/tutorial/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#ffe066] underline"
							>
								Official Python Tutorial
							</a>
						</li>
						<li>
							<a
								href="https://github.com/python/cpython"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#ffe066] underline"
							>
								Python Source Code on GitHub
							</a>
						</li>
						<li>
							<a
								href="https://realpython.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#ffe066] underline"
							>
								Real Python Tutorials
							</a>
						</li>
						<li>
							<a
								href="https://pypi.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#ffe066] underline"
							>
								Python Package Index (PyPI)
							</a>
						</li>
						<li>
							<a
								href="https://www.learnpython.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[#ffe066] underline"
							>
								Interactive Python Learning
							</a>
						</li>
					</ul>
				</section>
			</main>

			{/* Footer */}
			<footer className="bg-[#0d1321] text-xs text-gray-400 py-8 mt-8 border-t border-[#232c3b]">
				<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
					<div>
						<p className="mb-2 font-bold text-[#ffe066]">Python Course</p>
						<p>
							This is a demo Python course page for learning and practice.
							<br />
							Donations go toward our education initiatives, and help pay for
							servers, services, and staff.
						</p>
						<a
							href="#"
							className="underline text-[#ffe066]"
						>
							You can make a tax-deductible donation here.
						</a>
					</div>
					<div>
						<p className="font-bold text-[#ffe066] mb-2">
							Python Learning Links
						</p>
						<ul className="list-none space-y-1">
							<li>
								<a
									href="https://docs.python.org/3/"
									className="text-[#ffe066] underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									Python Docs
								</a>
							</li>
							<li>
								<a
									href="https://pypi.org/"
									className="text-[#ffe066] underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									PyPI
								</a>
							</li>
							<li>
								<a
									href="https://realpython.com/"
									className="text-[#ffe066] underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									Real Python
								</a>
							</li>
							<li>
								<a
									href="https://www.learnpython.org/"
									className="text-[#ffe066] underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									LearnPython.org
								</a>
							</li>
							<li>
								<a
									href="https://github.com/python/cpython"
									className="text-[#ffe066] underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									Python on GitHub
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="text-center mt-4 text-gray-600">
					<small>
						© Demo Platform. This is a Python learning page inspired by modern
						course platforms.
					</small>
				</div>
			</footer>

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

export default PythonBasicsPage;