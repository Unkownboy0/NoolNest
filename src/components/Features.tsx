import React, { useState } from 'react';
import { Code, Users, Trophy, Zap, BookOpen, Heart, Gift, Diamond, DiamondIcon, Handshake, HandshakeIcon } from 'lucide-react';
import ScrollAnimatedSection from './ScrollAnimatedSection';
import { useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';

// Make sure to add these fonts in your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Optician+Sans&display=swap" rel="stylesheet">

const features = [
    {
        icon: Gift,
        title: 'Completely Free',
        description:
            'All courses, projects, and features are free forever. No subscriptions, no hidden costs.',
        color: 'emerald',
    },
    {
        icon: Code,
        title: 'Interactive Coding',
        description:
            'Write and run code directly in your browser with our interactive coding environment.',
        color: 'teal',
    },
    {
        icon: Users,
        title: 'Community Support',
        description:
            'Connect with fellow learners, get help, and share your progress in our vibrant community.',
        color: 'cyan',
    },
    {
        icon: Trophy,
        title: 'Earn Certificates',
        description:
            'Complete courses and earn certificates to showcase your skills - all at no cost.',
        color: 'green',
    },
    {
        icon: Zap,
        title: 'Personalized Learning',
        description:
            'AI-powered recommendations adapt to your learning style and pace for optimal results.',
        color: 'lime',
    },
    {
        icon: BookOpen,
        title: 'Real Projects',
        description:
            'Build portfolio-worthy projects that demonstrate your skills to potential employers.',
        color: 'emerald',
    },
];

const Features = () => {
    const { containerRef, visibleItems } = useStaggeredScrollAnimation(features.length, 100);
    const [showJoined, setShowJoined] = useState(false);

    const getColorClasses = (color: string) => {
        const colors = {
            emerald: 'bg-emerald-900/60 text-emerald-300',
            teal: 'bg-teal-900/60 text-teal-300',
            cyan: 'bg-cyan-900/60 text-cyan-300',
            green: 'bg-green-900/60 text-green-300',
            lime: 'bg-lime-900/60 text-lime-300',
        };
        return colors[color as keyof typeof colors] || colors.emerald;
    };

    return (
        <section className="py-20 bg-black font-optician min-h-screen">
            <style>
                {`
                .hands-joiner {
                    position: relative;
                    width: 6rem;
                    height: 3.5rem;
                    margin: 0 auto;
                }
                .joined-hands-emoji {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%) scale(1.15);
                    font-size: 2.7rem;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.4s;
                }
                .hands-joiner.show .joined-hands-emoji {
                    opacity: 1;
                }
                `}
            </style>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <ScrollAnimatedSection animation="slide-down" delay={0}>
                        <div className="inline-flex items-center space-x-2 bg-gray-800/9 text-teal-400 px-6 py-2 rounded-full text-sm font-medium mb-9 shadow-lg shadow-emerald-900/40 tracking-widest uppercase">
                            <Diamond className="h-4 w-4 animate-spin text-emerald-300" />
                            <span>Free Education for Everyone</span>
                        </div>
                    </ScrollAnimatedSection>

                    <ScrollAnimatedSection animation="fade-up" delay={200}>
                        <h2 className="text-4xl font-mono text-teal-300 mb-4 tracking-tight drop-shadow-lg font-bold">
                            Why Choose NoolNest?
                        </h2>
                    </ScrollAnimatedSection>

                    <ScrollAnimatedSection animation="fade-up" delay={400}>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono tracking-wide">
                            We believe quality education should be accessible to everyone. That's why we
                            provide everything you need to master new skills completely free, forever.
                        </p>
                    </ScrollAnimatedSection>
                </div>

                <div
                    ref={containerRef}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`group bg-gradient-to-br from-gray-900 via-black to-gray-950 rounded-2xl p-8 shadow-2xl hover:shadow-teal-900/40 transition-all duration-700 transform hover:-translate-y-2 hover:scale-105 border border-gray-800 ${
                                    visibleItems[index]
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-8'
                                }`}
                                style={{
                                    transitionDelay: visibleItems[index] ? '0ms' : `${index * 100}ms`,
                                    transitionDuration: '600ms',
                                }}
                            >
                                <div
                                    className={`w-12 h-12 rounded-lg ${getColorClasses(
                                        feature.color
                                    )} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-black/40`}
                                >
                                    <IconComponent className="h-6 w-6 group-hover:animate-pulse" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-emerald-300 transition-colors duration-300 font-mono">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 font-optician tracking-wide">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Free Promise */}
                <ScrollAnimatedSection animation="scale" delay={800}>
                    <div
                        className="mt-16 bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl p-8 text-center text-teal-300 hover:scale-105 transition-transform duration-300 border border-teal-900/40 shadow-lg shadow-teal-900/30 cursor-pointer select-none"
                        onMouseEnter={() => setShowJoined(true)}
                        onMouseLeave={() => setShowJoined(false)}
                    >
                        <div className="max-w-3xl mx-auto">
                            {/* Only show joined hands emoji on hover */}
                            <div className={`hands-joiner${showJoined ? ' show' : ''} flex justify-center mb-4 h-[3.5rem] items-center relative`}>
                                <span
                                    className="joined-hands-emoji"
                                    role="img"
                                    aria-label="Promise"
                                >
                                    🤝
                                </span>
                            </div>
                            
                            <h3 className="text-2xl font-bold mb-4 text-white font-mono tracking-widest">
                                Our Promise to You
                            </h3>
                            <p className="text-[1.12rem] text-gray-500 mb-4 font-mono tracking-tight italic">
                                NoolNest will always be free. We're committed to making quality education
                                accessible to everyone, regardless of their financial situation. No ads, no
                                subscriptions, no catch.
                            </p>
                            <div className="flex items-center justify-center space-x-8 text-gray-400">
                                {[
                                    { value: '$0', label: 'Course Fees' },
                                    { value: '$0', label: 'Subscriptions' },
                                    { value: '$0', label: 'Hidden Costs' },
                                ].map((item, index) => (
                                    <ScrollAnimatedSection
                                        key={index}
                                        animation="scale"
                                        delay={900 + index * 100}
                                    >
                                        <div className="text-center group hover:scale-110 transition-transform duration-300">
                                            <div className="text-s font-bold animate-bounce-subtle text-emerald-300 font-mono">
                                                {item.value}
                                            </div>
                                            <div className="text-sm font-optician tracking-widest">{item.label}</div>
                                        </div>
                                    </ScrollAnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollAnimatedSection>
            </div>
        </section>
    );
};

export default Features;