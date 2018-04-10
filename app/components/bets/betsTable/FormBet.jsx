import React from 'react';
import PropTypes from 'prop-types';
import InputBet from './InputBet';

const FormBet = (props) => (
  <form className="form-inline">
    <div className="align-items-center">
      <InputBet bet={props.homeBet} />
      <InputBet bet={props.awayBet} />
      <button type="submit" className="btn btn-warning btn-sm my-1 ml-2">
        <i className="fas fa-bolt" />
      </button>
    </div>
  </form>
);

FormBet.defaultProps = { homeBet: 0, awayBet: 0 }
FormBet.propTypes = {
  homeBet: PropTypes.integer,
  awayBet: PropTypes.integer
};

export default FormBet;
