import React from 'react';
import PropTypes from 'prop-types';

const SearchMatch = (props) => (
  <div className="input-group ml-auto">
    <input type="text"
      className="form-control"
      placeholder="Buscar..."
      onChange={props.handleSearchTermChange}
      value={props.searchTerm}
    />
  </div>
);

SearchMatch.defaultProps = {
  searchTerm: '',
  handleSearchTermChange: () => { }
};

SearchMatch.propTypes = {
  searchTerm: PropTypes.string,
  handleSearchTermChange: PropTypes.func
};

export default SearchMatch;
