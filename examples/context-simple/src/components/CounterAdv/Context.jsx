// 1. Crear un contexto
// 2. Usar ese contexto desde el componente que necesita los datos
// 3. Proveer ese contexto desde el componente que especifica los datos

// a. Importart el createContext
import { createContext, useReducer, useContext } from 'react';

// b. Crear el contexto
const CounterContext = createContext();

const initialState = {
  counter: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

  // const options = {
  //   INCREMENT: () => {
  //     return { ...state, counter: state.counter + 1 };
  //   },
  //   DECREMENT: () => {
  //     return { ...state, counter: state.counter - 1 };
  //   }
  // }

  // if (options[action.type]) {
  //   return options[action.type]();
  // } else {
  //   throw new Error(`Unhandled action type: ${action.type}`);
  // }
}

// d. Crear el componente que provee el contexto
export const CounterProvider = ({ children }) => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState); // la arquitecura de Flux

  const store = {
    state,
    dispatch,
  };

  return (
    <CounterContext.Provider value={store}>{children}</CounterContext.Provider>
  );
};

// e. Custom Hook para consumir el contexto
export const useCounter = () => {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error(
      'useCounter debe estar dentro del proveedor CounterProvider',
    );
  }

  return context;
};

// c. Exportar el contexto
export default CounterContext;
