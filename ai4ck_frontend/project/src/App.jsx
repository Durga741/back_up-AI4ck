import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar"; // Navbar component
import Footer from "./components/layout/Footer"; // Import Footer component
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; 
import PaymentPage from './pages/PaymentPage';
// import FoundingTeam from "./pages/Aboutme/FoundingTeam"; // Fix spaces in file name if necessary
import Blog from "./pages/Blog";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register"; // Register component
import WonderWomen from "./pages/WonderWomen"; 
import Course from "./pages/Course";
import Educate from "./pages/Educate";
import ContactPage from "./pages/ContactPage";
import { PageComponent } from "./components/shared/PageComponent"; // Shared page layout
import CourseDetails from "./pages/CourseDetails"; // Import the CourseDetails page
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './UserDashboard/Dashboard';
import EnrolledCourses from './UserDashboard/EnrolledCourses';
import LearningPath from './UserDashboard/LearningPath';
import Support from './UserDashboard/Support';
import Notifications from './UserDashboard/Notifications';
import NavigationPage from "./pages/Redirect";
import SidebarContext from "./components/context/SidebarContext";


// Create a component to conditionally render Footer
const AppFooter = () => {
  const location = useLocation();
  // Check if the current path is neither /login nor /register
  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }
  return <Footer />;
};

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* About Section */}
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/about/founding-team" element={<FoundingTeam />} /> */}

          {/* Course and Course Details Section */}
          <Route path="/course" element={<Course />} />
          <Route path="/course-details/:id" element={<CourseDetails />} /> {/* Dynamic Route for Course Details */}

          {/* Wonder Women Section */}
          <Route path="/educate" element={<Educate />} />
          <Route path="/wonderwomen" element={<WonderWomen />} />
          
          {/* Contact Section */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Payment Page */}
          <Route path="/payment" element={<PaymentPage />} />
          {/* Redirection */}
          <Route path="/redirection" element={<NavigationPage />} />

          {/* Shared Page Component */}
          <Route path="/contact" element={<PageComponent title="Contact Us" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sidebar" element={<Sidebar />} />
                <Route path="/header" element={<Header />} />
                 
                <Route path="/enrolled-courses" element={<EnrolledCourses />} />
                <Route path="/learning-path" element={<LearningPath />} />
                <Route path="/support" element={<Support />} />
                <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </AnimatePresence>
      <AppFooter /> {/* Conditionally render Footer here */}
    </div>
  </Router>
);

export default App;
