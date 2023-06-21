import { useCounter } from './Context'

const TextCounter = () => {
  const { counter } = useCounter()
  return(
    <h1>
      El valor del counter es {counter}
    </h1>
  )
}

export default TextCounter
