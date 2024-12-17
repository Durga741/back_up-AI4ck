import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BookOpenCheck, LifeBuoy, Bell, LogOut, Menu, Award, MessageCircle } from 'lucide-react';

// Define menu items for the sidebar
const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: BookOpen, label: 'Enrolled Courses', path: '/enrolled-courses' },
  { icon: BookOpenCheck, label: 'Learning Path', path: '/learning-path' },
  { icon: LifeBuoy, label: 'Support', path: '/support' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
];

// Sample notifications data
const notifications = [
  {
    id: 1,
    type: 'course',
    title: 'New lesson available',
    message: 'The next lesson in "Introduction to AI" is now available',
    time: '2 hours ago',
    icon: BookOpen,
    read: false,
  },
  {
    id: 2,
    type: 'achievement',
    title: 'Certificate earned',
    message: "Congratulations! You've earned the Python Basics certificate",
    time: '1 day ago',
    icon: Award,
    read: true,
  },
  {
    id: 3,
    type: 'support',
    title: 'Ticket update',
    message: 'Your support ticket #1234 has been resolved',
    time: '2 days ago',
    icon: MessageCircle,
    read: true,
  },
];

const Notifications = () => {
  const location = useLocation(); // Get the current route location
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [isMinimized, setIsMinimized] = useState(false); // Track sidebar state (expanded/minimized)

  // Logout handler
  const handleLogout = () => {
    // Add any logout logic here (e.g., clearing tokens, user session, etc.)
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isMinimized ? 'w-20' : 'w-64'
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
                      isActive ? 'bg-purple-800 text-white' : 'hover:bg-purple-800/50'
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
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Notifications</h1>
          <button className="text-sm text-purple-600 hover:text-purple-800">
            Mark all as read
          </button>

          <div className="space-y-4 mt-4">
            {notifications.map((notification) => {
              const Icon = notification.icon;

              return (
                <div
                  key={notification.id}
                  className={`bg-white rounded-lg p-4 shadow-sm border-l-4 ${
                    notification.read ? 'border-gray-200' : 'border-purple-500'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-2 rounded-lg ${
                        notification.read ? 'bg-gray-100' : 'bg-purple-100'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          notification.read ? 'text-gray-600' : 'text-purple-600'
                        }`}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {notification.title}
                          </h3>
                          <p className="text-gray-600 mt-1">{notification.message}</p>
                        </div>
                        <span className="text-sm text-gray-500">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
