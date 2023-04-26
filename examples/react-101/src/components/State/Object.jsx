import { useState } from 'react'

const userInitial = {
  firstName: 'Cristian',
  lastName: 'Moreno',
  email: 'khriztianmoreno@gmail.com',
}

// Conclusiones
// 1. El estado es inmutable
// 2. No podemos modificar el estado directamente
// 3. Siempre debemos usar el método que nos proporciona el hook useState para actualizar el estado
// 4. Si el estado es un objeto o un array, debemos clonar el objeto o el array antes de actualizar el estado
// 5. Debemos modificar la propiedad del objeto o del array que queremos actualizar
// 6. Debemos actualizar el estado con ese nuevo objeto o un nuevo array

const UpdatatingObjectState = () => {
  // const state = useState(userInitial)
  // const user = state[0]
  // const setUser = state[1]
  const [user, setUser] = useState(userInitial) // [0, 1]

  const handleInputChange = (event) => {
    // const name = event.target.name
    // const value = event.target.value
    const { name, value } = event.target // es un objeto -> quiero las propiedades name y value

    // Clonando el objeto usando el operador spread (...)
    const myNewUser = {
      ...user,
      [name]: value
    }

    // Actualizando el estado con un nuevo objeto
    setUser(myNewUser)
  }

  return(
    <div>
      <h1>Updating Object State</h1>

      <div>
        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstName" id="firstName" onChange={handleInputChange} />
        </label>

        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName" id="lastName" onChange={handleInputChange} />
        </label>

        <label htmlFor="email">
          Email:
          <input type="email" name="email" id="email" onChange={handleInputChange} />
        </label>
        <label htmlFor="age">
          age:
          <input type="number" name="age" id="age" onChange={handleInputChange} />
        </label>
      </div>

      <h4>
        {user.firstName} {user.lastName} - {user.email} - {user.age}
      </h4>
    </div>
  )
}

export default UpdatatingObjectState
