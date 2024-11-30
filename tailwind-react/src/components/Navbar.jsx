// src/components/Navbar.js
import React, { useState, useEffect } from 'react';

function Navbar() {
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check saved dark mode preference from localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedMode);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode); // Save preference to localStorage
  };

  return (
    <div className={isDarkMode ? "bg-black text-white" : "bg-white text-black"}>
      {/* Container */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between p-4">
          {/* Logo and Menu */}
          <div className="flex items-center space-x-4">
            <div className="text-xl font-bold">DOML</div>
            <div className="space-x-4 hidden md:flex">
              <a href="#" className="hover:text-gray-300">Product</a>
              <a href="#" className="hover:text-gray-300">Team</a>
              <a href="#" className="hover:text-gray-300">Enterprise</a>
              <a href="#" className="hover:text-gray-300">Explore</a>
              <a href="#" className="hover:text-gray-300">Marketplace</a>
              <a href="#" className="hover:text-gray-300">Pricing</a>
            </div>
          </div>

          {/* Search and Account Settings */}
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search DOML"
              className="bg-gray-700 text-white px-4 py-2 rounded-md outline-none"
            />
            <button className="border border-gray-600 px-4 py-2 rounded-md hover:bg-gray-600">
              Sign In
            </button>
            <button className="bg-gray-500 px-4 py-2 rounded-md hover:bg-blue-600">
              Sign Up
            </button>

            {/* Dark Mode Toggle Button */}
            <button 
              onClick={toggleDarkMode} 
              className="bg-gray-600 px-4 py-2 rounded-md text-white hover:bg-gray-500">
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
