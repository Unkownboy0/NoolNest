import React from "react";
import { useParams, Link } from "react-router-dom";

// Should match the PROJECTS array in Projects.tsx
const PROJECTS = [
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    description: "Generate AI images using advanced models.",
    tags: ["AI", "Images", "Fun"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    details: "This project uses state-of-the-art AI models to generate unique images from text prompts. Built with Python and React.",
  },
  {
    id: "smart-fridge-hack",
    title: "Smart Fridge Hack",
    description: "Control and monitor your smart fridge remotely.",
    tags: ["IoT", "Home", "Automation"],
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    details: "A smart home project to monitor and control your fridge temperature, inventory, and alerts using IoT devices.",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather updates for any city.",
    tags: ["Weather", "API", "Dashboard"],
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    details: "A dashboard that fetches and displays real-time weather data using public APIs. Built with React and Chart.js.",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Track your daily expenses and savings.",
    tags: ["Finance", "Tracker", "Personal"],
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80",
    details: "A simple app to track your expenses, categorize them, and visualize your spending habits.",
  },
  {
    id: "portfolio-site",
    title: "Portfolio Website",
    description: "Showcase your work and skills online.",
    tags: ["Web", "Portfolio", "Personal"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    details: "A personal website template to showcase your projects, resume, and contact info. Built with React and Tailwind CSS.",
  },
];

const ProjectView = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-100">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects" className="text-emerald-400 underline">
          Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-2xl mx-auto py-12 px-4 bg-black min-h-screen font-optician">
      <Link to="/projects" className="text-emerald-400 underline mb-6 inline-block">
        &larr; Back to Projects
      </Link>
      <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover object-center rounded mb-6"
        />
        <h1 className="text-3xl font-bold text-emerald-300 mb-2 font-mono">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-emerald-900/40 text-emerald-300 text-xs px-2 py-1 rounded font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="text-gray-400">{project.details}</div>
      </div>
    </main>
  );
};

export default ProjectView;