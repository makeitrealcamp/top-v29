import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Article = () => {
  const [post, setPost] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then(response => response.json())
     .then(data => setPost(data))
  }, [id])

  return(
    <div>
      <h1>{post.id} - {post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Article
