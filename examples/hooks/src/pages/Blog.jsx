import { Link, useNavigate } from 'react-router-dom'

import useFetch from '../hooks/useFetch'

// Cuando ud necesite traer datos de una API (al momento de cargar la pagina), debe usar el hook useEffect

const Blog = () => {
  const post = useFetch('https://jsonplaceholder.typicode.com/posts')
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/blog/${id}`)
  }

  return(
    <div>
      <h1>Blog</h1>

      <ul>
        {post && post.map((item, index) => (
          <li key={index}>
            <Link to={`/blog/${item.id}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
