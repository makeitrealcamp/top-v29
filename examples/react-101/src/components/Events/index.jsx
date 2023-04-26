

function EventExample() {

  const handleClick = () => {
    alert('Hello World')
  }

  const handleChange = (evt) => {
    console.log(evt.target.name, evt.target.value)
  }

  return (
    <>

      <h1>Vite + React</h1>

      {/* Esto es un comentario */}

      <input type="text" placeholder='Enter name' onChange={handleChange} name="fullName" />

      <textarea name="description" id="" cols="30" rows="10" onChange={handleChange} />

      <select name="hobby" onChange={handleChange}>
        <option value="football">Football</option>
        <option value="basketball">Basketball</option>
        <option value="swimming">Swimming</option>
      </select>

      <input type="number" placeholder='Enter age' onChange={handleChange} name="age" />

      <button onClick={ handleClick }>Click me</button>
    </>
  )
}

export default EventExample
