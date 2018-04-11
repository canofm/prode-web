import React from 'react';
import PropTypes from 'prop-types';
import { Match } from '../../types';
import TeamCard from './TeamCard';
import FormBet from './FormBet';

const Bet = (props) => {
  const { id, date, hour, homeTeam, homeBet, awayBet, awayTeam } = props.match;
  return (
    <tr>
      <td className="align-middle text-center">{date}</td>
      <td className="align-middle text-center">{hour}</td>
      <td className="align-middle text-center"> <TeamCard team={homeTeam} /></td>
      <td className="align-middle text-center">
        <FormBet homeBet={homeBet} awayBet={awayBet} updateMatch={props.updateMatch} id={id} />
      </td>
      <td className="align-middle text-center"> <TeamCard team={awayTeam} /> </td>
    </tr>
  );
};

Bet.defaultProps = { match: {}, updateMatch: () => { } };
Bet.propTypes = {
  match: PropTypes.objectOf(Match),
  updateMatch: PropTypes.func
};

export default Bet;
