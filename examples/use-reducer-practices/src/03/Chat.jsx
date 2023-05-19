import { useState } from 'react';

const Chat = ({contact, message, dispatch}) => {
  const handleChange = (e) => {
    const { value } = e.target;
    dispatch({ type: 'EDIT_MESSAGE', payload: value });
  };

  const handleClick = () => {
    alert(`Sending "${message}" to ${contact.email}`);
    dispatch({ type: 'SENT_MESSAGE' });
  };

  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleClick}>
        Send to {contact.email}
      </button>
    </section>
  );
}

export default Chat;
