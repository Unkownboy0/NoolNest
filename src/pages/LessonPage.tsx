import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Play, FileText, CheckSquare, Download, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

const LessonPage: React.FC = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('video');

  // Mock lesson data
  const lesson = {
    id: 1,
    title: 'Introduction to HTML',
    courseTitle: 'Complete Web Development Bootcamp',
    videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE',
    duration: '15 min',
    description: 'Learn the fundamentals of HTML and how to structure web pages with semantic elements.',
    notes: [
      {
        id: 1,
        title: 'HTML Basics',
        content: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages...',
        image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 2,
        title: 'HTML Structure',
        content: 'Every HTML document has a basic structure that includes DOCTYPE, html, head, and body elements...',
        image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    tasks: [
      {
        id: 1,
        title: 'Create Your First HTML Page',
        description: 'Build a simple HTML page with proper structure including head and body sections.',
        difficulty: 'Beginner',
        estimatedTime: '30 minutes',
        requirements: [
          'Create an HTML file named index.html',
          'Include proper DOCTYPE declaration',
          'Add head section with title',
          'Create body with heading and paragraph'
        ]
      },
      {
        id: 2,
        title: 'HTML Elements Practice',
        description: 'Practice using different HTML elements to create a structured document.',
        difficulty: 'Beginner',
        estimatedTime: '45 minutes',
        requirements: [
          'Use heading tags (h1-h6)',
          'Add paragraphs and line breaks',
          'Include lists (ordered and unordered)',
          'Add links and images'
        ]
      }
    ],
    resources: [
      { name: 'HTML Cheat Sheet', type: 'PDF', size: '2.5 MB' },
      { name: 'Code Examples', type: 'ZIP', size: '1.2 MB' },
      { name: 'Practice Files', type: 'ZIP', size: '800 KB' }
    ]
  };

  const tabs = [
    { id: 'video', label: 'Video Lesson', icon: Play },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare },
    { id: 'resources', label: 'Resources', icon: Download }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to={`/course/${courseId}`}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Course</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{lesson.title}</h1>
                <p className="text-sm text-gray-600">{lesson.courseTitle}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">{lesson.duration}</span>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <BookOpen className="w-4 h-4" />
                <span>Mark Complete</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="bg-white rounded-t-2xl border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-b-2xl shadow-lg">
              {activeTab === 'video' && (
                <div className="p-6">
                  <div className="aspect-video bg-black rounded-xl overflow-hidden mb-6">
                    <iframe
                      src={lesson.videoUrl}
                      title={lesson.title}
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">{lesson.title}</h2>
                    <p className="text-gray-700 leading-relaxed">{lesson.description}</p>
                  </div>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Lesson Notes</h2>
                  <div className="space-y-8">
                    {lesson.notes.map((note) => (
                      <div key={note.id} className="border border-gray-200 rounded-xl overflow-hidden">
                        <img
                          src={note.image}
                          alt={note.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{note.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{note.content}</p>
                          <button className="mt-4 flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-200">
                            <Download className="w-4 h-4" />
                            <span>Download Note</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'tasks' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Tasks</h2>
                  <div className="space-y-6">
                    {lesson.tasks.map((task) => (
                      <div key={task.id} className="border border-gray-200 rounded-xl p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{task.title}</h3>
                            <p className="text-gray-700 mb-4">{task.description}</p>
                          </div>
                          <div className="flex flex-col items-end space-y-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              task.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                              task.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {task.difficulty}
                            </span>
                            <span className="text-sm text-gray-500">{task.estimatedTime}</span>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                          <ul className="space-y-2">
                            {task.requirements.map((requirement, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <CheckSquare className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{requirement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                          Start Task
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'resources' && (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Downloadable Resources</h2>
                  <div className="space-y-4">
                    {lesson.resources.map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-blue-100 rounded-lg">
                            <Download className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{resource.name}</h3>
                            <p className="text-sm text-gray-600">{resource.type} • {resource.size}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Progress</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-medium">12 / 45 lessons</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{ width: '27%' }}></div>
                </div>
                <p className="text-sm text-gray-600">27% Complete</p>
              </div>

              <div className="mt-8 space-y-4">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Lesson</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  <span>Next Lesson</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;