import { HiUser, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiAnnotation, HiChartPie } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
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

  return (
    <div className='w-full md:w-56 bg-[#f5f5f5] min-h-screen'>
      <div className='flex flex-col gap-1'>
        {currentUser && currentUser.isAdmin && (
          <Link to='/dashboard?tab=dash'>
            <div className={`cursor-pointer p-2 ${tab === 'dash' || !tab ? 'bg-gray-200' : ''}`}>
              <HiChartPie className='w-6 h-6 mr-2' />
              Dashboard
            </div>
          </Link>
        )}
        <Link to='/dashboard?tab=profile'>
          <div className={`cursor-pointer p-2 ${tab === 'profile' ? 'bg-gray-200' : ''}`}>
            <HiUser className='w-6 h-6 mr-2' />
            {currentUser.isAdmin ? 'Admin' : 'User'} Profile
          </div>
        </Link>
        {currentUser.isAdmin && (
          <Link to='/dashboard?tab=posts'>
            <div className={`cursor-pointer p-2 ${tab === 'posts' ? 'bg-gray-200' : ''}`}>
              <HiDocumentText className='w-6 h-6 mr-2' />
              Posts
            </div>
          </Link>
        )}
        {currentUser.isAdmin && (
          <>
            <Link to='/dashboard?tab=users'>
              <div className={`cursor-pointer p-2 ${tab === 'users' ? 'bg-gray-200' : ''}`}>
                <HiOutlineUserGroup className='w-6 h-6 mr-2' />
                Users
              </div>
            </Link>
            <Link to='/dashboard?tab=comments'>
              <div className={`cursor-pointer p-2 ${tab === 'comments' ? 'bg-gray-200' : ''}`}>
                <HiAnnotation className='w-6 h-6 mr-2' />
                Comments
              </div>
            </Link>
          </>
        )}
        <div className='cursor-pointer p-2' onClick={handleSignout}>
          <HiArrowSmRight className='w-6 h-6 mr-2' />
          Sign Out
        </div>
      </div>
    </div>
  );
}
