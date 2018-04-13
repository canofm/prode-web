import React from 'react';
import PropTypes from 'prop-types';

const StageSelector = (props) => (
  <select value={props.stage} className="form-control my-1 mr-sm-2" onChange={props.selectStage} >
    <option value="Clasificacion">Clasificación</option>
    <option value="Eliminatorias">Eliminatorias</option>
  </select>
);
StageSelector.defaultProps = { stage: "Clasificacion", selectStage: () => { } }
StageSelector.propTypes = { stage: PropTypes.string, selectStage: PropTypes.func }

export default StageSelector;