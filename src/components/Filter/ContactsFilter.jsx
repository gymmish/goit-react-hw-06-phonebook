import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selector';
import { setNameFilter } from '../../redux/filterSlice';

import { nanoid } from 'nanoid';
import { FilterForm } from './Filter.styled';

const ContactFilter = () => {
  const filterId = nanoid();
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterForm>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        type="text"
        id={filterId}
        value={filter}
        onChange={e => dispatch(setNameFilter(e.target.value))}
        name="filter"
      />
    </FilterForm>
  );
};

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
