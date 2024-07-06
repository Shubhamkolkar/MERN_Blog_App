import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from '../Components/Card';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className='bg-gray-100 min-h-screen'>
      <header className='bg-teal-500 text-white py-20'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-5xl font-bold lg:text-7xl animate-fadeIn'>Welcome to My Blog</h1>
          <p className='mt-6 text-xl lg:text-2xl animate-fadeIn delay-150'>
            Dive into articles and tutorials on web development, software engineering, and programming languages.
          </p>
          <Link
            to='/search'
            className='mt-8 inline-block bg-white text-teal-600 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105 animate-fadeIn delay-300'
          >
            View All Posts
          </Link>
        </div>
      </header>

      <main className='max-w-6xl mx-auto p-6'>
        {posts && posts.length > 0 && (
          <section className='mt-16'>
            <h2 className='text-3xl font-semibold text-center mb-12 animate-fadeIn'>Recent Posts</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
              {posts.map((post, index) => (
                <Card key={post._id} post={post} index={index} />
              ))}
            </div>
            <div className='text-center mt-16'>
              <Link
                to='/search'
                className='text-lg text-teal-600 font-bold hover:underline animate-fadeIn delay-400'
              >
                View All Posts
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
