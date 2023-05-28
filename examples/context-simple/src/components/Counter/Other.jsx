import { useCounter } from "./Context"

const Component = () => {
  const { counter } = useCounter()
  return(
    <div>
      {counter}
    </div>
  )
}

export default Component
