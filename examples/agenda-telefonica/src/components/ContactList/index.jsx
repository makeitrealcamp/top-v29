import ContactCard from '../ContactCard';

import './ContactList.css';

const ContactList = ({ contacts = [] }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-list__item">
          <ContactCard
            name={contact.name}
            phone={contact.phone}
            photo={contact.photo}
          />
        </div>
      ))}
    </div>
  );
};

export default ContactList;
