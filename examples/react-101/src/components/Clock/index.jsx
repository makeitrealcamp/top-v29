import { useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date().toString())

  setInterval(() => {
    setTime(new Date().toString())
  }, 5000)


  return(
    <div>
      <h1>La hora es: {time}</h1>
    </div>
  )
}

export default Clock
