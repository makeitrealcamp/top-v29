import { useCounter, decrement, increment } from './Context';

const Counter = () => {
  const { state, dispatch } = useCounter();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>El contador esta en {state.counter}</h1>

      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
