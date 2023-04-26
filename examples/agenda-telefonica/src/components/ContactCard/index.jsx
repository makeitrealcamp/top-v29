import './style.css';

const ContactCard = (props) => {

  return (
    <div className="contact-card">
      <img src="https://picsum.photos/200" alt="Contact" className="contact-card__photo" />
      <div className="contact-card__info">
        <h2 className="contact-card__name">Cristian Moreno</h2>
        <p className="contact-card__phone">300-525-020</p>
      </div>
    </div>
  );
};

export default ContactCard;
