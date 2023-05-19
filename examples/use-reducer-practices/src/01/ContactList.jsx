const ContactList = ({contacts, selectedId, dispatch}) => {
  const handleClick = (id) => {
    // TODO: Despachar CHANGE_SELECTION
  }

  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => handleClick(contact.id)}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ContactList;
