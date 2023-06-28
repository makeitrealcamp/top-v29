import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
  incrementAsync,
} from './counterSlice';

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState('2');
  const dispatch = useDispatch();
  const counter = useSelector(selectCount);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    const value = Number(incrementAmount);
    dispatch(incrementByAmount(value));
  };

  const handleIncrementByAmountAsync = () => {
    const value = Number(incrementAmount);
    dispatch(incrementAsync(value));
  };

  const handleChange = (e) => {
    setIncrementAmount(e.target.value);
  };

  return (
    <div>
      <h1>El contador esta en {counter}</h1>

      <div>
        <input
          type="number"
          name="incrementValue"
          value={incrementAmount}
          onChange={handleChange}
        />
      </div>

      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <button onClick={handleIncrementByAmount}>Add amount</button>
      <button onClick={handleIncrementByAmountAsync}>Async amount</button>
    </div>
  );
};

export default Counter;
