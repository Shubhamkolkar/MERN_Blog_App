import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/user/getusers?limit=5');
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/post/getposts?limit=5');
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          setLastMonthPosts(data.lastMonthPosts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch('/api/comment/getcomments?limit=5');
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }
  }, [currentUser]);

  return (
    <div className="p-6 mx-auto max-w-screen-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Users"
          count={totalUsers}
          icon={<HiOutlineUserGroup className="text-5xl text-white" />}
          change={lastMonthUsers}
          color="bg-gradient-to-r from-teal-500 to-cyan-600"
        />
        <StatCard
          title="Total Comments"
          count={totalComments}
          icon={<HiAnnotation className="text-5xl text-white" />}
          change={lastMonthComments}
          color="bg-gradient-to-r from-indigo-500 to-purple-600"
        />
        <StatCard
          title="Total Posts"
          count={totalPosts}
          icon={<HiDocumentText className="text-5xl text-white" />}
          change={lastMonthPosts}
          color="bg-gradient-to-r from-green-500 to-lime-600"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <TableCard
          title="Recent Users"
          link="/dashboard?tab=users"
          data={users}
          columns={['User image', 'Username']}
          renderRow={(user) => (
            <>
              <td className="p-3">
                <img
                  src={user.profilePicture}
                  alt="user"
                  className="w-10 h-10 rounded-full bg-gray-500"
                />
              </td>
              <td className="p-3">{user.username}</td>
            </>
          )}
        />
        <TableCard
          title="Recent Comments"
          link="/dashboard?tab=comments"
          data={comments}
          columns={['Comment content', 'Likes']}
          renderRow={(comment) => (
            <>
              <td className="p-3 max-w-xs">
                <p className="truncate">{comment.content}</p>
              </td>
              <td className="p-3">{comment.numberOfLikes}</td>
            </>
          )}
        />
        <TableCard
          title="Recent Posts"
          link="/dashboard?tab=posts"
          data={posts}
          columns={['Post image', 'Post Title', 'Category']}
          renderRow={(post) => (
            <>
              <td className="p-3">
                <img
                  src={post.image}
                  alt="post"
                  className="w-14 h-10 rounded-md bg-gray-500"
                />
              </td>
              <td className="p-3 max-w-xs">{post.title}</td>
              <td className="p-3">{post.category}</td>
            </>
          )}
        />
      </div>
    </div>
  );
}

function StatCard({ title, count, icon, change, color }) {
  return (
    <div className={`flex flex-col p-6 rounded-lg shadow-lg ${color} text-white`}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg uppercase">{title}</h3>
          <p className="text-3xl font-bold">{count}</p>
        </div>
        {icon}
      </div>
      <div className="flex items-center gap-2 mt-4 text-sm">
        <span className="flex items-center">
          <HiArrowNarrowUp className="mr-1" />
          {change}
        </span>
        <span>Last month</span>
      </div>
    </div>
  );
}

function TableCard({ title, link, data, columns, renderRow }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-between items-center p-4 bg-gray-100 border-b">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Link to={link} className="text-sm text-blue-600 hover:underline">
          See all
        </Link>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            {columns.map((col, index) => (
              <th key={index} className="p-3 text-sm font-semibold text-gray-700">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((item) => (
              <tr key={item._id} className="border-t border-gray-200">
                {renderRow(item)}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="p-3 text-center text-gray-500">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
