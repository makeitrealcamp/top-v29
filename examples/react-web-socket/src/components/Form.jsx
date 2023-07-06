import { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({ onHandleMessage }) => {
  const [inputMsg, setInputMsg]  = useState('')

  const handleChange = (e) => {
    setInputMsg(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onHandleMessage(inputMsg)
    setInputMsg('')
  }

  return(
    <form id="form" onSubmit={handleSubmit}>
      <input
        id="input"
        autoComplete="off"
        onChange={handleChange}
        value={inputMsg}
      />
      <button type="submit">Send</button>
    </form>
  )
}

Form.propTypes = {
  onHandleMessage: PropTypes.func.isRequired,
}

export default Form
