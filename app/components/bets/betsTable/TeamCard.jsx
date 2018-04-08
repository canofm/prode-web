import React from 'react';
import { Team } from '../../types';

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

export default TeamCard;
