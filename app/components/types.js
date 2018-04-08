import { PropTypes } from 'react';

const Team = {};
Team.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string
};

export { Team };

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

export { Match };
