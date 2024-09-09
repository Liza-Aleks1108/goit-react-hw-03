import Contact from "../Contact/Contact";

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
