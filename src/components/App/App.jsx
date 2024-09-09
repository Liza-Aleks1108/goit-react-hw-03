import { useState, useMemo, useEffect } from "react";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import ContactForm from "../ContactForm/ContactForm.jsx";

// Масив контактів для початкового значення стану
const initialContactList = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

// Функція для отримання контактів з локального сховища
const loadContactsFromLocalStorage = () => {
  const savedContacts = localStorage.getItem("contacts");
  return savedContacts ? JSON.parse(savedContacts) : [];
};

// Функція для збереження контактів у локальному сховищі
const saveContactsToLocalStorage = (contacts) => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
};

function App() {
  const [contacts, setContacts] = useState(() => {
    // Використовуємо початковий масив, якщо локальне сховище пусте
    return loadContactsFromLocalStorage().length > 0
      ? loadContactsFromLocalStorage()
      : initialContactList;
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Фільтрація контактів за ім'ям
  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, contacts]);

  // Функція додавання контакту
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [...prevContacts, newContact];
      saveContactsToLocalStorage(updatedContacts);
      return updatedContacts;
    });
  };

  // Функція видалення контакту
  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      const updatedContacts = prevContacts.filter(
        (contact) => contact.id !== id
      );
      saveContactsToLocalStorage(updatedContacts);
      return updatedContacts;
    });
  };

  useEffect(() => {
    // Завантаження контактів при першому рендері
    const savedContacts = loadContactsFromLocalStorage();
    if (savedContacts.length > 0) {
      setContacts(savedContacts);
    }
  }, []);

  return (
    <div className="app">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox onSearch={setSearchTerm} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

export default App;
