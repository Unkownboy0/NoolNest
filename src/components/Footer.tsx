import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FacebookIcon, TwitterIcon, InstagramIcon, Linkedin, YoutubeIcon, Mail, Heart, Zap, Trophy } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';

// Make sure to add these fonts in your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Optician+Sans&display=swap" rel="stylesheet">

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white font-optician overflow-hidden">
      <style>
        {`
        .footer-anim {
          transition: all 0.7s cubic-bezier(.4,1.4,.6,1.1);
        }
        .footer-anim:hover {
          transform: translateY(-4px) scale(1.03) rotate(-1deg);
          box-shadow: 0 8px 32px 0 rgba(16,185,129,0.18);
        }
        .footer-link-anim {
          transition: color 0.4s cubic-bezier(.4,1.4,.6,1.1), transform 0.4s cubic-bezier(.4,1.4,.6,1.1);
        }
        .footer-link-anim:hover {
          color: #67e8f9;
          transform: translateX(4px) scale(1.08);
        }
        `}
      </style>
      {/* Animated grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(16,185,129,0.06)_1px,transparent_1px)] [background-size:32px_32px]"></div>
      </div>
      {/* Glowing orbs */}
      <div className="absolute top-8 left-8 w-32 h-32 bg-emerald-500 opacity-20 rounded-full blur-2xl animate-pulse-slow z-0"></div>
      <div className="absolute bottom-8 right-8 w-40 h-40 bg-cyan-500 opacity-20 rounded-full blur-2xl animate-pulse-slow z-0"></div>
      {/* Floating widgets */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 animate-float z-0">
        <div className="bg-black p-3 rounded-full shadow-lg border border-emerald-900/40">
          <Zap className="h-6 w-6 text-emerald-400 animate-spin-slow" />
        </div>
      </div>
      <div className="absolute bottom-1/2 right-0 translate-y-1/2 translate-x-1/2 animate-float-reverse z-0">
        <div className="bg-black p-3 rounded-full shadow-lg border border-cyan-900/40">
          <Trophy className="h-6 w-6 text-yellow-400 animate-bounce" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <ScrollAnimatedSection animation="fade-up" delay={0}>
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-2 group footer-anim">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-900/40">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                {/* Brand: Mixed mono + optician */}
                <span>
                  <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x font-mono tracking-widest">
                    Nool Nest
                  </span>
                  <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x font-optician ml-1">
                  </span>
                </span>
              </Link>
              <p className="text-gray-400 font-sans-serif mono tracking-wide">
                Empowering millions of learners worldwide with free, interactive, hands-on education 
                that prepares them for successful careers in tech.
              </p>
              <div className="bg-emerald-900 bg-opacity-60 p-4 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-md shadow-emerald-900/30 footer-anim">
                <div className="flex items-center space-x-2 text-emerald-300 mb-2 font-optician tracking-widest uppercase">
                  <Heart className="h-4 w-4 animate-pulse" />
                  <span className="font-semibold">100% Free Promise</span>
                </div>
                <p className="text-emerald-200 text-sm font-mono tracking-wide">
                  All courses and features will always be free. No subscriptions, ever.
                </p>
              </div>
              <div className="flex space-x-4">
                {[FacebookIcon, TwitterIcon, InstagramIcon, Linkedin, YoutubeIcon].map((Icon, index) => (
                  <ScrollAnimatedSection key={index} animation="scale" delay={100 + index * 50}>
                    <a href="#" className="text-gray-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110 font-optician footer-link-anim">
                      <Icon className="h-5 w-5" />
                    </a>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </div>
          </ScrollAnimatedSection>

          {/* Free Courses */}
          <ScrollAnimatedSection animation="fade-up" delay={200}>
            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-300 font-mono tracking-widest">
                Free <span className="font-optician">Courses</span>
              </h3>
              <ul className="space-y-3">
                {['Web Development', 'Data Science', 'Python', 'JavaScript', 'Machine Learning', 'UI/UX Design'].map((course, index) => (
                  <ScrollAnimatedSection key={index} animation="fade-left" delay={300 + index * 50}>
                    <li>
                      <Link to={`/courses/${course.toLowerCase().replace(' ', '-')}`} className="text-gray-400 footer-link-anim transition-colors duration-300 inline-block font-optician tracking-wide">
                        {course}
                      </Link>
                    </li>
                  </ScrollAnimatedSection>
                ))}
              </ul>
            </div>
          </ScrollAnimatedSection>

          {/* Company */}
          <ScrollAnimatedSection animation="fade-up" delay={400}>
            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-300 font-mono tracking-widest">
                Company
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'About Us', path: '/about-us' },
                  { name: 'Our Mission', path: '/our-mission' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'Careers', path: '/careers' },
                  { name: 'Press', path: '/press' },
                  { name: 'Contact', path: '/contact' }
                ].map((item, index) => (
                  <ScrollAnimatedSection key={index} animation="fade-left" delay={500 + index * 50}>
                    <li>
                      <Link to={item.path} className="text-gray-400 footer-link-anim transition-colors duration-300 inline-block font-optician tracking-wide">
                        {item.name}
                      </Link>
                    </li>
                  </ScrollAnimatedSection>
                ))}
              </ul>
            </div>
          </ScrollAnimatedSection>

          {/* Support */}
          <ScrollAnimatedSection animation="fade-up" delay={600}>
            <div>
              <h3 className="text-lg font-bold mb-6 text-emerald-300 font-mono tracking-widest">
                Support
              </h3>
              <ul className="space-y-3">
                {['Help Center', 'Community', 'Privacy Policy', 'Terms of Service', 'Accessibility'].map((item, index) => (
                  <ScrollAnimatedSection key={index} animation="fade-left" delay={700 + index * 50}>
                    <li>
                      <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 footer-link-anim transition-colors duration-300 inline-block font-optician tracking-wide">
                        {item}
                      </Link>
                    </li>
                  </ScrollAnimatedSection>
                ))}
              </ul>
              <ScrollAnimatedSection animation="scale" delay={900}>
                <div className="mt-6">
                  <h4 className="text-sm font-bold mb-3 text-cyan-300 font-optician tracking-widest">
                    Newsletter
                  </h4>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-3 py-2 bg-black border border-gray-700 rounded-l-lg focus:outline-none focus:border-emerald-500 transition-colors duration-300 text-white placeholder-gray-500 font-optician"
                    />
                    <button className="bg-emerald-600 hover:bg-cyan-600 px-4 py-2 rounded-r-lg transition-all duration-300 hover:scale-105 font-mono tracking-widest">
                      <Mail className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </ScrollAnimatedSection>
            </div>
          </ScrollAnimatedSection>
        </div>

        <ScrollAnimatedSection animation="fade-up" delay={1000}>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-optician">
              © 2025 NoolNest. All rights reserved. Free education for everyone, forever.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Privacy', 'Terms', 'Free Promise'].map((item, index) => (
                <ScrollAnimatedSection key={index} animation="fade-left" delay={1100 + index * 100}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className={`text-sm transition-colors duration-300 hover:scale-105 inline-block font-mono tracking-widest ${
                    item === 'Free Promise'
                      ? 'text-emerald-400 hover:text-emerald-300'
                      : 'text-gray-400 hover:text-cyan-300'
                  }`}>
                    {item}
                  </Link>
                </ScrollAnimatedSection>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;