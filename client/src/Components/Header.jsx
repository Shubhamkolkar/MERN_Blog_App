import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
// import { IoMoonOutline } from "react-icons/io5";
// <IoMoonOutline />
{/* <IoMoonSharp /> */}

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
        <div className="flex-grow flex justify-center gap-8 items-center"> 
          {/* Search Field */}
          <form>
            <div className="relative flex items-center">
              <input
                type="text"
                className="px-3 py-1 rounded-lg focus:outline-none "
                placeholder="Search"
              />
              <div className="absolute right-0 mr-2 text-gray-400 hidden lg:inline">
                <AiOutlineSearch />
              </div>
            </div>
          </form>

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
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-lg">
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
