import { useEffect, useState } from "react"

async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json()
}

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}

async function fetchComments() {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  return res.json()
}

const ParallelExample = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {

    const fetchAll = async () => {

      const promiseUsers = fetchUsers()
      const promisePosts = fetchPosts()
      const promiseComments = fetchComments()

      const [postsData, usersData, commentsData] = await Promise.all([promisePosts, promiseUsers, promiseComments])

      setUsers(usersData)
      setPosts(postsData)
      setComments(commentsData)
    }

    fetchAll()
  }, [])

  return(
    <div>
      <h1>Parallel Example</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ParallelExample
