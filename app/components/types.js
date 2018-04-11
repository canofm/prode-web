import PropTypes from 'prop-types';

class Team {
  propTypes = {
    flag: PropTypes.string,
    name: PropTypes.string
  };
};
export { Team };

class Match {
  propTypes = {
    id: PropTypes.integer,
    date: PropTypes.string,
    hour: PropTypes.string,
    homeTeam: PropTypes.objectOf(Team),
    homeBet: PropTypes.integer,
    awayBet: PropTypes.integer,
    awayTeam: PropTypes.objectOf(Team)
  };
};
export { Match };
