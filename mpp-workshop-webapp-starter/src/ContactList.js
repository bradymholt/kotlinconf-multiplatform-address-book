import React, { useState, useEffect } from 'react'; 
import { Link } from "react-router-dom"; 
import AddressBook from 'addressbook-common/packages/addressbook-common'; 

export default function ContactList() {  
  let [presenter] = useState(() =>
    AddressBook.com.ynab.di.CommonInjector.contactListPresenter()
  );
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    presenter.attachView({
      displayContactList: function(contacts) {
        setContacts(contacts.toArray());
      }
    });
  }, []);

  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li>
            <Link to={`/contact/${contact.id}`}>{contact.fullName}</Link>
          </li>
        );
      })}
    </ul>
  );
}
