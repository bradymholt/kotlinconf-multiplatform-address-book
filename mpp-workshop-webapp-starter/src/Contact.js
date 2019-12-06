import React, { useState, useEffect } from 'react'; 
import { useParams, Link } from "react-router-dom"; 
import AddressBook from 'addressbook-common/packages/addressbook-common'; 

export default function Contact() {
  let { id } = useParams(); 
  let [presenter] = useState(() => AddressBook.com.ynab.di.CommonInjector.contactDetailPresenter()); 
  let [contact, setContact] = useState(null) 

  useEffect(() => {
      presenter.attachView({ 
          displayContact: function(c) { 
              setContact(c) 
          }
      });
      presenter.getContact(id); 
  }, []);

  if (contact == null) return (<p></p>); 

    return (<div>
      <p>
          <Link to={`/`}>
              Back to the contact list
          </Link>
      </p>
      <p>First name: {contact.name.firstName}</p> 
      <p>Last name: {contact.name.lastName}</p> 
      <p>
          Phones:
          <ul>
              {contact.phones.toArray().map(phone => ( 
                  <li>
                      {phone.type.displayedName}: {phone.number}
                  </li>
              ))}
          </ul>
      </p>
      <p>
          Addresses:
          <ul>
              {contact.addresses.toArray().map(address => ( 
                  <li>
                      {address.type.displayedName}:
                      {address.street} {address.type.displayedName},
                      {address.postalCode} {address.city}, {address.country}
                  </li>
              ))}
          </ul>
      </p>
    </div>)
}