import { useState } from 'react';

import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

import { contacts as contactList } from './assets/data';

import './App.css'


function App() {
  const [contacts, setContacts] = useState(contactList);

  const handleAddContact = (newContact) => {
    setContacts([
      ...contacts,
      newContact
    ])
  }

  return (
    <div>
      <h1>Lista de Contactos</h1>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList contacts={contacts} />
    </div>
  )
}

export default App
