import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/operation';
import { getContacts } from 'redux/selector';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import { Formik } from 'formik';
import { Form, AddButton } from './Phone.styled';

export default function PhoneForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: e.currentTarget.elements.name.value,
      number: e.currentTarget.elements.number.value,
    };

    const currentName = contacts.find(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (currentName) {
      console.log(currentName);
      alert(`${currentName.name} is already exist!`);
      return;
    }

    dispatch(addContacts(contact));

    e.target.reset();
  };

  return (
    <Formik>
      <Form onSubmit={handleSubmit} name="contact">
        <label htmlFor={nameId}>
          Name
          <input
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label htmlFor={numberId}>
          Number
          <input
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <AddButton type="submit">Add contact</AddButton>
      </Form>
    </Formik>
  );
}

PhoneForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
// class PhoneForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   render() {
//     const { name, number } = this.state;

//   }
// }

// export default PhoneForm;
