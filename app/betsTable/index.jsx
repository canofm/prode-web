import React from 'react';
import Bet, { Match } from './Bet';

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
      {props.matches.map(match => <Bet match={match} />)}
    </tbody>
  </table>
);

Table.defaultProps = {
  matches: []
};

Table.propTypes = {
  matches: [Match]
};

export default Table;