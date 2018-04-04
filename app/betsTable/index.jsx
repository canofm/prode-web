import React, { PropTypes } from 'react';

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

const Bet = (props) => {
  const { checked, date, hour, homeTeam, homeBet, awayBet, awayTeam } = props.bet;
  return (
    <tr>
      <td>
        <input type="checkbox" className="form-check-input position-static" checked={checked} />
      </td>
      <td>{date}</td>
      <td>{hour}</td>
      <td>
        <span className={`flag-icon flag-icon-${homeTeam.flag} flag-icon-squared mr-1`} />
        {homeTeam.name}
      </td>
      <td>
        <form className="form-inline">
          <div className="align-items-center">
            <input type="text" className="form-control form-control-sm col-sm-1 text-center" value={homeBet} />
            <input type="text" className="form-control form-control-sm col-sm-1 text-center" value={awayBet} />
          </div>
        </form>
      </td>
      <td>
        <span className={`flag-icon flag-icon-${awayTeam.flag} flag-icon-squared mr-1`} />
        {awayTeam.name}
      </td>
    </tr>
  );
};

const Team = {};
Team.propTypes = {
  flag: PropTypes.string,
  name: PropTypes.string
}
Bet.defaultProps = { bet: {} };
Bet.propTypes = {
  bet: {
    checked: PropTypes.boolean,
    date: PropTypes.string,
    hour: PropTypes.string,
    homeTeam: Team,
    homeBet: PropTypes.integer,
    awayBet: PropTypes.integer,
    awayTeam: Team
  }
};
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