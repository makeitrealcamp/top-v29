import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(1);

  const handleAdd = () => {
    setCounter(counter + amount);
  };

  const habndleSubstract = () => {
    setCounter(counter - amount);
  };

  const handleChange = (event) => {
    const value = Number(event.target.value);
    setAmount(value);
  };

  return (
    <>
      <h1>El valor del contador es: {counter} </h1>

      <input type="number" name="amount" placeholder='cantidad' onChange={handleChange} />

      <button onClick={handleAdd}> +{amount} </button>
      <button onClick={habndleSubstract}> -{amount} </button>
    </>
  );
}

export default Counter;
