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

const Clasificacion = "Clasificacion";
const noop = () => { };
const A = "A";
const B = "B";
const C = "C";
const D = "D";
const E = "E";
const F = "F";
const G = "G";
const H = "H";
export { Clasificacion, noop, A, B, C, D, E, F, G, H }