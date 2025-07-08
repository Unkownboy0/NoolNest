import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowRight, Heart } from 'lucide-react';
import { getFeaturedCourses } from '../data/courses';
import ScrollAnimatedSection from './ScrollAnimatedSection';
import { useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';

// Make sure to add these fonts in your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Optician+Sans&display=swap" rel="stylesheet">

const FeaturedCourses = () => {
  const featuredCourses = getFeaturedCourses();
  const { containerRef, visibleItems } = useStaggeredScrollAnimation(featuredCourses.length, 150);

  return (
    <section className="py-20 bg-black transition-colors duration-700 font-optician">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollAnimatedSection animation="slide-down" delay={0}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-700 via-rose-400 to-emerald-700 text-black font-bold px-4 py-2 rounded-full text-sm font-optician mb-4 shadow-lg tracking-widest uppercase">
              <Heart className="h-4 w-4 animate-pulse" />
              <span>500+ Courses Available - All Free</span>
            </div>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection animation="fade-up" delay={200}>
            <h2 className="text-4xl font-mono text-white mb-4 font-bold drop-shadow-lg tracking-tight">
              Featured Free Courses
            </h2>
          </ScrollAnimatedSection>
          
          <ScrollAnimatedSection animation="fade-up" delay={400}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-mono tracking-wide">
              Start your learning journey with our most popular courses from our library of 500+ free courses, 
              designed by industry experts and available to everyone at no cost.
            </p>
          </ScrollAnimatedSection>
        </div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCourses.map((course, index) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className={`group bg-neutral-900 rounded-2xl shadow-2xl hover:shadow-emerald-900/40 transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-neutral-800 ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0 animate-fade-in' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: visibleItems[index] ? '0ms' : `${index * 150}ms`,
                transitionDuration: '600ms'
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-emerald-700 text-white px-3 py-1 rounded-full text-sm font-optician flex items-center space-x-1 animate-bounce-subtle shadow-md tracking-widest uppercase">
                  <Heart className="h-3 w-3 animate-pulse" />
                  <span>Free</span>
                </div>
                <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-emerald-200 px-2 py-1 rounded text-xs font-mono font-bold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 shadow tracking-widest uppercase">
                  {course.level}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2 font-mono tracking-tight">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300 font-optician tracking-wide">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 font-optician">
                  <div className="flex items-center space-x-1 group-hover:text-emerald-400 transition-colors duration-300">
                    <Clock className="h-4 w-4 group-hover:animate-spin-slow" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1 group-hover:text-emerald-400 transition-colors duration-300">
                    <Users className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current group-hover:animate-pulse" />
                    <span className="text-sm font-medium text-gray-200 font-mono">{course.rating}</span>
                    <span className="text-xs text-gray-500 font-optician">({course.reviews})</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-emerald-400 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <ScrollAnimatedSection animation="scale" delay={600}>
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 text-black px-8 py-4 rounded-lg font-mono font-semibold hover:from-emerald-400 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-900/40 animate-bounce-subtle tracking-widest"
            >
              <span>Browse All 500+ Free Courses</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollAnimatedSection>
      </div>
    </section>
  );
};

export default FeaturedCourses;