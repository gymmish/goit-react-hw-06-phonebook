import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from 'redux/operation';
import { selectContacts } from 'redux/selector';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';
import { Formik } from 'formik';
import { FormPhone, AddButton } from './Phone.styled';
import { InputUser, LabellUser } from '../authForms/authForms.styled';

export default function PhoneForm() {
  const contacts = useSelector(selectContacts);
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
      <FormPhone onSubmit={handleSubmit} name="contact">
        <LabellUser htmlFor={nameId}>
          Name
          <InputUser
            id={nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </LabellUser>
        <LabellUser htmlFor={numberId}>
          Number
          <InputUser
            id={numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </LabellUser>
        <AddButton type="submit">Add contact</AddButton>
      </FormPhone>
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
