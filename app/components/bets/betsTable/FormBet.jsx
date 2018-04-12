import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputBet from './InputBet';

class FormBet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeBet: props.homeBet,
      awayBet: props.awayBet,
      updated: false
    };
  }

  updateHomeBet = (event) => {
    this.setState({ updated: true, homeBet: event.target.value });
  }
  updateAwayBet = (event) => {
    this.setState({ updated: true, awayBet: event.target.value });
  }

  updateMatch = () => {
    const bet = { id: this.props.id, homeBet: this.state.homeBet, awayBet: this.state.awayBet };
    this.setState({ updated: false });
    this.props.updateMatch(bet);
  }

  render() {
    const { homeBet, awayBet } = this.state;
    const display = this.state.updated ? '' : 'd-none';
    return (
      <form className="form-inline">
        <div className="align-items-center">
          <InputBet bet={homeBet} updateBet={this.updateHomeBet} />
          <InputBet bet={awayBet} updateBet={this.updateAwayBet} />
          <button type="button"
            className={`btn btn-warning btn-sm my-1 ml-2 ${display}`}
            onClick={this.updateMatch}
          >
            <i className="fas fa-bolt" />
          </button>
        </div>
      </form>
    );
  }
}

FormBet.defaultProps = { homeBet: 0, awayBet: 0, id: 1, updateMatch: () => { } }
FormBet.propTypes = {
  homeBet: PropTypes.integer,
  awayBet: PropTypes.integer,
  updateMatch: PropTypes.func,
  id: PropTypes.integer
};

export default FormBet;
