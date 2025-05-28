import css from "./ContactList.module.css"
import Contact from "../Contact/Contact";
import { useMemo } from 'react';
import { useDebounce } from 'use-debounce';
import { useSelector } from 'react-redux'


export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const searchName = useSelector((state) => state.filters.name);

  const [debounceInputValue] = useDebounce(searchName, 500);

  const searchContacts = useMemo(() => {
    if (!debounceInputValue || typeof debounceInputValue !== "string") return contacts;
    // if (!debounceInputValue.trim()) return contacts;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(debounceInputValue.toLowerCase()));
  }, [debounceInputValue, contacts])
  
  return (
    <ul className={css.container}>
        {searchContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
            <Contact data={contact} />
        </li>
    ))}
    </ul>
  )
}