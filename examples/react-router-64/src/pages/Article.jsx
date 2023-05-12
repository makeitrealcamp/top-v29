import { useLoaderData } from 'react-router-dom'

const Article = () => {
  const { post } = useLoaderData()
  return(
    <div>
      <h1>{post.id} - {post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default Article

export const loaderArticle = async ({ params }) => {
  const { id } = params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()

  return { post: data }
}
