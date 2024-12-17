// 
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, BookOpen, BookOpenCheck, LifeBuoy, Bell, LogOut, Menu, Clock } from "lucide-react";

// Define menu items
const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: BookOpen, label: "Enrolled Courses", path: "/enrolled-courses" },
  { icon: BookOpenCheck, label: "Learning Path", path: "/learning-path" },
  { icon: LifeBuoy, label: "Support", path: "/support" },
];

// Course data
const courses = [
  {
    id: 1,
    title: "Introduction to Artificial Intelligence",
    instructor: "Dr. Sarah Johnson",
    progress: 75,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400",
    duration: "8 weeks",
    lessons: 12,
  },
  // {
  //   id: 2,
  //   title: "Data Analytics Fundamentals",
  //   instructor: "Prof. Michael Chen",
  //   progress: 45,
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
  //   duration: "6 weeks",
  //   lessons: 8,
  // },
  // Add more courses as needed
];

const EnrolledCourses = () => {
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
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">My Enrolled Courses</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.instructor}</p>

                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-purple-600 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>

                    <button className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      Continue Learning
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourses;
