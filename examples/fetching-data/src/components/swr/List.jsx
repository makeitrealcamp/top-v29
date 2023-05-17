import useSWR from "swr"

import { fetcher } from "./fetcher";

const GetSWRExample = () => {
  const { data: posts, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  return (
    <div>
      <h1>Get SWR Example</h1>
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

export default GetSWRExample;
