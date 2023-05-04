import { useEffect, useState } from 'react'

const Form = ({ user }) => {
  let count = 0
  const [form, setForm] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value,
    })

    count = count + 1
  }

  useEffect(() => {
    console.log('dentro', count)

    return () => {
      console.log('fuera', count)
    }
  })



  // useEffect(() => {
  //   if (user.username === 'Bret') {
  //     alert('Hola Bret')
  //   }
  // }, [user])

  return(
    <form>
      <input type="text" name="name" onChange={handleChange} defaultValue={user.name}/>
      <input type="email" name="email" onChange={handleChange} defaultValue={user.email}/>
      <input type="text" name="username" onChange={handleChange} defaultValue={user.username}/>
    </form>
  )
}

export default Form
