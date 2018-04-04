const makeTeam = (flag, name) => ({ flag, name });

const Rusia = makeTeam("ru", "Rusia");
const ArabiaSaudita = makeTeam("sa", "Arabia Saudita");
const Egipto = makeTeam("eg", "Egito");
const Uruguay = makeTeam("uy", "Uruguay");

const makeMatch = (checked, date, hour, homeTeam, homeBet, awayBet, awayTeam) => ({ checked, date, hour, homeTeam, homeBet, awayBet, awayTeam })
const matches = [
  makeMatch(true, "14/06", "12:00", Rusia, 0, 0, ArabiaSaudita),
  makeMatch(false, "15/06", "9:00", Egipto, 0, 0, Uruguay),
  makeMatch(true, "19/06", "15:00", Rusia, 3, 1, Egipto),
  makeMatch(true, "20/06", "12:00", Uruguay, 2, 2, ArabiaSaudita),
  makeMatch(false, "25/06", "11:00", Uruguay, 1, 3, Rusia),
  makeMatch(false, "25/06", "11:00", ArabiaSaudita, 1, 1, Egipto)
];

export default matches;