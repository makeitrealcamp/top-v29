import { useState } from 'react'

import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})

  const handleReadAll = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const config = {
      method: 'GET',
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleReadOne = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/2'
    const config = {
      method: 'GET',
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCreate = async() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const config = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(user),
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async() => {
    const userToCreate = {
      "name": "Cirsitna Moreno",
      "username": "khriztianmorneo",
      "email": "khriztianmorneo@april.biz"
    }


    const url = 'https://jsonplaceholder.typicode.com/users/2'
    const config = {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(userToCreate),
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async() => {
    const url = 'https://jsonplaceholder.typicode.com/users/2'
    const config = {
      method: 'DELETE',
    }

    try {
      const response = await fetch(url, config)
      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser({
      ...user,
      [name]: value,
    })
  }

  return (
    <div>
      <h1>React Fetch</h1>

      <div>
        <button onClick={handleReadAll}>Leer Todos</button>
        <button onClick={handleReadOne}>Leer Uno</button>
        <button onClick={handleCreate}>Crear</button>
        <button onClick={handleUpdate}>Actualizar</button>
        <button onClick={handleDelete}>Borrar</button>
      </div>

      <form>
        <input type="text" name="name" onChange={handleChange} defaultValue={user.name}/>
        <input type="email" name="email" onChange={handleChange} defaultValue={user.email}/>
        <input type="text" name="username" onChange={handleChange} defaultValue={user.username}/>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
