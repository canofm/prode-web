const makeTeam = (flag, name) => ({ flag, name });

const Rusia = makeTeam("ru", "Rusia");
const ArabiaSaudita = makeTeam("sa", "Arabia Saudita");
const Egipto = makeTeam("eg", "Egito");
const Uruguay = makeTeam("uy", "Uruguay");
const Portugal = makeTeam("pt", "Portugal");
const Espania = makeTeam("es", "España");
const Marruecos = makeTeam("ma", "Marruecos");
const Iran = makeTeam("ir", "Irán");
const Francia = makeTeam("fr", "Francia");
const Australia = makeTeam("au", "Australia");
const Peru = makeTeam("pe", "Perú");
const Dinamarca = makeTeam("dk", "Dinamarca");

const makeMatch = (id, stage, group, date, hour, homeTeam, homeBet, awayBet, awayTeam) => (
  { id, stage, group, date, hour, homeTeam, homeBet, awayBet, awayTeam }
);

let id = 0;
const makeClassificationMatch = (group, date, hour, homeTeam, homeBet, awayBet, awayTeam) => {
  id += 1;
  return makeMatch(id, "Clasificacion", group, date, hour, homeTeam, homeBet, awayBet, awayTeam);
};

const matches = [
  makeClassificationMatch("A", "14/06", "12:00", Rusia, 0, 0, ArabiaSaudita),
  makeClassificationMatch("A", "15/06", "9:00", Egipto, 0, 0, Uruguay),
  makeClassificationMatch("A", "19/06", "15:00", Rusia, 3, 1, Egipto),
  makeClassificationMatch("A", "20/06", "12:00", Uruguay, 2, 2, ArabiaSaudita),
  makeClassificationMatch("A", "25/06", "11:00", Uruguay, 1, 3, Rusia),
  makeClassificationMatch("A", "25/06", "11:00", ArabiaSaudita, 1, 1, Egipto),

  makeClassificationMatch("B", "15/06", "18:00", Marruecos, 1, 1, Iran),
  makeClassificationMatch("B", "15/06", "21:00", Portugal, 1, 1, Espania),
  makeClassificationMatch("B", "20/06", "15:00", Portugal, 1, 1, Marruecos),
  makeClassificationMatch("B", "20/06", "21:00", Iran, 1, 1, Espania),
  makeClassificationMatch("B", "25/06", "21:00", Iran, 1, 1, Portugal),
  makeClassificationMatch("B", "25/06", "20:00", Espania, 1, 1, Marruecos),

  makeClassificationMatch("C", "15/06", "18:00", Francia, 1, 1, Australia),
  makeClassificationMatch("C", "15/06", "18:00", Peru, 1, 1, Dinamarca),
  makeClassificationMatch("C", "15/06", "18:00", Dinamarca, 1, 1, Australia),
  makeClassificationMatch("C", "15/06", "18:00", Francia, 1, 1, Peru),
  makeClassificationMatch("C", "15/06", "18:00", Dinamarca, 1, 1, Francia),
  makeClassificationMatch("C", "15/06", "18:00", Australia, 1, 1, Peru)

];

export default matches;