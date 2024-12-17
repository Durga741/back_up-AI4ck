
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BookOpen, BookOpenCheck, LifeBuoy, Bell, LogOut, Menu, MessageCircle, Clock } from 'lucide-react';

// Define menu items for the sidebar
const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: BookOpen, label: 'Enrolled Courses', path: '/enrolled-courses' },
  { icon: BookOpenCheck, label: 'Learning Path', path: '/learning-path' },
  { icon: LifeBuoy, label: 'Support', path: '/support' },
];

// Sample support tickets data
const tickets = [
  {
    id: 1,
    title: 'Course Video Not Playing',
    status: 'Open',
    priority: 'High',
    date: '2024-03-10',
    messages: 3,
  },
  {
    id: 2,
    title: 'Certificate Download Issue',
    status: 'Closed',
    priority: 'Medium',
    date: '2024-03-08',
    messages: 5,
  },
];

const Support = () => {
  const location = useLocation(); // Get the current route location
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [isMinimized, setIsMinimized] = useState(false); // Track sidebar state (expanded/minimized)
  const [showNewTicket, setShowNewTicket] = useState(false); // Toggle new ticket form visibility

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
          <Link
            to="/notifications"
            className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-800/50 ${
              isMinimized ? 'justify-center' : ''
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
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Support Tickets</h1>

          <div className="flex justify-between items-center mb-6">
            <button
              onClick={() => setShowNewTicket(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              New Ticket
            </button>
          </div>

          {/* New Ticket Form */}
          {showNewTicket && (
            <div className="mb-6 bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Create New Ticket</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Priority
                  </label>
                  <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500"
                    rows={4}
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowNewTicket(false)}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Submit Ticket
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Ticket List */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="grid grid-cols-6 gap-4 p-4 border-b font-medium text-gray-500">
              <div className="col-span-2">Subject</div>
              <div>Status</div>
              <div>Priority</div>
              <div>Date</div>
              <div>Messages</div>
            </div>

            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="grid grid-cols-6 gap-4 p-4 border-b last:border-0 items-center hover:bg-gray-50"
              >
                <div className="col-span-2 font-medium">{ticket.title}</div>
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      ticket.status === 'Open'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {ticket.status}
                  </span>
                </div>
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      ticket.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : ticket.priority === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </div>
                <div className="text-gray-500 flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {ticket.date}
                </div>
                <div className="flex items-center text-gray-500">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  {ticket.messages}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;