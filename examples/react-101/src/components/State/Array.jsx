import { useState } from 'react'

// anadir
// NO USAR -> push unshift
// USAR [].concat , ...

// Eliminar
// NO USAR -> pop, shift, splice
// USAR filter, slice

const UpdatatingArrayState = () => {
  const [user, setUser] = useState('');
  const [userNames, setUserNames] = useState(['cristian'])

  const handleInputChange = (event) => {
    const { value } = event.target
    setUser(value)
  }

  const handleClick = () => {
    // Insertar el nombre del nuevo usuario (user) en el arreglo (userNames)

    // USANDO CONCANT
    // const myUsers = userNames.concat(user)

    // setUserNames(myUsers)


    // USANDO spread ...
    const myUsers = [...userNames, user]
    setUserNames(myUsers)
  }

  // [].push() -> retorna la nueva longitud

  return(
    <div>
      <h1>Updating Array State</h1>

      <div>
        <label htmlFor="name">
          Name:
          <input type="text" name="name" id="name" onChange={handleInputChange} />
        </label>

        <button onClick={handleClick}>Agregar</button>
      </div>

      <ul>
        {
          userNames.map((userName, index) => (
            <li key={index}>{userName}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default UpdatatingArrayState
