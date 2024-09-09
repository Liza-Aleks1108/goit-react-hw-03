import userImage from "./img/user.png";
import phoneImage from "./img/phone.png";

function Contact({ contact, onDelete }) {
  return (
    <li>
      <img src={userImage} width={20} alt="user" />
      <span>{contact.name}</span> <br />
      <img src={phoneImage} width={20} alt="phone" />
      <span>{contact.number}</span>
      <div>
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </div>
    </li>
  );
}

export default Contact;
