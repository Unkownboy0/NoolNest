import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, Star, Clock, Users, Heart, Code, BarChart, Palette, Briefcase, Shield, Cloud, Smartphone, ChevronDown, ArrowRight } from 'lucide-react';
import { allCourses, categories, getCoursesByCategory, searchCourses } from '../data/courses';
import ScrollAnimatedSection from '../components/ScrollAnimatedSection';
import { useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = {
  Code,
  BarChart,
  Palette,
  Briefcase,
  Shield,
  Cloud,
  Smartphone
};

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(24);

  const filteredCourses = useMemo(() => {
    let courses = searchQuery ? searchCourses(searchQuery) : allCourses;
    
    if (selectedCategory !== 'all') {
      courses = getCoursesByCategory(selectedCategory);
    }
    
    if (selectedLevel !== 'all') {
      courses = courses.filter(course => course.level === selectedLevel);
    }

    if (selectedSubcategory !== 'all') {
      courses = courses.filter(course => course.subcategory === selectedSubcategory);
    }

    // Sort courses
    switch (sortBy) {
      case 'rating':
        courses = courses.sort((a, b) => b.rating - a.rating);
        break;
      case 'students':
        courses = courses.sort((a, b) => parseInt(b.students.replace('K', '')) - parseInt(a.students.replace('K', '')));
        break;
      case 'newest':
        courses = courses.sort((a, b) => b.id.localeCompare(a.id));
        break;
      case 'alphabetical':
        courses = courses.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        courses = courses.sort((a, b) => b.reviews - a.reviews);
    }

    return courses;
  }, [searchQuery, selectedCategory, selectedLevel, selectedSubcategory, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, startIndex + coursesPerPage);

  const { containerRef: coursesContainerRef, visibleItems: visibleCourses } = useStaggeredScrollAnimation(currentCourses.length, 30);
  const { containerRef: categoriesContainerRef, visibleItems: visibleCategories } = useStaggeredScrollAnimation(categories.length + 1, 80);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);
  const availableSubcategories = selectedCategoryData ? selectedCategoryData.subcategories : [];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200 hover:bg-emerald-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-200',
      red: 'bg-red-100 text-red-600 border-red-200 hover:bg-red-200',
      cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200 hover:bg-cyan-200',
      green: 'bg-green-100 text-green-600 border-green-200 hover:bg-green-200'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSelectedSubcategory('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce-gentle"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center">
            <ScrollAnimatedSection animation="slide-down" delay={0}>
              <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-6 hover:bg-opacity-30 transition-all duration-300">
                <Heart className="h-5 w-5 animate-heartbeat" />
                <span className="text-lg">{allCourses.length}+ Free Courses Available</span>
              </div>
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Explore Our Complete
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-gradient-x">
                  Free Course Library
                </span>
              </h1>
            </ScrollAnimatedSection>
            
            <ScrollAnimatedSection animation="fade-up" delay={400}>
              <p className="text-xl text-emerald-100 max-w-4xl mx-auto mb-10 leading-relaxed">
                Choose from over <strong>{allCourses.length} completely free courses</strong> across programming, 
                data science, design, business, cybersecurity, cloud computing, and mobile development. 
                No subscriptions, no hidden costs, just quality education for everyone.
              </p>
            </ScrollAnimatedSection>
            
            {/* Enhanced Search Bar */}
            <ScrollAnimatedSection animation="scale" delay={600}>
              <div className="max-w-3xl mx-auto relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                  <div className="flex items-center">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                    <input
                      type="text"
                      placeholder={`Search ${allCourses.length}+ free courses...`}
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full pl-14 pr-6 py-4 text-gray-900 text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
                    />
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                      <span>Search Free</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>

            {/* Quick Stats */}
            <ScrollAnimatedSection animation="fade-up" delay={800}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
                {[
                  { value: `${allCourses.length}+`, label: 'Free Courses' },
                  { value: '7', label: 'Categories' },
                  { value: '2M+', label: 'Happy Learners' },
                  { value: '$0', label: 'Always Free' }
                ].map((stat, index) => (
                  <ScrollAnimatedSection key={index} animation="scale" delay={900 + index * 100}>
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-4 hover:bg-opacity-20 transition-all duration-300 hover:scale-105">
                      <div className="text-2xl font-bold text-white animate-count-up">{stat.value}</div>
                      <div className="text-emerald-200 text-sm">{stat.label}</div>
                    </div>
                  </ScrollAnimatedSection>
                ))}
              </div>
            </ScrollAnimatedSection>
          </div>
        </div>
      </div>

      {/* Enhanced Categories Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ScrollAnimatedSection animation="fade-up" delay={0}>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Browse by Category</h2>
              <p className="text-gray-600">All courses are completely free forever</p>
            </div>
          </ScrollAnimatedSection>

          <div ref={categoriesContainerRef} className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setCurrentPage(1);
              }}
              className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } ${visibleCategories[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '0ms' }}
            >
              <Heart className="h-4 w-4 group-hover:animate-pulse" />
              <span>All Categories ({allCourses.length})</span>
            </button>
            
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap];
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setSelectedSubcategory('all');
                    setCurrentPage(1);
                  }}
                  className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    selectedCategory === category.id
                      ? `${getColorClasses(category.color)} shadow-lg scale-105`
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } ${visibleCategories[index + 1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${(index + 1) * 80}ms` }}
                >
                  <IconComponent className="h-4 w-4 group-hover:animate-bounce" />
                  <span>{category.name.split(' ')[0]} ({category.courseCount})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Advanced Filters and Controls */}
      <ScrollAnimatedSection animation="fade-up" delay={0}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">Advanced Filters:</span>
                </div>
                
                <select
                  value={selectedLevel}
                  onChange={(e) => {
                    setSelectedLevel(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                >
                  <option value="all">All Levels</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>

                {selectedCategory !== 'all' && availableSubcategories.length > 0 && (
                  <select
                    value={selectedSubcategory}
                    onChange={(e) => {
                      setSelectedSubcategory(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                  >
                    <option value="all">All Subcategories</option>
                    {availableSubcategories.map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                )}
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="students">Most Students</option>
                  <option value="newest">Newest</option>
                  <option value="alphabetical">A-Z</option>
                </select>

                <button
                  onClick={resetFilters}
                  className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300 hover:scale-105"
                >
                  Reset Filters
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg">
                  <Heart className="h-4 w-4 animate-pulse" />
                  <span className="font-medium">
                    {filteredCourses.length} free courses found
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                      viewMode === 'grid' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                      viewMode === 'list' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimatedSection>

      {/* Course Grid/List with Enhanced Animations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {viewMode === 'grid' ? (
          <div ref={coursesContainerRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {currentCourses.map((course, index) => (
              <Link
                key={course.id}
                to={`/course/${course.id}`}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-gray-100 will-change-transform ${
                  visibleCourses[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: visibleCourses[index] ? '0ms' : `${index * 30}ms`,
                  transitionDuration: '700ms'
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Free Badge */}
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 animate-pulse-subtle">
                    <Heart className="h-3 w-3 animate-heartbeat" />
                    <span>Free</span>
                  </div>
                  
                  {/* Level Badge */}
                  <div className="absolute top-4 right-4 bg-white bg-opacity-95 text-gray-700 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                    {course.level}
                  </div>

                  {/* Featured Badge */}
                  {course.featured && (
                    <div className="absolute bottom-4 left-4 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-semibold animate-bounce-subtle">
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      {course.subcategory}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2 leading-tight">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1 group-hover:text-emerald-600 transition-colors duration-300">
                      <Clock className="h-4 w-4 group-hover:animate-spin-slow" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 group-hover:text-emerald-600 transition-colors duration-300">
                      <Users className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current group-hover:animate-pulse" />
                      <span className="text-sm font-medium text-gray-700">{course.rating}</span>
                      <span className="text-xs text-gray-500">({course.reviews.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center space-x-1 text-emerald-600 font-semibold text-sm group-hover:scale-110 transition-transform duration-300">
                      <span>Start Free</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="flex items-center space-x-2 mt-4 pt-4 border-t border-gray-100">
                    <img
                      src={course.instructorImage}
                      alt={course.instructor}
                      className="w-6 h-6 rounded-full"
                      loading="lazy"
                    />
                    <span className="text-xs text-gray-600">{course.instructor}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {currentCourses.map((course, index) => (
              <ScrollAnimatedSection key={course.id} animation="fade-up" delay={index * 50}>
                <Link
                  to={`/course/${course.id}`}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 flex hover:scale-102 will-change-transform"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-64 h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>Free</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                            {course.subcategory}
                          </span>
                          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {course.level}
                          </span>
                          {course.featured && (
                            <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                          {course.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 mb-3">
                          {course.description}
                        </p>
                        <div className="flex items-center space-x-2 mb-3">
                          <img
                            src={course.instructorImage}
                            alt={course.instructor}
                            className="w-6 h-6 rounded-full"
                            loading="lazy"
                          />
                          <span className="text-sm text-gray-600">{course.instructor}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{course.students} students</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span>{course.rating}</span>
                          <span>({course.reviews.toLocaleString()} reviews)</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 text-emerald-600 font-semibold group-hover:scale-110 transition-transform duration-300">
                        <span>Start Learning Free</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollAnimatedSection>
            ))}
          </div>
        )}

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <ScrollAnimatedSection animation="fade-up" delay={200}>
            <div className="mt-16 flex flex-col items-center space-y-6">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <span className="text-gray-600">
                    Showing {startIndex + 1}-{Math.min(startIndex + coursesPerPage, filteredCourses.length)} of {filteredCourses.length} free courses
                  </span>
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 7) {
                      pageNum = i + 1;
                    } else if (currentPage <= 4) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 3) {
                      pageNum = totalPages - 6 + i;
                    } else {
                      pageNum = currentPage - 3 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                          currentPage === pageNum
                            ? 'bg-emerald-600 text-white shadow-lg'
                            : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>
        )}

        {/* No Results State */}
        {filteredCourses.length === 0 && (
          <ScrollAnimatedSection animation="scale" delay={0}>
            <div className="text-center py-20">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 max-w-md mx-auto">
                <div className="text-gray-400 mb-6">
                  <Search className="h-20 w-20 mx-auto animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No courses found</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any courses matching your criteria. Try adjusting your search or filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:scale-105"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </ScrollAnimatedSection>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;