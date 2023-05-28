import { useCounter } from './Context'

const Counter = () => {
  const { counter, increment, decrement } = useCounter()

  const handleIncrement = () => {
    increment()
  }

  const handleDecrement = () => {
    decrement()
  }

  return(
    <div>
      <h1>El contador esta en {counter}</h1>

      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  )
}

export default Counter
