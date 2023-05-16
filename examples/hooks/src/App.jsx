import { Routes, Route  } from 'react-router-dom'

import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Blog from './pages/Blog'
import Article from './pages/Article'
import Header from './components/Header'

import './App.css'

function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Article />} />
      </Routes>
    </div>
  )
}

export default App
