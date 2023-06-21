import { useCounter } from './Context';

const Counter = () => {
  const { state, dispatch } = useCounter();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
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
