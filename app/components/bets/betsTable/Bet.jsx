import React from 'react';
import PropTypes from 'prop-types';
import { Match } from '../../types';
import TeamCard from './TeamCard';

const Bet = (props) => {
  const { date, hour, homeTeam, homeBet, awayBet, awayTeam } = props.match;
  return (
    <tr>
      <td>{date}</td>
      <td>{hour}</td>
      <td> <TeamCard team={homeTeam} /></td>
      <td>
        <form className="form-inline">
          <div className="align-items-center">
            <input type="text" className="form-control form-control-sm col-sm-1 text-center" value={homeBet} />
            <input type="text" className="form-control form-control-sm col-sm-1 text-center" value={awayBet} />
            <button type="submit" className="btn btn-warning btn-sm my-1 ml-2">
              <i className="fas fa-bolt" />
            </button>
          </div>
        </form>
      </td>
      <td> <TeamCard team={awayTeam} /> </td>
    </tr>
  );
};

Bet.defaultProps = { match: {} };
Bet.propTypes = {
  match: PropTypes.objectOf(Match)
};

export default Bet;
