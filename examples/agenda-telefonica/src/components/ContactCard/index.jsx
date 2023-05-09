import { useState } from 'react';

import './style.scss';

const ContactCard = ({ name, phone, photo }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  }

  const classCard = isSelected ? 'contact-card--selected' : '';

  return (
    <div className={`contact-card ${classCard}`} onClick={handleClick}>
      <img src={photo} alt="Contact" className="contact-card__photo" />
      <div className="contact-card__info">
        <h2 className="contact-card__name">{name}</h2>
        <p className="contact-card__phone">{phone}</p>
      </div>
    </div>
  );
};

export default ContactCard;
