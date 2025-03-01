import React from "react";
import { FiHome, FiMessageCircle, FiSettings } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-60 bg-gray-900 text-white p-5 flex flex-col space-y-4">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <nav className="space-y-3">
        <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
          <FiHome /> <span>Home</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
          <FiMessageCircle /> <span>AI Chat</span>
        </a>
        <a href="#" className="flex items-center space-x-2 hover:text-gray-300">
          <FiSettings /> <span>Settings</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
