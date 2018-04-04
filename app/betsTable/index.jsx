import React from 'react';
import Bet from './Bet';

const TableHead = () => (
  <thead>
    <tr>
      <th scope="col">Editando</th>
      <th scope="col">Fecha</th>
      <th scope="col">Hora</th>
      <th scope="col">Local</th>
      <th scope="col">Resultado</th>
      <th scope="col">Visitante</th>
    </tr>
  </thead>
);

const makeTeam = (flag, name) => ({ flag, name });
const Rusia = makeTeam("ru", "Rusia");
const ArabiaSaudita = makeTeam("sa", "Arabia Saudita");
const Egipto = makeTeam("eg", "Egito");
const Uruguay = makeTeam("uy", "Uruguay");

const makeBet = (checked, date, hour, homeTeam, homeBet, awayBet, awayTeam) => ({ checked, date, hour, homeTeam, homeBet, awayBet, awayTeam })
const bets = [
  makeBet(true, "14/06", "12:00", Rusia, 0, 0, ArabiaSaudita),
  makeBet(false, "15/06", "9:00", Egipto, 0, 0, Uruguay),
  makeBet(true, "19/06", "15:00", Rusia, 3, 1, Egipto),
  makeBet(true, "20/06", "12:00", Uruguay, 2, 2, ArabiaSaudita),
  makeBet(false, "25/06", "11:00", Uruguay, 1, 3, Rusia),
  makeBet(false, "25/06", "11:00", ArabiaSaudita, 1, 1, Egipto)
];

const Table = () => (
  <table className="table table-sm table-striped table-light table-hover text-center mt-3 mr-auto ml-auto" style={{ width: "auto" }}>
    <TableHead />
    <tbody>
      {bets.map(bet => <Bet bet={bet} />)}
    </tbody>
  </table>
);

export default Table;