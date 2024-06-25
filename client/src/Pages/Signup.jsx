
import React, { useState } from 'react';
import { useNavigation, useNavigate, Link } from 'react-router-dom';
import OAuth from '../Components/OAuth';

const signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please Fill Out The Details")
    }
    const trimmedFormData = {
      ...formData,
      username: formData.username.trim()
  };

  setLoading(true);
  try {
      const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(trimmedFormData)
      });
      const data = await res.json();
      setLoading(false);
      if (res.ok) {
        navigate('/signin');
      } else {
        setErrorMessage(data.message || 'Something went wrong!');
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage('Something went wrong!');
    }
    console.log(formData); // You can handle form submission here
    setFormData({
      username: '',
      email: '',
      password: ''
  });

  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">

      <Link to='/' className='font-bold text-4xl text-indigo-600 mb-8'>
        devBlog
      </Link>



      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="text" id="username" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-4">
            <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="mb-6">
            <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700" disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
          {errorMessage && <div className="mt-4 text-red-500">{errorMessage}</div>}
        </form>
        <OAuth/>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/signin' className='text-blue-500'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default signup