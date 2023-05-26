export const initialState = {
  selectedId: 0,
  messages: {
    0: 'Hello, Taylor',
    1: 'Hello, Alice',
    2: 'Hello, Bob',
  },
};

export function messengerReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_SELECTION': {
      const contactId = payload;
      return {
        ...state,
        selectedId: contactId,
      };
    }
    case 'EDIT_MESSAGE': {
      const message = payload;

      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: message,
        },
      };
    }
    case 'SENT_MESSAGE': {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: '',
        },
      };
    }
    default: {
      throw Error(`Unknown action: ${type}`);
    }
  }
}
