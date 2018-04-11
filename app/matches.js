const makeTeam = (flag, name) => ({ flag, name });

const Rusia = makeTeam("ru", "Rusia");
const ArabiaSaudita = makeTeam("sa", "Arabia Saudita");
const Egipto = makeTeam("eg", "Egito");
const Uruguay = makeTeam("uy", "Uruguay");

const makeMatch = (id, date, hour, homeTeam, homeBet, awayBet, awayTeam) => ({ id, date, hour, homeTeam, homeBet, awayBet, awayTeam })
const matches = [
  makeMatch(1, "14/06", "12:00", Rusia, 0, 0, ArabiaSaudita),
  makeMatch(2, "15/06", "9:00", Egipto, 0, 0, Uruguay),
  makeMatch(3, "19/06", "15:00", Rusia, 3, 1, Egipto),
  makeMatch(4, "20/06", "12:00", Uruguay, 2, 2, ArabiaSaudita),
  makeMatch(5, "25/06", "11:00", Uruguay, 1, 3, Rusia),
  makeMatch(6, "25/06", "11:00", ArabiaSaudita, 1, 1, Egipto)
];

export default matches;