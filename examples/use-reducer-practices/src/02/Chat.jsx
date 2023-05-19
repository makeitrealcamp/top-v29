import { useState } from 'react';

const Chat = ({contact, message, dispatch}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({ type: 'EDIT_MESSAGE', payload: value });
  };

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={handleChange}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}

export default Chat;
