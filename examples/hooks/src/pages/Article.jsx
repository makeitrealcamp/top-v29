import { useParams } from 'react-router-dom'

import useFetch from '../hooks/useFetch'

const Article = () => {
  const { id = 1 } = useParams()
  const post = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  return(
    <div>
      <h1>{post?.id} - {post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  )
}

export default Article
