import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';

import { setNameFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import { FilterForm, FilterInput } from './Filter.styled';

const ContactFilter = () => {
  const filterId = nanoid();
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const value = e.target.value;
    dispatch(setNameFilter(value));
  };

  return (
    <FilterForm>
      <label htmlFor={filterId}>Find contacts by name</label>
      <FilterInput
        type="text"
        id={filterId}
        onChange={onFilterChange}
        name="filter"
      />
    </FilterForm>
  );
};

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
