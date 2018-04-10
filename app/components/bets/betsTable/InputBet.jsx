import React from 'react';
import PropTypes from 'prop-types';

const InputBet = (props) => (
  <input type="text"
    className="form-control form-control-sm col-sm-2 text-center"
    value={props.bet}
  />
);

InputBet.defaultProps = { bet: 0 };
InputBet.propTypes = { bet: PropTypes.integer };

export default InputBet;
