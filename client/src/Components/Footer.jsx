import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

const FooterCom = () => {
  return (
    <footer className='bg-gray-800 text-white'>
      <div className='container mx-auto py-8 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='mt-5'>
            <Link to='/' className='text-lg sm:text-xl font-semibold'>
              DevBlog.
            </Link>
          </div>
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6'>
            <div>
              <h3 className='font-semibold'>About</h3>
              <ul className='mt-2'>
                <li>
                  <Link to='/about'>DevBLog </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold'>Follow us</h3>
              <ul className='mt-2'>
                <li>
                  <a href='https://github.com/Shubhamkolkar' target='_blank' rel='noopener noreferrer'>
                    Github
                  </a>
                </li>
                <li>
                  <a href='#'>Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='font-semibold'>Legal</h3>
              <ul className='mt-2'>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#'>Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-600' />
        <div className='flex justify-between items-center'>
          <p>&copy; {new Date().getFullYear()} Shubham Kolkar All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='#' className='text-white'><BsFacebook /></a>
            <a href='#' className='text-white'><BsInstagram /></a>
            <a href='#' className='text-white'><BsTwitter /></a>
            <a href='https://github.com/Shubhamkolkar' target='_blank' rel='noopener noreferrer' className='text-white'>
              <BsGithub />
            </a>
            <a href='#' className='text-white'><BsDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCom;
