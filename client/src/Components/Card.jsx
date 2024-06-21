import React from 'react';

const Card = () => {
    return (
        <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden m-4 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            {/* Image Section */}
            <div className="bg-gray-800">
                <img
                    className="w-full h-48 object-cover"
                    src="https://images.unsplash.com/photo-1718002125249-064336b5687b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="IconSnap"
                />
            </div>

            {/* Content Section */}
            <div className="p-6">
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
                    <h2 className="text-xl font-semibold text-gray-900">Join Us in Building IconSnap.me: Revolutionizing Real-Time Icon Correction</h2>
                    <div className="mt-2 text-gray-600">
                        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#python</span>
                        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#webdev</span>
                        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#job</span>
                    </div>
                </div>

                <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center text-gray-500 space-x-1">
                        <span className="text-red-500">❤️</span>
                        <span>6 reactions</span>
                    </div>
                    <div className="flex items-center text-gray-500 space-x-1">
                        <span>💬</span>
                        <span>4 comments</span>
                    </div>
                    <div className="text-gray-500">2 min read</div>
                </div>
            </div>
        </div>
    );
};

export default Card;
