import React from 'react';
import PropTypes from 'prop-types';
import { Team } from '../../types';

const TeamCard = (props) => (
  <div>
    <span className={`flag-icon flag-icon-${props.team.flag} flag-icon-squared mr-1`} />
    {props.team.name}
  </div>
);

TeamCard.defaultProps = { team: { } };
TeamCard.propTypes = {
  team: PropTypes.objectOf(Team)
};

export default TeamCard;
