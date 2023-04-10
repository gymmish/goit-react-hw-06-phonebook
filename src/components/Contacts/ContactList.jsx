import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsFiltered, selectIsLoading, selectError } from 'redux/selector';
import { fetchContacts } from 'redux/operation';
import { PhoneBook, NewContact } from './Contact.styled';
import { Contact } from './NewContact';
import Loader from '../Loader/Loader';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsFiltered);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // if (!contacts) return null;

  return (
    <>
      {!isLoading && !error ? (
        <PhoneBook>
          {contacts.map(({ id, name, number }) => (
            <NewContact key={id}>
              <Contact id={id} name={name} number={number}></Contact>
            </NewContact>
          ))}
        </PhoneBook>
      ) : (
        <Loader></Loader>
      )}
    </>
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