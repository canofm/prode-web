import React, { PropTypes } from 'react';

const Team = {};
Team.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string
}

const TeamCard = (props) => (
  <div>
    <span className={`flag-icon flag-icon-${props.team.flag} flag-icon-squared mr-1`} />
    {props.team.name}
  </div>
);

TeamCard.defaultProps = { team: { } };
TeamCard.propTypes = {
  team: Team
};

const Bet = (props) => {
  const { checked, date, hour, homeTeam, homeBet, awayBet, awayTeam } = props.match;
  return (
    <tr>
      <td>
        <input type="checkbox" className="form-check-input position-static" checked={checked} />
      </td>
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

const Match = {};
Match.propTypes = {
  checked: PropTypes.boolean,
  date: PropTypes.string,
  hour: PropTypes.string,
  homeTeam: Team,
  homeBet: PropTypes.integer,
  awayBet: PropTypes.integer,
  awayTeam: Team
};

Bet.defaultProps = { match: {} };
Bet.propTypes = {
  match: Match
};

export default Bet;
export { Match };