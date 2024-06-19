import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="bg-slate-200 p-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link to="/">
            <span>DevBlog</span>
          </Link>
        </div>

        {/* Search Field and Navigation Links */}
        <div className="flex-grow flex justify-center gap-2 items-center"> {/* Changed justify-between to justify-center */}
          {/* Search Field */}
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-1 rounded-lg focus:outline-none"
          />

          {/* Navigation Links */}
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/projects" className="text-white hover:text-gray-300">Projects</Link>
            </li>
          </ul>
        </div>

        {/* Dark Mode and Sign In Buttons */}
        <div className="flex items-center">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-full mr-2">
            Dark Mode
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-lg">
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
