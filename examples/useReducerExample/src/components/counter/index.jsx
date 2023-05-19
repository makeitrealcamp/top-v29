import { useState, useReducer } from 'react';

import reducer from './reducer';
import { INCREMENT, DECREMENT } from './constants';

// Initial state
const initialState = 0;

// init function

function Counter() {
  const [value, setValue] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleIncrement = () => {
    // Parametros del dispatch -> action  -> object -> { type: 'INCREMENT' }
    dispatch({ type: INCREMENT, payload: value })
  };

  const handleDecrement = () => {
     // Parametros del dispatch -> action  -> object -> { type: 'DECREMENT' }
    dispatch({ type: DECREMENT, payload: value })
  };

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  }

  return (
    <>
      <h1>Counter: {state}</h1>
      <input type="number" name="value" onChange={handleChange} defaultValue={1}/>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}


export default Counter;
