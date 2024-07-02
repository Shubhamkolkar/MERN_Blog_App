import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({post}) => {
    return (
        <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden m-4 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            {/* Image Section */}
            <div className="bg-gray-800">
            <Link to={`/post/${post.slug}`}>
                <img
                   src={post.image}
                   alt='post cover'
                   className='w-full h-48 object-cover  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
                />
                </Link>
            </div>

            {/* Content Section */}

            <div className="p-6">
                <div>

                <Link to={`/post/${post.slug}`}>
                <div className="flex items-center space-x-3">
                    <img
                        className="w-10 h-10 rounded-full"
                        src="path-to-your-profile-image"
                        alt="Profile"
                        />
                    <div>
                        <div className="font-medium text-black">Stokry</div>
                        <div className="text-gray-500">Jun 21</div>
                    </div>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                    <div className="mt-2 text-gray-600 ">
                    {post.category}
                        </div>
                    </div>
                    </Link>
                </div>

                {/* <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 space-x-1">
                        <span className="text-red-500">❤️</span>
                        <span>6 reactions</span>
                    </div>
                    <div className="flex items-center text-gray-500 space-x-1">
                        <span>💬</span>
                        <span>4 comments</span>
                    </div>
                    <div className="text-gray-500">2 min read</div>
                </div> */}
            </div>
        </div>
    );
};

export default Card;
