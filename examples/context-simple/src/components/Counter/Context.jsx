// 1. Crear un contexto
// 2. Usar ese contexto desde el componente que necesita los datos
// 3. Proveer ese contexto desde el componente que especifica los datos


// a. Importart el createContext
import { createContext, useState, useContext } from "react";

// b. Crear el contexto
const CounterContext = createContext();


// d. Crear el componente que provee el contexto
export const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const store = {
    counter,
    increment: () => setCounter(counter + 1),
    decrement: () => setCounter(counter - 1),
  }

  return (
    <CounterContext.Provider value={store}>
      {children}
    </CounterContext.Provider>
  )
};

// e. Custom Hook para consumir el contexto
export const useCounter = () => {
  const context = useContext(CounterContext)

  if (!context) {
    throw new Error('useCounter debe estar dentro del proveedor CounterProvider')
  }

  return context
}


// c. Exportar el contexto
export default CounterContext;
