import React from 'react';
import PropTypes from 'prop-types';
import Bet from './Bet';
import { Match } from '../../types';

const TableHead = () => (
  <thead>
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Hora</th>
      <th scope="col">Local</th>
      <th scope="col">Resultado</th>
      <th scope="col">Visitante</th>
    </tr>
  </thead>
);

const Table = (props) => (
  <table className="table table-sm table-striped table-light table-hover text-center mt-3 mr-auto ml-auto" style={{ width: "auto" }}>
    <TableHead />
    <tbody>
      {props.matches.map(match => <Bet match={match} updateMatch={props.updateMatch} key={match.id}/>)}
    </tbody>
  </table>
);

Table.defaultProps = { matches: [], updateMatch: () => {} };
Table.propTypes = {
  matches: PropTypes.arrayOf(Match),
  updateMatch: PropTypes.func
};

export default Table;
