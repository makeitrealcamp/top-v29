import { useState, useEffect } from 'react';
import axios from './util';

const URL = '/posts';

const GetAxiosExample = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, status } = await axios.get(URL) // Promise
      if (status === 200) setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Get Axios Example</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetAxiosExample;
