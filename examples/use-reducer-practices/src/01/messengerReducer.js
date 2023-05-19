export const initialState = {
  selectedId: 0,
  message: 'Hello',
};

export function messengerReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_SELECTION': {
      const contactId = payload;
      return {
        ...state,
        selectedId: contactId,
        message: '',
      };
    }
    case 'EDIT_MESSAGE': {
      const message = payload;
      return {
        ...state,
        message: message,
      };
    }
    default: {
      throw Error(`Unknown action: ${type}`);
    }
  }
}
