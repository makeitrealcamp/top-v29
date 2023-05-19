import { INCREMENT, DECREMENT } from './constants';

// reducer function
// Conocera la forma en que debe cambiar el estado
// Alguien que le gusta sacar fotocopias para hacer los cambios
function reducer(state = 0, action) {
  const  { type } = action;

  switch (type) {
    case INCREMENT: {
      return state + action.payload;
    }
    case DECREMENT: {
      return state - action.payload;
    }

    default: {
      return state;
    }
  }
}

export default reducer;
