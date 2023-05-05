import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operation';
// import { getError, getIsLoading } from 'redux/selector.js';
import PhoneForm from '../components/PhoneForm/PhoneForm';
import Section from '../components/Section/Section';
import ContactFilter from '../components/Filter/ContactsFilter';
import ContactList from '../components/Contacts/ContactList';

const Contscts = () => {
  const dispatch = useDispatch();
  //   const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <PhoneForm />
        {/* {isLoading && !error && <b>Request in progress...</b>} */}
      </Section>
      <Section title="Contacts">
        <ContactFilter />

        <ContactList />
      </Section>
    </>
  );
};

export default Contscts;
