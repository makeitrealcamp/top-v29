import React, { useState, SyntheticEvent, ChangeEvent } from 'react'

const Form = () => {
  const [form, setForm] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement >) => {
    const target = e.target
    const name = target.name
    const value = target.value
    const checked = target.checked

    setForm({
      ...form,
      [name]: value
    })
  }


  return(
    <form>
      <input type="text" name="fullName" onChange={handleChange}/>

      <input type="checkbox" name="confirm" id="" onChange={handleChange} />

      <select name="country" id="" onChange={handleChange} >
        <option value="">Option 1</option>
      </select>

      <textarea name="about" id="" onChange={handleChange}></textarea>
    </form>
  )
}

export default Form
