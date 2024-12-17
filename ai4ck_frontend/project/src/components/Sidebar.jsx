
// import React, { useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import {
//   LayoutDashboard,
//   BookOpen,
//   BookOpenCheck,
//   LifeBuoy,
//   Bell,
//   LogOut,
//   Menu,
// } from "lucide-react";

// // Define menu items
// const menuItems = [
//   { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
//   { icon: BookOpen, label: "Enrolled Courses", path: "/enrolled-courses" },
//   { icon: BookOpenCheck, label: "Learning Path", path: "/learning-path" },
//   { icon: LifeBuoy, label: "Support", path: "/support" },
// ];

// const Sidebar = ({ children }) => {
//   const location = useLocation(); // Get the current route location
//   const navigate = useNavigate(); // Hook for programmatic navigation
//   const [isMinimized, setIsMinimized] = useState(false); // Track sidebar state (expanded/minimized)

//   // Logout handler
//   const handleLogout = () => {
//     // Add any logout logic here (e.g., clearing tokens, user session, etc.)
//     navigate("/"); // Navigate to the home page
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div
//         className={`${
//           isMinimized ? "w-20" : "w-64"
//         } bg-purple-900 text-white p-4 flex flex-col transition-all duration-300 sticky top-0 h-screen overflow-auto`}
//       >
//         {/* Toggle Menu Button */}
//         <button
//           onClick={() => setIsMinimized(!isMinimized)}
//           className="mb-6 text-white"
//         >
//           <Menu className="w-6 h-6" />
//         </button>

//         {/* Sidebar header */}
//         {!isMinimized && (
//           <h2 className="text-2xl font-bold mb-8">Ai4CoolKids</h2>
//         )}

//         {/* Navigation menu */}
//         <nav className="flex-1">
//           <ul className="space-y-2">
//             {menuItems.map((item) => {
//               const Icon = item.icon; // Extract the icon component
//               const isActive = location.pathname === item.path; // Check if the menu item is active

//               return (
//                 <li key={item.path}>
//                   <Link
//                     to={item.path}
//                     className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
//                       isActive
//                         ? "bg-purple-800 text-white"
//                         : "hover:bg-purple-800/50"
//                     }`}
//                   >
//                     <Icon className="w-5 h-5" />
//                     {!isMinimized && <span>{item.label}</span>}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* Footer menu */}
//         <div className="border-t border-purple-800 pt-4 space-y-2">
//           <Link
//             to="/notifications"
//             className={`flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-800/50 ${
//               isMinimized ? "justify-center" : ""
//             }`}
//           >
//             <Bell className="w-5 h-5" />
//             {!isMinimized && <span>Notifications</span>}
//           </Link>

//           <button
//             onClick={handleLogout}
//             className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-800/50 w-full"
//           >
//             <LogOut className="w-5 h-5" />
//             {!isMinimized && <span>Logout</span>}
//           </button>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 p-6 bg-gray-100 overflow-auto">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  BookOpenCheck,
  LifeBuoy,
  Bell,
  LogOut,
  Menu,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: BookOpen, label: "Enrolled Courses", path: "/enrolled-courses" },
  { icon: BookOpenCheck, label: "Learning Path", path: "/learning-path" },
  { icon: LifeBuoy, label: "Support", path: "/support" },
];

const Sidebar = ({ children }) => {
  const location = useLocation(); // Get the current route location
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [isMinimized, setIsMinimized] = useState(false); // Track sidebar state (expanded/minimized)

  const handleLogout = () => {
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
        <button
          onClick={() => {
            setIsMinimized((prevState) => !prevState); // Toggle state
            console.log("Sidebar state:", !isMinimized); // Debug state toggle
          }}
          className="mb-6 text-white"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Sidebar header */}
        {!isMinimized && (
          <h2 className="text-2xl font-bold mb-8">Ai4CoolKids</h2>
        )}

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
                      isActive
                        ? "bg-purple-800 text-white"
                        : "hover:bg-purple-800/50"
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
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">{children}</div>
    </div>
  );
};

export default Sidebar;
