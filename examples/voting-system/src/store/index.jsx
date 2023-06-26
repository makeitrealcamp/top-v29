import { createContext, useReducer, useContext } from 'react';

const VotingContext = createContext();

const initialState = {
  totalVotes: 0,
  candidates: [
    { id: 1, name: 'Sally Student', votes: 0, percentage: 0 },
    { id: 2, name: 'Billy Bob', votes: 0, percentage: 0 },
    { id: 3, name: 'Joey Jojo', votes: 0, percentage: 0 },
    { id: 4, name: 'Anna Anxious', votes: 0, percentage: 0 },
  ],
  resultType: 'total', // total, percentage, all, none
};

// action -> { type: 'ADD_VOTE', payload: 1 } -> FLUX Standard Action

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_VOTE': {
      const id = action.payload;
      const newTotalVotes = state.totalVotes + 1;
      const newCandidates = state.candidates.map((candidate) => {
        if (candidate.id === id) {
          const votes = candidate.votes + 1;
          return {
            ...candidate,
            votes,
            percentage: (votes / newTotalVotes) * 100,
          };
        } else {
          return {
            ...candidate,
            percentage: (candidate.votes / newTotalVotes) * 100,
          };
        }
      });

      return {
        ...state,
        candidates: newCandidates,
        totalVotes: newTotalVotes,
      };
    }

    case 'CHANGE_RESULT_TYPE': {
      return {
        ...state,
        resultType: action.payload,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

export const VotingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch };

  return (
    <VotingContext.Provider value={store}>{children}</VotingContext.Provider>
  );
};

export const useVoting = () => {
  const store = useContext(VotingContext);

  if (!store) throw new Error('No se ha encontrado el contexto');

  return store;
};

// Es opcional dividirlo en 2 funciones
// export const useSelector = () => {
//   const store = useContext(VotingContext);

//   if (!store) throw new Error('No se ha encontrado el contexto');

//   return store.state;
// };

// export const useDispatch = () => {
//   const store = useContext(VotingContext);

//   if (!store) throw new Error('No se ha encontrado el contexto');

//   return store.dispatch;
// };
