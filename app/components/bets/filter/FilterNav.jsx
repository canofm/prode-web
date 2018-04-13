import React from 'react';
import PropTypes from 'prop-types';
import StageSelector from './StageSelector';
import GroupSelector from './GroupSelector';
import { Clasificacion, noop } from '../../types'

const FilterNav = (props) => {
  const GroupSel = <GroupSelector group={props.group} selectGroup={props.selectGroup} />;
  const SecondSelector = props.stage === Clasificacion ? GroupSel : null;
  return (
    <div>
      <strong className="mr-2">Filtro: </strong>
      <StageSelector stage={props.stage} selectStage={props.selectStage} />
      {SecondSelector}
      <button type="submit" className="btn btn-primary my-1">Aplicar</button>
    </div>
  );
};
FilterNav.defaultProps = {
  stage: Clasificacion,
  group: "A",
  selectStage: noop,
  selectGroup: noop
};
FilterNav.propTypes = {
  stage: PropTypes.string,
  group: PropTypes.string,
  selectStage: PropTypes.func,
  selectGroup: PropTypes.func
};

export default FilterNav;
