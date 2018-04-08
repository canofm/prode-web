import React from 'react';
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
          </div>
        </form>
      </td>
      <td> <TeamCard team={awayTeam}/> </td>
    </tr>
  );
};

Bet.defaultProps = { match: {} };
Bet.propTypes = {
  match: Match
};

export default Bet;
