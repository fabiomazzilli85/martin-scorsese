const filmScorsese = [
    "Chi sta bussando alla mia porta?",
    "America 1929: Sterminateli senza pietà",
    "L'eta' dell'innocenza",
    "Al di là della vita",
    "Mean Streets - Domenica in chiesa, lunedì all'inferno",
    "Alice non abita più qui",
    "Taxi Driver",
    "New York, New York",
    "Toro Scatenato",
    "Re per una notte",
    "Fuori Orario",
    "Il colore dei soldi",
    "L'ultima tentazione di Cristo",
    "Quei Bravi Ragazzi",
    "Cape Fear - Il Promontorio della Paura",
    "L'età dell'innocenza",
    "Casinò",
    "Kundun",
    "Al di là della vita",
    "Gangs of New York",
    "The Aviator",
    "The Departed - Il bene e il male",
    "Shutter Island",
    "Hugo Cabret",
    "The Wolf of Wall Street",
    "Silence",
    "The Irishman",
    "Killers of the Flower Moon"
  ];

  const filmPreferiti = [
    "Quei Bravi Ragazzi",
    "Toro Scatenato",
    "Taxi Driver",
    "Toro Scatenato",
    "The Wolf of Wall Street",
  ];
  
  function getRandomFilm() {
    return filmScorsese[Math.floor(Math.random() * filmScorsese.length)];
  }
  
  function printRandomFilm() {
    const film = getRandomFilm();
    document.querySelector("#film").innerText = film;
    if(filmPreferiti.includes(film)) {
        document.getElementById('heart').innerHTML = "Un autentico capolavoro &hearts;";
      } else {
        document.getElementById('heart').innerHTML = "Un gran bel film...";
      }
    }
  