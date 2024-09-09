import userImage from "./img/user.png";
import phoneImage from "./img/phone.png";

function Contact({ contact }) {
  return (
    <li>
      <img src={userImage} width={20} />
      <span>{contact.name}</span> <br />
      <img src={phoneImage} width={20} />
      <span>{contact.number}</span>
      <div>
        <button>Delete</button>
      </div>
    </li>
  );
}

export default Contact;
