import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import CppBasicsPage from "./pages/cpp_basics_page";
import JavaScriptBasicsPage from "./pages/java_script_basics_page";
import HTMLCssCoursePage from "./pages/htmlcss_course_page";
import HtmlCssCoursePage from "./pages/html_css_course_page";
import ReactJsCoursePage from "./pages/react_js_course_page";
import NodeJsBackendPage from "./pages/node_js_backend_page";
import MongoDbCoursePage from "./pages/mongo_db_course_page";
import SqlDatabasesPage from "./pages/sql_databases_page";
import TypeScriptPage from "./pages/type_script_page";
import TypeScriptEssentialsPage from "./pages/type_script_essentials_page";
import BashScriptingPage from "./pages/bash_scripting_page";
import GoProgrammingPage from "./pages/go_programming_page";
import RustProgrammingPage from "./pages/rust_programming_page";
import DartFlutterPage from "./pages/dart_flutter_page";
import KotlinAppDevPage from "./pages/kotlin_app_dev_page";
import SwiftProgrammingPage from "./pages/swift_programming_page";
import RubyProgrammingPage from "./pages/ruby_programming_page";
import PhpProgrammingPage from "./pages/php_programming_page";
import PythonDataSciencePage from "./pages/python_data_science_page";
import RLanguagePage from "./pages/rlanguage_page";
import MatlabPage from "./pages/matlab_page";
import SolidityPage from "./pages/solidity_page";
import DockerCoursePage from "./pages/docker_course_page";
import GitGithubMasteryPage from "./pages/git_github_mastery_page";
import AIBasicsPage from "./pages/aibasics_page";
import AssemblyPage from "./pages/assembly_page";

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
    <BrowserRouter>
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
          <Route path="/python-basics" element={<PythonBasicsPage />} />
          <Route path="/java-programming" element={<JavaProgrammingPage />} />
          <Route path="/cpp-basics" element={<CppBasicsPage />} />
          <Route path="/javascript-basics" element={<JavaScriptBasicsPage />} />
          <Route path="/html-css-course" element={<HTMLCssCoursePage />} />
          <Route path="/html-css-course-alt" element={<HtmlCssCoursePage />} />
          <Route path="/react-js-course" element={<ReactJsCoursePage />} />
          <Route path="/node-js-backend" element={<NodeJsBackendPage />} />
          <Route path="/mongo-db-course" element={<MongoDbCoursePage />} />
          <Route path="/sql-databases" element={<SqlDatabasesPage />} />
          <Route path="/typescript" element={<TypeScriptPage />} />
          <Route path="/typescript-essentials" element={<TypeScriptEssentialsPage />} />
          <Route path="/bash-scripting" element={<BashScriptingPage />} />
          <Route path="/go-programming" element={<GoProgrammingPage />} />
          <Route path="/rust-programming" element={<RustProgrammingPage />} />
          <Route path="/dart-flutter" element={<DartFlutterPage />} />
          <Route path="/kotlin-app-dev" element={<KotlinAppDevPage />} />
          <Route path="/swift-programming" element={<SwiftProgrammingPage />} />
          <Route path="/ruby-programming" element={<RubyProgrammingPage />} />
          <Route path="/php-programming" element={<PhpProgrammingPage />} />
          <Route path="/python-data-science" element={<PythonDataSciencePage />} />
          <Route path="/r-language" element={<RLanguagePage />} />
          <Route path="/matlab" element={<MatlabPage />} />
          <Route path="/solidity" element={<SolidityPage />} />
          <Route path="/docker-course" element={<DockerCoursePage />} />
          <Route path="/git-github-mastery" element={<GitGithubMasteryPage />} />
          <Route path="/ai-basics" element={<AIBasicsPage />} />
          <Route path="/assembly" element={<AssemblyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;