import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X, Search, User, Bell, Heart } from 'lucide-react';

// Make sure to add these fonts in your index.html:
// <link href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Optician+Sans&display=swap" rel="stylesheet">

// Example suggestions (replace with your real data or API)
const SUGGESTIONS = [
  "Python for Beginners",
  "JavaScript Essentials",
  "React Masterclass",
  "Machine Learning Basics",
  "UI/UX Design Fundamentals",
  "Data Science Bootcamp",
  "Web Development Roadmap",
  "TypeScript Crash Course"
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter suggestions based on search input
  const filteredSuggestions = search
    ? SUGGESTIONS.filter(s =>
        s.toLowerCase().includes(search.toLowerCase())
      )
    : SUGGESTIONS.slice(0, 5);

  // Handle click outside to close suggestions
  React.useEffect(() => {
    if (!searchActive) return;
    const handler = (e: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
        setSearchActive(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [searchActive]);

  return (
    <header className="bg-black border-b border-gray-900 sticky top-0 z-50 font-optician">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center h-20 md:h-16">
          {/* Centered Logo and All Courses */}
          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-auto gap-4 md:gap-12 py-2 md:py-0">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-2 rounded-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-emerald-900/40">
                <BookOpen className="h-6 w-6 text-white group-hover:animate-pulse" />
              </div>
              <span className="text-2xl md:text-xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-lg font-mono">
                NoolNest
              </span>
            </Link>
            {/* Centered All Courses */}
            <Link
              to="/courses"
              className="relative group text-lg font-semibold text-emerald-300 hover:text-cyan-300 transition-colors duration-300 px-4 py-1 rounded-lg hover:bg-gray-900/60 shadow-md shadow-emerald-900/20 animate-fade-in font-optician"
            >
              All Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="https://roadmap.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-emerald-400 font-mono font-bold transition-all duration-300 hover:scale-105 relative group"
              style={{ animationDelay: `0ms` }}
            >
              Learning Paths
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
                href="https://www.mindluster.com/"
                       target="_blank"
                          rel="noopener noreferrer"
                             className="text-gray-300 hover:text-emerald-400 font-mono font-bold transition-all duration-300 hover:scale-105 relative group"
                style={{ animationDelay: `0ms` }}
                                                                            >
                                 Students  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            {['Projects'].map((item, index) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-gray-300 hover:text-emerald-400 font-mono font-bold transition-all duration-300 hover:scale-105 relative group"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
           
          </nav>

          {/* Search Bar */}  <div className="hidden md:flex items-center flex-1 max-w-md mx-8 relative">
            <div
              className={`relative w-full group transition-all duration-500 ${searchActive ? 'z-50' : ''}`}
              style={{
                maxWidth: searchActive ? 480 : 320,
                transition: 'max-width 0.5s cubic-bezier(.4,1.4,.6,1.1)'
              }}
            >
              <Search
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 h-4 w-4 group-hover:text-cyan-400 transition-colors duration-300 cursor-pointer`}
                onClick={() => {
                  setSearchActive(true);
                  setShowSuggestions(true);
                  setTimeout(() => inputRef.current?.focus(), 100);
                }}
              />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onFocus={() => {
                  setSearchActive(true);
                  setShowSuggestions(true);
                }}
                onChange={e => {
                  setSearch(e.target.value);
                  setShowSuggestions(true);
                }}
                placeholder="Search 500+ free courses..."
                className={`w-full pl-10 pr-4 py-2 border border-gray-800 bg-black text-gray-100 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-transparent transition-all duration-300 hover:shadow-md placeholder-gray-500 font-optician outline-none ${
                  searchActive ? 'shadow-2xl scale-105 bg-gray-900' : ''
                }`}
                style={{
                  transition: 'all 0.5s cubic-bezier(.4,1.4,.6,1.1)'
                }}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
                onKeyDown={e => {
                  if (e.key === 'Escape') {
                    setShowSuggestions(false);
                    setSearchActive(false);
                  }
                }}
              />
              {/* Suggestions Dropdown */}
              {showSuggestions && (
                <div className="absolute left-0 right-0 mt-2 bg-black border border-emerald-900 rounded-lg shadow-lg z-50 animate-fade-in">
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((suggestion, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 text-gray-200 hover:bg-emerald-900/40 cursor-pointer font-optician transition-all duration-200"
                        onMouseDown={() => {
                          setSearch(suggestion);
                          setShowSuggestions(false);
                          setSearchActive(false);
                        }}
                      >
                        {suggestion}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-400 font-optician">No results found.</div>
                  )}
                  {/* Show search result if user typed and pressed enter */}
                  {search && !filteredSuggestions.includes(search) && (
                    <div className="px-4 py-2 text-cyan-300 font-mono border-t border-emerald-900 bg-black">
                      Showing results for: <span className="font-bold">{search}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-emerald-400 hover:bg-gray-900 rounded-lg transition-all duration-300 hover:scale-110 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            </button>
            <Link
              to="/login"
              className="text-gray-300 hover:text-emerald-400 font-mono font-bold transition-all duration-300 hover:scale-105"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="group flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-optician font-bold"
            >
              <User className="h-4 w-4 group-hover:animate-bounce" />
              <span>Join Free</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-gray-900 transition-all duration-300"
          >
            {isMenuOpen ?
              <X className="h-6 w-6 animate-spin" /> :
              <Menu className="h-6 w-6 hover:scale-110 transition-transform duration-300" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 bg-black animate-slide-down">
            <div className="flex flex-col space-y-4">
              <div className="bg-gray-900 text-emerald-300 px-3 py-2 rounded-lg text-sm font-optician text-center animate-fade-in">
                <Heart className="h-4 w-4 inline mr-1 animate-pulse" />
                500+ Free Courses
              </div>
              <div className="relative animate-fade-in delay-100">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search free courses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-800 bg-black text-gray-100 rounded-lg focus:ring-2 focus:ring-emerald-900 focus:border-transparent placeholder-gray-500 font-optician"
                />
              </div>
              <Link
                to="/courses"
                className="text-emerald-300 hover:text-cyan-300 font-mono font-bold py-2 animate-slide-in-left"
                style={{ animationDelay: `200ms` }}
              >
                All Courses
              </Link>
              <a
                href="https://roadmap.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-emerald-400 font-mono font-bold py-2 animate-slide-in-left"
                style={{ animationDelay: `300ms` }}
              >
                Learning Paths
              </a>
              {['Practice', 'Community'].map((item, index) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-300 hover:text-emerald-400 font-mono font-bold py-2 animate-slide-in-left"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  {item}
                </Link>
              ))}
              <Link
                to="/maths-gpt"
                className="relative font-extrabold bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent transition-all duration-300 hover:from-emerald-400 hover:to-cyan-400 hover:scale-110 group py-2 animate-slide-in-left"
                style={{ animationDelay: `600ms` }}
              >
                <span className="font-mono">Maths-gpt</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <div className="flex space-x-2 animate-fade-in delay-600">
                <Link
                  to="/login"
                  className="flex-1 text-center border border-emerald-600 text-emerald-300 px-4 py-2 rounded-lg hover:bg-gray-900 transition-all duration-300 font-mono font-bold"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="flex-1 text-center bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-all duration-300 font-optician font-bold"
                >
                  Join Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;