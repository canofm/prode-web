import React, { Component } from 'react';
import FilterNav from './FilterNav';

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
    return (
    <FilterNav
      stage={this.state.stage}
      group={this.state.group}
      selectStage={this.selectStage}
      selectGroup={this.selectGroup}
    />
    );
  };
}

export default Filter;