import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  // Log the current pathname for debugging
  // console.log("Current path:", location.pathname);

  return (
    <nav className="bg-[#efefef] p-4 flex justify-between items-center border-b-2">
      {/* Brand Logo */}
      <div className="flex items-center">
        <Link to="/">
          <span className='text-xl font-bold'>DevBlog.</span>
        </Link>
      </div>

      {/* Search Field */}
      <form onSubmit={handleSubmit} className="relative flex items-center hidden lg:flex">
        <input
          type="text"
          className="px-3 py-1 rounded-lg focus:outline-none"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="absolute right-0 mr-2 text-gray-400">
          <AiOutlineSearch />
        </button>
      </form>

      {/* Search Button for Mobile */}
      <button className="w-12 h-10 lg:hidden" onClick={handleSubmit}>
        <AiOutlineSearch />
      </button>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-4">
        <li>
          <Link to="/" className={`text-gray-700 hover:text-gray-300 ${location.pathname === '/' ? 'text-blue-700' : ''}`}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={`text-gray-700 hover:text-gray-300 ${location.pathname === '/about' ? 'text-blue-700' : ''}`}>About</Link>
        </li>
        <li>
          <Link to="/projects" className={`text-gray-700 hover:text-gray-300 ${location.pathname === '/projects' ? 'text-blue-700' : ''}`}>Projects</Link>
        </li>
      </ul>

      {/* User Profile */}
      <div className="flex items-center gap-2 z-20">
        {currentUser ? (
          <div className="relative">
            <button
              className="flex items-center focus:outline-none"
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              
            >
              <img
                src={currentUser.profilePicture}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <Link to={'/dashboard?tab=profile'} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</Link>
                <button onClick={handleSignout} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Sign out</button>
              </div>
            )}
          </div>
        ) : (
          <Link to='/signin'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-1 rounded-lg">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
