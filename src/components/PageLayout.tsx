import React, { ReactNode } from 'react';
import { Code, Brain, Zap } from 'lucide-react';

interface PageLayoutProps {
  children: ReactNode;
  // Optionally add props for custom colors/animations per page
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <section className="relative bg-black font-optician py-20 overflow-hidden min-h-[90vh]">
    {/* Animated grid overlay */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="w-full h-full bg-[radial-gradient(circle,rgba(16,185,129,0.06)_1px,transparent_1px)] [background-size:32px_32px]"></div>
    </div>
    {/* Glowing orbs */}
    <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500 opacity-30 rounded-full blur-2xl animate-pulse-slow z-0"></div>
    <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500 opacity-20 rounded-full blur-2xl animate-pulse-slow z-0"></div>
    {/* Floating icons */}
    <div className="absolute top-32 right-24 animate-float z-10">
      <div className="bg-black p-3 rounded-full shadow-lg border border-emerald-900/40">
        <Code className="h-6 w-6 text-emerald-400 animate-spin-slow" />
      </div>
    </div>
    <div className="absolute bottom-32 left-24 animate-float-reverse z-10">
      <div className="bg-black p-3 rounded-full shadow-lg border border-cyan-900/40">
        <Brain className="h-6 w-6 text-cyan-400 animate-bounce" />
      </div>
    </div>
    {/* Extra animated widget */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-fast z-0">
      <Zap className="h-16 w-16 text-emerald-700 opacity-10" />
    </div>
    {/* Page content */}
    <div className="relative z-10">
      {children}
    </div>
  </section>
);

export default PageLayout;

// Example for Home page
// filepath: d:\project (2)\project\src\pages\Home.tsx
import React from 'react';
import PageLayout from '../components/PageLayout';
import Hero from '../components/Hero';

const Home: React.FC = () => (
  <PageLayout>
    <Hero />
    {/* ...other home page content... */}
  </PageLayout>
);

export default Home;