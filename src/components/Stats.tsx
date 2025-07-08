import React from 'react';
import { TrendingUp, Award, Globe, Zap, Star, Diamond, BookOpen } from 'lucide-react'; // Changed import: Heart → BookOpen
import ScrollAnimatedSection from './ScrollAnimatedSection';
import { useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  {
    icon: TrendingUp,
    value: '2M+',
    label: 'Free Learners',
    description: 'Students learning without paying a cent'
  },
  {
    icon: Award,
    value: '500K+',
    label: 'Free Certificates',
    description: 'Certificates earned at no cost'
  },
  {
    icon: Globe,
    value: '190+',
    label: 'Countries',
    description: 'Free education reaching worldwide'
  },
  {
    icon: BookOpen, // Changed from Heart to BookOpen
    value: '100%',
    label: 'Always Free',
    description: 'Our commitment to free education'
  }
];

const boxBg = [
  "from-emerald-900/60 via-black to-cyan-900/40",
  "from-yellow-900/60 via-black to-emerald-900/40",
  "from-cyan-900/60 via-black to-yellow-900/40",
  "from-pink-900/60 via-black to-emerald-900/40"
];

const borderGlow = [
  "group-hover:border-emerald-400",
  "group-hover:border-yellow-300",
  "group-hover:border-cyan-400",
  "group-hover:border-pink-400"
];

const iconGlow = [
  "group-hover:shadow-emerald-400/40",
  "group-hover:shadow-yellow-300/40",
  "group-hover:shadow-cyan-400/40",
  "group-hover:shadow-pink-400/40"
];

const Stats = () => {
  const { containerRef, visibleItems } = useStaggeredScrollAnimation(stats.length, 150);

  return (
    <section className="py-20 bg-black font-roboto relative overflow-hidden">
      {/* Animated grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(16,185,129,0.08)_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>
      {/* Glowing orbs */}
      <div className="absolute top-8 left-8 w-32 h-32 bg-emerald-500 opacity-20 rounded-full blur-2xl animate-pulse-slow z-0"></div>
      <div className="absolute bottom-8 right-8 w-40 h-40 bg-cyan-500 opacity-20 rounded-full blur-2xl animate-pulse-slow z-0"></div>
      {/* Floating widgets */}
      <div className="absolute top-1/3 right-1/4 animate-float z-0">
        <div className="bg-black p-3 rounded-full shadow-lg border border-emerald-900/40">
          <Zap className="h-6 w-6 text-emerald-400 animate-spin-slow" />
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float-reverse z-0">
        <div className="bg-black p-3 rounded-full shadow-lg border border-cyan-900/40">
          <Star className="h-6 w-6 text-yellow-400 animate-bounce" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <ScrollAnimatedSection animation="fade-up" delay={0}>
            <h2 className="text-4xl md:text-5xl font-alegreya font-bold text-transparent bg-gradient-to-r from-emerald-300 via-cyan-300 to-yellow-200 bg-clip-text drop-shadow-lg mb-4 animate-gradient-x">
              Join Millions Learning for Free
            </h2>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection animation="fade-up" delay={200}>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto font-roboto-slab animate-fade-in">
              Be part of a global community that believes education should be free and accessible to everyone, everywhere.
            </p>
          </ScrollAnimatedSection>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={`text-center group relative transition-all duration-700 select-none ${
                  visibleItems[index] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-90'
                }`}
                style={{ 
                  transitionDelay: visibleItems[index] ? '0ms' : `${index * 150}ms`,
                  transitionDuration: '700ms',
                  transition: 'all 0.7s cubic-bezier(0.4,0,0.2,1)'
                }}
              >
                {/* Animated border glow and floating gradient ring */}
                <div className={`absolute -inset-1 rounded-3xl pointer-events-none blur-md opacity-0 group-hover:opacity-80 transition-all duration-700 z-0 bg-gradient-to-br ${boxBg[index % boxBg.length]}`}></div>
                <div className={`absolute -inset-2 rounded-3xl pointer-events-none blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-700 z-0 bg-gradient-to-br ${boxBg[(index+1) % boxBg.length]}`}></div>
                <div className={`relative bg-gradient-to-br ${boxBg[index % boxBg.length]} backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-transparent group-hover:scale-105 group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-700 z-10 ${borderGlow[index % borderGlow.length]}`}>
                  {/* Animated icon with pulse, rotate, and shadow */}
                  <div className={`bg-black/70 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-125 group-hover:rotate-[18deg] shadow-lg ${iconGlow[index % iconGlow.length]}`}>
                    <IconComponent className="h-8 w-8 text-emerald-300 group-hover:animate-pulse group-hover:text-yellow-200 transition-colors duration-500" />
                  </div>
                  {/* Value with bounce and gradient */}
                  <div className="text-4xl font-bold text-white mb-2 font-alegreya animate-count-up group-hover:scale-110 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-200 group-hover:via-cyan-300 groupHover:to-emerald-300 group-hover:bg-clip-text transition-all duration-500 drop-shadow">
                    {stat.value}
                  </div>
                  {/* Label with underline and color shift */}
                  <div className="text-xl font-semibold text-emerald-200 mb-2 font-roboto-slab group-hover:text-cyan-200 group-hover:underline group-hover:decoration-wavy group-hover:decoration-emerald-400 transition-all duration-500">
                    {stat.label}
                  </div>
                  {/* Description with fade-in and italic */}
                  <div className="text-emerald-300 text-sm font-roboto-condensed group-hover:text-emerald-100 group-hover:italic group-hover:scale-105 transition-all duration-500">
                    {stat.description}
                  </div>
                  {/* No pointer or cursor effect */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;