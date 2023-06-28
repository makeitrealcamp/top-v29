import { createContext, useReducer, useContext } from 'react';

import reducer from './reducer';

const AppStateContext = createContext();

const initialState = {
  products: [],
  cart: [],
  total: 0,
  isLoading: false,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const store = { state, dispatch };

  return (
    <AppStateContext.Provider value={store}>
      {children}
    </AppStateContext.Provider>
  );
};

// Le ponemos este nombre para que sea mas facil de entender -> Redux
export const useSelector = () => {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error('useSelector must be used within a AppProvider');
  }

  return context.state;
};

export const useDispatch = () => {
  const context = useContext(AppStateContext);

  if (context === undefined) {
    throw new Error('useDispatch must be used within a AppProvider');
  }

  return context.dispatch;
};
