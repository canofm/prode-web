import React from 'react';
import PropTypes from 'prop-types';

const UpdateButton = (props) => (
  <button type="button"
    className={`btn btn-warning btn-sm my-1 ml-2 ${props.display}`}
    onClick={props.updateMatch}
  >
    <i className="fas fa-bolt" />
  </button>
);
UpdateButton.defaultProps = { display: "", updateMatch: () => { } }
UpdateButton.propTypes = {
  display: PropTypes.string,
  updateMatch: PropTypes.func
}

export default UpdateButton;