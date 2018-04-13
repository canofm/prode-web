import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import StageSelector from './StageSelector';
import GroupSelector from './GroupSelector';

const Clasificacion = "Clasificacion";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: Clasificacion,
      group: "A"
    };
  }
  selectStage = (event) => {
    this.setState({ stage: event.target.value });
  }
  selectGroup = (event) => {
    this.setState({ group: event.target.value });
  }

  render() {
    const GroupSel = <GroupSelector group={this.state.group} selectGroup={this.selectGroup} />;
    const SecondSelector = this.state.stage === Clasificacion ? GroupSel : null;
    return (
      <div>
        <strong className="mr-2">Filtro: </strong>
        <StageSelector stage={this.state.stage} selectStage={this.selectStage} />
        {SecondSelector}
        <button type="submit" className="btn btn-primary my-1">Aplicar</button>
      </div>
    );
  };
}

export default Filter;