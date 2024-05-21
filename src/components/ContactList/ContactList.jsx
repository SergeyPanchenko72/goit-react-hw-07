import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const selectContacts = useSelector((state) => state.contacts.items);
  const nameContact = useSelector((state) => state.filter.name);
  const filterContacts = selectContacts.filter((contact) =>
    contact.info.name.toLowerCase().includes(nameContact.toLowerCase())
  );

  return (
    <>
      <ul className={css.container}>
        {filterContacts.map((contact) => (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
