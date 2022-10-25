import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormBtnStyled, InputStyled
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = event => {
      event.preventDefault();

      const value = query.trim();
      if (value) {
         onSubmit(query);
         setQuery('');
      }  
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputStyled
          onChange={handleChange}
          name="query"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <FormBtnStyled type="submit">Search</FormBtnStyled>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
