import React from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Code, Brain, Trophy, Heart, Zap } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

// Make sure to add these fonts in your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Optician+Sans&display=swap" rel="stylesheet">

const Hero: React.FC = () => {
  return (
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <ScrollAnimatedSection animation="slide-down" delay={0}>
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-800 via-teal-900 to-cyan-900 px-4 py-2 rounded-full text-sm font-medium text-emerald-200 shadow-lg shadow-emerald-900/40 animate-fade-in font-optician">
                  <Heart className="h-4 w-4 animate-pulse text-emerald-400" />
                  <span>500+ Free Courses • No Subscriptions • Forever</span>
                </div>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection animation="fade-up" delay={200}>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400 bg-clip-text animate-gradient-x drop-shadow-[0_2px_24px_rgba(16,185,129,0.25)] font-mono">
                  Learn Anything<br /><span className="text-emerald-800 font-extralight">Completely Free</span>
                </h1>
              </ScrollAnimatedSection>
              
              <ScrollAnimatedSection animation="fade-up" delay={400}>
                <p className="text-xl text-gray-300 leading-relaxed animate-fade-in font-mono font-monobold">
                  Choose from over 500 free courses in programming, data science, design, and more. 
                  Master new skills with hands-on lessons, real projects, and personalized learning paths. 
                  No hidden costs, no subscriptions – just quality education for everyone.
                </p>
              </ScrollAnimatedSection>
            </div>

            <ScrollAnimatedSection animation="fade-up" delay={600}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/courses"
                  className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-black px-8 py-4 rounded-lg font-mono font-semibold hover:from-emerald-400 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-900/40 animate-bounce-subtle tracking-widest"
                >
                  <span>Browse 500+ Free Courses</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <button className="group inline-flex items-center justify-center space-x-2 border-2 border-emerald-700 text-emerald-300 px-8 py-4 rounded-lg font-optician font-semibold hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-cyan-900/40 bg-black/60">
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </ScrollAnimatedSection>

            {/* Free Features */}
            <ScrollAnimatedSection animation="scale" delay={800}>
              <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-900 hover:shadow-lg hover:shadow-emerald-900/30 transition-shadow duration-300 font-mono">
                <h3 className="text-lg font-bold text-emerald-200 mb-4 font-optician">What's included – All Free:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {[
                    "500+ interactive courses",
                    "Real-world projects", 
                    "Community support",
                    "Free certificates"
                  ].map((feature, index) => (
                    <ScrollAnimatedSection key={index} animation="fade-left" delay={900 + index * 100}>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                        <span className="text-emerald-100 font-optician">{feature}</span>
                      </div>
                    </ScrollAnimatedSection>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* Stats */}
            <ScrollAnimatedSection animation="fade-up" delay={1000}>
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-emerald-900">
                {[
                  { value: "500+", label: "Free Courses" },
                  { value: "2M+", label: "Happy Learners" },
                  { value: "$0", label: "Always Free" }
                ].map((stat, index) => (
                  <ScrollAnimatedSection key={index} animation="scale" delay={1100 + index * 100}>
                    <div className="text-center group hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl font-bold text-cyan-300 animate-count-up drop-shadow-[0_2px_12px_rgba(34,211,238,0.25)] font-mono">{stat.value}</div>
                      <div className="text-sm text-emerald-400 font-mono">{stat.label}</div>
                    </div>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </ScrollAnimatedSection>
          </div>

          {/* Right Content - Interactive Demo */}
          <ScrollAnimatedSection animation="fade-left" delay={300}>
            <div className="relative">
              <div className="bg-black rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105 animate-float">
                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-950 rounded-lg p-4 font-mono text-sm border border-emerald-900">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse delay-400"></div>
                    <span className="text-gray-500 ml-4 animate-typing font-optician">welcome.py</span>
                  </div>
                  <div className="space-y-2">
                    <ScrollAnimatedSection animation="fade-left" delay={500}>
                      <div className="text-purple-400">def <span className="text-blue-400">welcome_to_noolnest</span>():</div>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection animation="fade-left" delay={700}>
                      <div className="text-green-400 ml-4">    return "Welcome to 500+ free courses!"</div>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection animation="fade-left" delay={900}>
                      <div className="text-gray-400 font-optician"># Start your journey:</div>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection animation="fade-left" delay={1100}>
                      <div className="text-yellow-400">print(welcome_to_noolnest())</div>
                    </ScrollAnimatedSection>
                    <ScrollAnimatedSection animation="fade-left" delay={1300}>
                      <div className="text-green-300 font-optician">→ Welcome to 500+ free courses!</div>
                    </ScrollAnimatedSection>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Code className="h-5 w-5 text-emerald-400 animate-spin-slow" />
                    <span className="text-sm font-medium text-cyan-300 font-optician">Python Basics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-500 animate-heartbeat" />
                    <span className="text-sm text-emerald-200 font-optician">Free Forever</span>
                  </div>
                </div>
              </div>
              {/* Floating widgets */}
              <div className="absolute -top-4 -right-4 bg-emerald-900 text-black p-3 rounded-lg shadow-lg animate-bounce-gentle">
                <Trophy className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cyan-900 text-black p-3 rounded-lg shadow-lg animate-bounce">
                <Zap className="h-6 w-6 text-cyan-300" />
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;