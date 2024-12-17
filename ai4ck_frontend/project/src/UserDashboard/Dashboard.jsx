
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  BookOpenCheck,
  LifeBuoy,
  Bell,
  LogOut,
  Menu,
  Clock,
  Award,
  TrendingUp,
  User,
} from "lucide-react";

// Menu items for the sidebar
const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: BookOpen, label: "Enrolled Courses", path: "/enrolled-courses" },
  { icon: BookOpenCheck, label: "Learning Path", path: "/learning-path" },
  { icon: LifeBuoy, label: "Support", path: "/support" },
];

// Dashboard statistics data
const stats = [
  { label: "Completed Courses", value: "0" },
  { label: "Ongoing Courses", value: "1" },
  { label: "Cancelled Courses", value: "0" },
];

// Sidebar component
const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMinimized, setIsMinimized] = useState(false);
  const [userName, setUserName] = useState("");

  // Fetch user name from local storage (or use context, etc.)
  useEffect(() => {
    const user = localStorage.getItem("user"); // Replace this with actual user data fetching logic
    if (user) {
      setUserName(user); // Assuming the user is stored as a string (e.g., "John Doe")
    }
  }, []);

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from local storage on logout
    navigate("/"); // Redirect to home or login page
  };

  return (
    <div className="flex h-screen">
      {/* Sticky Sidebar */}
      <div
        className={`${
          isMinimized ? "w-20" : "w-64"
        } bg-purple-900 text-white p-4 flex flex-col transition-all duration-300 sticky top-0 h-screen`}
      >
        {/* Toggle Menu Button */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="mb-6 text-white"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Sidebar Header */}
        {!isMinimized && <h2 className="text-2xl font-bold mb-8">Ai4CoolKids</h2>}

        {/* Navigation Menu */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

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

        {/* Footer Menu */}
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

      {/* Main Content Area (Dashboard) */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <div className="dashboard-content">
          {/* User Info Section */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="w-10 h-10 text-gray-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Hello {userName || "Guest"},
              </h1>
              <p className="text-sm text-gray-500">Welcome to AI4COOLKIDS</p>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Continue Learning Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Continue Learning</h2>
              <div className="space-y-4">
                {[{ title: "Introduction to AI", progress: 75 }].map((course) => (
                  <div key={course.title} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{course.title}</span>
                      <span className="text-sm text-gray-500">{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-purple-600 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Sessions Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
              <div className="space-y-4">
                {[{ title: "AI Learning Course 1", date: "Tomorrow, 2:00 PM", instructor: "K.Kalpana" }].map(
                  (session) => (
                    <div key={session.title} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{session.title}</h3>
                        <p className="text-sm text-gray-500">{session.date}</p>
                        <p className="text-sm text-gray-500">{session.instructor}</p>
                      </div>
                      <button className="px-3 py-1 text-sm text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50">
                        Join
                      </button>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;