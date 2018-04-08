const makeTeam = (flag, name) => ({ flag, name });

const Rusia = makeTeam("ru", "Rusia");
const ArabiaSaudita = makeTeam("sa", "Arabia Saudita");
const Egipto = makeTeam("eg", "Egito");
const Uruguay = makeTeam("uy", "Uruguay");

const makeMatch = (date, hour, homeTeam, homeBet, awayBet, awayTeam) => ({ date, hour, homeTeam, homeBet, awayBet, awayTeam })
const matches = [
  makeMatch("14/06", "12:00", Rusia, 0, 0, ArabiaSaudita),
  makeMatch("15/06", "9:00", Egipto, 0, 0, Uruguay),
  makeMatch("19/06", "15:00", Rusia, 3, 1, Egipto),
  makeMatch("20/06", "12:00", Uruguay, 2, 2, ArabiaSaudita),
  makeMatch("25/06", "11:00", Uruguay, 1, 3, Rusia),
  makeMatch("25/06", "11:00", ArabiaSaudita, 1, 1, Egipto)
];

export default matches;