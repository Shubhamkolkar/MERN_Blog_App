import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
// import { IoMoonOutline } from "react-icons/io5";
// <IoMoonOutline />
{/* <IoMoonSharp /> */}

const Header = () => {
const paths = useLocation().pathname
  return (
    <>
      <nav className="bg-[#efefef] p-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center">
          <Link to="/">
            <span className='text-xl font-bold'>DevBlog.</span>
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
          <ul className="flex items-center space-x-4 ">
          <li>
              <Link to="/" className={`text-gray-700 hover:text-gray-300 ${location.pathname === '/' ? 'text-blue-400' : ''}`}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={`text-gray-700 hover:text-gray-300 ${location.pathname === '/about' ? 'text-blue-400' : ''}`}>About</Link>
            </li>
            <li>
              <Link to="/projects" className={`text-gray-700 hover:text-gray-300 ${location.pathname === '/projects' ? 'text-blue-400' : ''}`}>Projects</Link>
            </li>
          </ul>
        </div>

        {/* Dark Mode and Sign In Buttons */}
        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-lg">
            <Link to="/signin">
            Sign In
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
