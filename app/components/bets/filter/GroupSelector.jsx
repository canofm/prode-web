import React from 'react';
import PropTypes from 'prop-types';

const GroupSelector = (props) => (
  <select value={props.group} className="form-control my-1 mr-sm-2" onChange={props.selectGroup}>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
    <option value="F">F</option>
    <option value="G">G</option>
    <option value="H">H</option>
  </select>
);
GroupSelector.defaultProps = { group: "A", selectGroup: () => { } }
GroupSelector.propTypes = { group: PropTypes.string, selectGroup: PropTypes.func }

export default GroupSelector;