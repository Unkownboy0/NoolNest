import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, FileText, CheckSquare, Clock, Star, Download, BookOpen } from 'lucide-react';

const CoursePage: React.FC = () => {
  useParams();

  // Mock course data - in real app, fetch based on ID
  const course = {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    instructor: 'Sarah Johnson',
    rating: 4.9,
    students: 12500,
    duration: '40 hours',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
    price: 'free',
    originalPrice: '$199',
    category: 'Web Development',
    level: 'Beginner to Advanced',
    language: 'English',
    lastUpdated: 'December 2024',
    description: 'Master web development from scratch with this comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, Node.js, and more with hands-on projects and real-world applications.',
    whatYouWillLearn: [
      'Build responsive websites with HTML5 and CSS3',
      'Master JavaScript ES6+ and modern frameworks',
      'Create dynamic web applications with React',
      'Develop backend APIs with Node.js and Express',
      'Work with databases (MongoDB, SQL)',
      'Deploy applications to production',
      'Understand version control with Git',
      'Apply best practices and industry standards'
    ],
    requirements: [
      'Basic computer skills',
      'No prior programming experience required',
      'A computer with internet connection',
      'Willingness to learn and practice'
    ],
    modules: [
      {
        id: 1,
        title: 'HTML & CSS Fundamentals',
        lessons: 12,
        duration: '4 hours',
        notes: 25,
        tasks: 5,
        lessons_list: [
          { id: 1, title: 'Introduction to HTML', duration: '15 min', type: 'video' },
          { id: 2, title: 'HTML Structure and Elements', duration: '20 min', type: 'video' },
          { id: 3, title: 'CSS Basics and Styling', duration: '25 min', type: 'video' },
          { id: 4, title: 'Responsive Design Principles', duration: '30 min', type: 'video' }
        ]
      },
      {
        id: 2,
        title: 'JavaScript Essentials',
        lessons: 15,
        duration: '6 hours',
        notes: 35,
        tasks: 8,
        lessons_list: [
          { id: 5, title: 'JavaScript Fundamentals', duration: '25 min', type: 'video' },
          { id: 6, title: 'DOM Manipulation', duration: '30 min', type: 'video' },
          { id: 7, title: 'Event Handling', duration: '20 min', type: 'video' },
          { id: 8, title: 'Async JavaScript', duration: '35 min', type: 'video' }
        ]
      },
      {
        id: 3,
        title: 'React Development',
        lessons: 18,
        duration: '8 hours',
        notes: 40,
        tasks: 12,
        lessons_list: [
          { id: 9, title: 'React Components', duration: '30 min', type: 'video' },
          { id: 10, title: 'State Management', duration: '25 min', type: 'video' },
          { id: 11, title: 'React Hooks', duration: '35 min', type: 'video' },
          { id: 12, title: 'Building a React App', duration: '45 min', type: 'video' }
        ]
      }
    ]
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Top Bar */}
      <div className="bg-[#002451] text-white text-xs py-1 px-2 flex justify-between items-center">
        <span>freeCodeCamp (🔥)</span>
        <div>
          <a href="#" className="underline text-white mr-4">Forum</a>
          <button className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-bold">Donate</button>
        </div>
      </div>
      {/* Curriculum Bar */}
      <div className="bg-[#0a0a23] text-white text-xs text-center py-1">
        Learn to code — <a href="#" className="underline text-blue-200">free 3,000-hour curriculum</a>
      </div>
      {/* Main Content */}
      <div className="max-w-2xl mx-auto py-8 px-4">
        {/* Meta */}
        <div className="text-xs text-gray-500 mb-2">
          <span>SEPTEMBER 14, 2021</span> / <a href="#" className="text-blue-700">#LINUX</a>
        </div>
        {/* Title */}
        <h1 className="text-2xl font-bold mb-2">
          Linux for Ethical Hacking – Penetration Testing for Beginners
        </h1>
        {/* Author */}
        <div className="flex items-center mb-4">
          <img
            src="https://www.freecodecamp.org/news/content/images/2021/09/beau-carnes.jpeg"
            alt="Beau Carnes"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm font-semibold">Beau Carnes</span>
        </div>
        {/* Hero Image */}
        <img
          src="https://www.freecodecamp.org/news/content/images/2021/09/ethical-hacking-linux.png"
          alt="Linux Essentials for Ethical Hackers"
          className="w-full rounded mb-6"
        />
        {/* Intro */}
        <p className="mb-4">
          If you want to get into the growing field of cyber security and ethical hacking, you are going to need to understand how to use Linux.
        </p>
        <p className="mb-4">
          We just released a free course on the freeCodeCamp.org YouTube channel that will teach you all the common Linux skills used in cyber-security and ethical hacking.
        </p>
        <p className="mb-4">
          HackerSploit created this course. He runs one of the most popular cyber-security channels on YouTube. In this course, he uses the Pareto principle (The 20:80 Rule) to teach the 20% you need to know to be efficient with Linux.
        </p>
        {/* Inline Image */}
        <div className="flex justify-center mb-2">
          <img
            src="https://cdn.freecodecamp.org/curriculum/hacker-sploit/hack-the-planet.png"
            alt="Hack the planet!"
            className="rounded shadow"
          />
        </div>
        <em className="block text-center text-gray-600 mb-4">Ethically hack the planet!</em>
        {/* Sections */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Here are the sections covered in this course:</p>
          <ul className="list-disc ml-6 text-sm space-y-1">
            <li>Useful keyboard Shortcuts</li>
            <li>File Management & Manipulation</li>
            <li>File & Directory Permissions</li>
            <li>File & Directory Ownership</li>
            <li>grep & piping</li>
            <li>Finding Files With Locate</li>
            <li>Enumerating Distribution & Kernel Information</li>
            <li>Find + OverTheWire Bandit Challenge</li>
            <li>Shells & Bash Configuration</li>
            <li>Disk Usage</li>
            <li>File Compression & Archiving With tar</li>
            <li>Users And Groups & Permissions With Visudo</li>
            <li>Networking (ifconfig, netstat & netdiscover)</li>
            <li>TOR & Proxychains</li>
            <li>Service And Process Management (HTOP & systemctl)</li>
            <li>SSH And SSH Security</li>
            <li>Curl Fundamentals</li>
            <li>UFW Firewall (Uncomplicated Firewall)</li>
            <li>How To Clear Tracks & Logs On Linux</li>
            <li>SSH Brute Force Protection With Fail2Ban</li>
          </ul>
        </div>
        {/* Watch Video */}
        <div className="mb-4">
          <p className="mb-2">
            Watch the full course below or on the freeCodeCamp.org YouTube channel (5-hour watch).
          </p>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              className="w-full h-64 rounded"
              src="https://www.youtube.com/embed/3pXVHRT-amw"
              title="Linux Essentials for Ethical Hackers"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Author Footer */}
        <div className="flex items-center mt-8 mb-2">
        </div>
      </div>
    
    </div>
  );
};

export default CoursePage;