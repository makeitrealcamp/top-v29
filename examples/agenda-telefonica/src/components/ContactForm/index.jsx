import { useState } from 'react';

import './ContactForm.css';

const ContactForm = ({ onAddContact }) => {
  const [contact, setContact] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      ...contact,
      id: Date.now(),
    }
    onAddContact(newContact)

    // Clear form
    setContact({})
  };

  return (
    <div className='container'>
      <h2 className="contact-form__title">Agregar contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <div className="contact-form__column">
            <label className="contact-form__label">
              Nombre:
            </label>
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              className="contact-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="contact-form__column">
            <label className="contact-form__label">
              Teléfono:
            </label>
            <input
              type="text"
              name="phone"
              placeholder='Enter your phone'
              className="contact-form__input"
              required
              onChange={handleChange}
            />
          </div>
          <div className="contact-form__column">
            <label className="contact-form__label">
              Foto:
            </label>
            <input
              type="url"
              name="photo"
              className="contact-form__input"
              placeholder='https://picsum.photos/200'
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="contact-form__button">
          Agregar
        </button>
      </form>
    </div>

  );
};

export default ContactForm;
