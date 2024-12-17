import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, BookOpen, BookOpenCheck, LifeBuoy, Bell, LogOut, Menu, CheckCircle2, Circle } from "lucide-react";

// Define menu items
const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: BookOpen, label: "Enrolled Courses", path: "/enrolled-courses" },
  { icon: BookOpenCheck, label: "Learning Path", path: "/learning-path" },
  { icon: LifeBuoy, label: "Support", path: "/support" },
];

// Learning Path Data
const learningPath = [
  {
    phase: "Foundation",
    completed: true,
    courses: [
      { title: "Introduction to AI", completed: true },
      { title: "Python Basics", completed: true },
      { title: "Mathematics for AI", completed: true },
    ],
  },
  {
    phase: "Intermediate",
    completed: false,
    current: true,
    courses: [
      { title: "Machine Learning Fundamentals", completed: true },
      { title: "Data Analytics", completed: false, current: true },
      { title: "Neural Networks Basics", completed: false },
    ],
  },
  {
    phase: "Advanced",
    completed: false,
    courses: [
      { title: "Deep Learning", completed: false },
      { title: "Natural Language Processing", completed: false },
      { title: "Computer Vision", completed: false },
    ],
  },
];

const LearningPath = () => {
  const location = useLocation(); // Get the current route location
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [isMinimized, setIsMinimized] = useState(false); // Track sidebar state (expanded/minimized)

  // Logout handler
  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens, user session, etc.)
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isMinimized ? "w-20" : "w-64"
        } bg-purple-900 text-white p-4 flex flex-col transition-all duration-300 sticky top-0 h-screen overflow-auto`}
      >
        {/* Toggle Menu Button */}
        <button onClick={() => setIsMinimized(!isMinimized)} className="mb-6 text-white">
          <Menu className="w-6 h-6" />
        </button>

        {/* Sidebar header */}
        {!isMinimized && <h2 className="text-2xl font-bold mb-8">Ai4CoolKids</h2>}

        {/* Navigation menu */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon; // Extract the icon component
              const isActive = location.pathname === item.path; // Check if the menu item is active

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      isActive ? "bg-purple-800 text-white" : "hover:bg-purple-800/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {!isMinimized && <span>{item.label}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer menu */}
        <div className="border-t border-purple-800 pt-4 space-y-2">
          <Link
            to="/notifications"
            className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-800/50 ${
              isMinimized ? "justify-center" : ""
            }`}
          >
            <Bell className="w-5 h-5" />
            {!isMinimized && <span>Notifications</span>}
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-800/50 w-full"
          >
            <LogOut className="w-5 h-5" />
            {!isMinimized && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">My Learning Path</h1>

          <div className="max-w-3xl mx-auto">
            {learningPath.map((phase) => (
              <div key={phase.phase} className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  {phase.completed ? (
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Circle className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                  <h2 className="text-xl font-semibold text-gray-900">{phase.phase}</h2>
                </div>

                <div className="ml-4 border-l-2 border-gray-200 pl-8 space-y-6">
                  {phase.courses.map((course) => (
                    <div
                      key={course.title}
                      className={`p-4 rounded-lg ${
                        course.current
                          ? "bg-purple-50 border-2 border-purple-200"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {course.completed ? (
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          ) : (
                            <Circle className="w-5 h-5 text-gray-400" />
                          )}
                          <span className="font-medium">{course.title}</span>
                        </div>
                        {course.current && (
                          <span className="text-sm text-purple-600 font-medium">
                            In Progress
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
