import React from "react";
import { Link } from "react-router-dom";

const PROJECTS = [
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description: "Generate AI images using advanced models.",
    tags: ["AI", "Images", "Fun"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "smart-fridge-hack",
    title: "Smart Fridge Hack",
    description: "Control and monitor your smart fridge remotely.",
    tags: ["IoT", "Home", "Automation"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather updates for any city.",
    tags: ["Weather", "API", "Dashboard"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Track your daily expenses and savings.",
    tags: ["Finance", "Tracker", "Personal"],
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description: "Showcase your work and skills online.",
    tags: ["Web", "Portfolio", "Personal"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  // Add more projects as needed
];

const Projects = () => (
  <main className="flex-1 max-w-6xl mx-auto py-10 px-4 w-full bg-black font-optician min-h-screen">
    <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-10 text-center font-mono drop-shadow-lg">
      Projects
    </h1>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project) => (
        <Link
          to={`/projects/${project.id}`}
          key={project.id}
          className="group bg-gray-900 rounded-xl p-0 shadow-lg border border-gray-800 hover:border-emerald-400 transition flex flex-col overflow-hidden hover:scale-[1.03]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover object-center"
          />
          <div className="p-6 flex-1 flex flex-col">
            <h2 className="text-xl font-bold text-emerald-300 mb-2 font-mono group-hover:text-cyan-300 transition">
              {project.title}
            </h2>
            <p className="text-gray-400 mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-emerald-900/40 text-emerald-300 text-xs px-2 py-1 rounded font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="block mt-4 text-emerald-400 font-bold text-sm group-hover:underline">
              View Project &rarr;
            </span>
          </div>
        </Link>
      ))}
    </div>
  </main>
);

export default Projects;