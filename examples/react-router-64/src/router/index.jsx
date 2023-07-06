import { createBrowserRouter } from 'react-router-dom'

import Root from '../layout/Root'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog, { loaderBlogs } from '../pages/Blog'
import Article, { loaderArticle } from '../pages/Article'
import NotFound from '../pages/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'blog',
        element: <Blog />,
        loader: loaderBlogs,
      },
      {
        path: 'blog/:id',
        element: <Article />,
        loader: loaderArticle,
      },
    ],
  },
])
console.log("🚀 ~ file: index.jsx:42 ~ router:", router)

export default router
