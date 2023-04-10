import React from 'react';
import { removeContacts } from 'redux/operation';
import { PropTypes } from 'prop-types';
import { DelButton } from './Contact.styled';
import { useDispatch } from 'react-redux';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <span key={id}>
      {name}: {number}
      <DelButton type="button" onClick={() => dispatch(removeContacts(id))}>
        Delete
      </DelButton>
    </span>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
