import { useState, useMemo } from "react";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";

// Масив контактів для початкового значення стану
const initialContactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts] = useState(initialContactList);
  const [searchTerm, setSearchTerm] = useState("");

  // Фільтрація контактів за ім'ям
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, contacts]);

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <SearchBox onSearch={setSearchTerm} />
      <ContactList contacts={filteredContacts} />{" "}
    </div>
  );
}

export default App;
