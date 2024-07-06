import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../Components/Card';

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/post/getposts?${searchQuery}`);
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        setShowMore(data.posts.length === 9);
      } else {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSidebarData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    navigate(`/search?${urlParams.toString()}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', numberOfPosts);
    const res = await fetch(`/api/post/getposts?${urlParams.toString()}`);
    if (res.ok) {
      const data = await res.json();
      setPosts((prevPosts) => [...prevPosts, ...data.posts]);
      setShowMore(data.posts.length === 9);
    }
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <aside className='p-6 border-b md:border-r md:min-h-screen border-gray-300'>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
          <div className='flex items-center gap-2'>
            <label className='whitespace-nowrap font-semibold'>Search Term:</label>
            <input
              className='p-2 border border-gray-300 rounded-lg'
              placeholder='Search...'
              id='searchTerm'
              type='text'
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <select
              className='p-2 border border-gray-300 rounded-lg'
              id='sort'
              value={sidebarData.sort}
              onChange={handleChange}
            >
              <option value='desc'>Latest</option>
              <option value='asc'>Oldest</option>
            </select>
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Category:</label>
            <select
              className='p-2 border border-gray-300 rounded-lg'
              id='category'
              value={sidebarData.category}
              onChange={handleChange}
            >
              <option value='uncategorized'>Uncategorized</option>
              <option value='reactjs'>React.js</option>
              <option value='nextjs'>Next.js</option>
              <option value='javascript'>JavaScript</option>
            </select>
          </div>
          <button
            type='submit'
            className='bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300'
          >
            Apply Filters
          </button>
        </form>
      </aside>
      <main className='w-full p-6'>
        <h1 className='text-3xl font-semibold border-b border-gray-300 pb-4'>
          Posts results:
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {loading && <p className='text-xl text-gray-500'>Loading...</p>}
          {!loading && posts.length === 0 && <p className='text-xl text-gray-500'>No posts found.</p>}
          {!loading && posts.map((post) => <Card key={post._id} post={post} />)}
        </div>
        {showMore && (
          <div className='text-center mt-8'>
            <button
              onClick={handleShowMore}
              className='text-teal-500 text-lg hover:underline'
            >
              Show More
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
