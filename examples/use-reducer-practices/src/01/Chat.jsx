import { useState } from 'react';

const Chat = ({contact, message, dispatch}) => {
  const handleChange = (e) => {
    // TODO: Despachar EDIT_MESSAGE
    // (Lee el valor del input en e.target.value)
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
