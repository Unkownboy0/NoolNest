import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedCourses from "./components/FeaturedCourses";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import CoursePage from "./pages/CoursePage";
import CoursesPage from "./pages/CoursesPage";
import LessonPage from "./pages/LessonPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Projects from "./pages/Projects";
import ProjectView from "./pages/ProjectView";
import PythonBasicsPage from "./pages/PythonBasicsPage";
import JavaProgrammingPage from "./pages/JavaProgrammingPage";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCourses />
      <Features />
      <Stats />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/course/:courseId/lesson/:lessonId" element={<LessonPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectView />} />
          <Route path="/courses/python-basics" element={<PythonBasicsPage />} />
          <Route path="/courses/java-programming" element={<JavaProgrammingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;