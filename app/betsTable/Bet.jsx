import React, { PropTypes } from 'react';

const Bet = (props) => {
  const { checked, date, hour, homeTeam, homeBet, awayBet, awayTeam } = props.bet;
  return (
    <tr>
      <td>
        <input type="checkbox" className="form-check-input position-static" checked={checked} />
      </td>
      <td>{date}</td>
      <td>{hour}</td>
      <td>
        <span className={`flag-icon flag-icon-${homeTeam.flag} flag-icon-squared mr-1`} />
        {homeTeam.name}
      </td>
      <td>
        <form className="form-inline">
          <div className="align-items-center">
            <input type="text" className="form-control form-control-sm col-sm-1 text-center" value={homeBet} />
            <input type="text" className="form-control form-control-sm col-sm-1 text-center" value={awayBet} />
          </div>
        </form>
      </td>
      <td>
        <span className={`flag-icon flag-icon-${awayTeam.flag} flag-icon-squared mr-1`} />
        {awayTeam.name}
      </td>
    </tr>
  );
};

const Team = {};
Team.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string
}

Bet.defaultProps = { bet: {} };
Bet.propTypes = {
  bet: {
    checked: PropTypes.boolean,
    date: PropTypes.string,
    hour: PropTypes.string,
    homeTeam: Team,
    homeBet: PropTypes.integer,
    awayBet: PropTypes.integer,
    awayTeam: Team
  }
};

export default Bet;