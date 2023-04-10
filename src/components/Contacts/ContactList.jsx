import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'redux/selector';
import { fetchContacts } from 'redux/operation';
import { PhoneBook, NewContact } from './Contact.styled';
import { Contact } from './NewContact';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (!contacts) return null;

  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PhoneBook>
      {contactsFiltered.map(({ id, name, number }) => (
        <NewContact key={id}>
          <Contact id={id} name={name} number={number}></Contact>
        </NewContact>
      ))}
    </PhoneBook>
  );
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;

// export const ContactList = ({ items, onDelete }) => (
//   <PhoneBook>
//     {items.map(({ id, name, number }) => (
//       <NewContact key={id}>
//         {name}: {number}
//         <DelButton type="button" onClick={() => onDelete(id)}>
//           Delete
//         </DelButton>
//       </NewContact>
//     ))}
//   </PhoneBook>
// );
