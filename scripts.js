


  const stations = {
    // Line 1
    "marj": { direction: "marjDirection " ,station: "marj", lines: [1] },
    "azbt": { station: "azbt", lines: [1] },
    "ainshams": { station: "ainshams", lines: [1] },
    "matarya": { station: "matarya", lines: [1] },
    "helmyazaton": { station: "helmyazaton", lines: [1] },
    "hadayekzaton": { station: "hadayekzaton", lines: [1] },
    "saray": { station: "saray", lines: [1] },
    "hamamat": { station: "hamamat", lines: [1] },
    "kobry": { station: "kobry", lines: [1] },
    "sadr": { station: "sadr", lines: [1] },
    "demerdash": { station: "demerdash", lines: [1] },
    "ghamra": { station: "ghamra", lines: [1] },
    "shohadaa": { station: "shohadaa", lines: [1, 2], isTransition: true, transferto: "line2",  },
    "oraby": { station: "oraby", lines: [1] },
    "naser": { station: "naser", lines: [1, 3], isTransition: true, transferto: "line3" },
    "sadat": { station: "sadat", lines: [1, 2], isTransition: true, transferto: "line2" },
    "zaghloul": { station: "zaghloul", lines: [1] },
    "zeinab": { station: "zeinab", lines: [1] },
    "saleh": { station: "saleh", lines: [1] },
    "margergis": { station: "margergis", lines: [1] },
    "zahraa": { station: "zahraa", lines: [1] },
    "darelsalam": { station: "darelsalam", lines: [1] },
    "hadayekmaadi": { station: "hadayekmaadi", lines: [1] },
    "maadi": { station: "maadi", lines: [1] },
    "thakanat": { station: "thakanat", lines: [1] },
    "torabalad": { station: "torabalad", lines: [1] },
    "kozzika": { station: "kozzika", lines: [1] },
    "turaelesmant": { station: "turaelesmant", lines: [1] },
    "masaraa": { station: "masaraa", lines: [1] },
    "hadayekhelwan": { station: "hadayekhelwan", lines: [1] },
    "wadihof": { station: "wadihof", lines: [1] },
    "helwanuni": { station: "helwanuni", lines: [1] },
    "ainhelwan": { station: "ainhelwan", lines: [1] },
    "helwan": { direction: "Helwan Direction" ,station: "helwan", lines: [1] },

    // Line 2
    "shubra": { direction: "Shubra Direction" ,station: "shubra", lines: [2] },
    "mezalat": { station: "mezalat", lines: [2] },
    "khalafawi": { station: "khalafawi", lines: [2] },
    "sainttrase": { station: "sainttrase", lines: [2] },
    "rodelfarag": { station: "rodelfarag", lines: [2] },
    "masarrah": { station: "masarrah", lines: [2] },
    "shohadaa": { station: "shohadaa", lines: [1, 2], isTransition: true, transferto: "line1" },
    "atabba": { isTransition: true, station: "atabba", lines: [3 , 2] },
    "abdeen": { station: "abdeen", lines: [2] },
    "sadat": { station: "sadat", lines: [1, 2], isTransition: true },
    "opera": { station: "opera", lines: [2] },
    "dokki": { station: "dokki", lines: [2] },
    "bohooth": { station: "bohooth", lines: [2] },
    "cairouni": { station: "cairouni", lines: [2] },
    "faisal": { station: "faisal", lines: [2] },
    "giza": { station: "giza", lines: [2] },
    "omelmasr": { station: "omelmasr", lines: [2] },
    "sakyet": { station: "sakyet", lines: [2] },
    "moneb": { direction: "Moneeb Direction" , station: "moneb", lines: [2] },

    // Line 3
    "adly": { adly: "Adly Direction" , station: "adly", lines: [3] },
    "hayksteb": { station: "hayksteb", lines: [3] },
    "omar": { station: "omar", lines: [3] },
    "qubaa": { station: "qubaa", lines: [3] },
    "heshambarakat": { station: "heshambarakat", lines: [3] },
    "nozha": { station: "nozha", lines: [3] },
    "elshams": { station: "elshams", lines: [3] },
    "alf": { station: "alf", lines: [3] },
    "heliopolis": { station: "heliopolis", lines: [3] },
    "haroun": { station: "haroun", lines: [3] },
    "alahram": { station: "alahram", lines: [3] },
    "kollyet": { station: "kollyet", lines: [3] },
    "stadium": { station: "stadium", lines: [3] },
    "fairzone": { station: "fairzone", lines: [3] },
    "abasya": { station: "abasya", lines: [3] },
    "abdobasha": { station: "abdobasha", lines: [3] },
    "geish": { station: "geish", lines: [3] },
    "babelsharia": { station: "babelsharia", lines: [3] },
    "atabba": { station: "atabba", lines: [2, 3], isTransition: true, },
    "naser": { station: "naser", lines: [1, 3], isTransition: true, transferto: "line1" },
    "masbero": { station: "masbero", lines: [3] },
    "safaa": { station: "safaa", lines: [3] },
    "kitkat": { direction: "Kitkat Direction", station: "kitkat", lines: [3] },
  };




 // Assuming 'stations' is available globally or imported into your scripts.js

// Function to find the nearest transition station given the current and destination lines
function findNearestTransitionStation(currentLine, destinationLine) {
  // Logic to find the nearest transition station will go here
  // For simplicity, let's return the first transition station for now
  for (const stationKey in stations) {
    const station = stations[stationKey];
    if (station.isTransition && station.lines.includes(currentLine) && station.lines.includes(destinationLine)) {
      return station.station;
    }
  }
  return null;
}

function getDirection(currentStation, destinationStation, line) {
  const stationsOnLine = Object.keys(stations).filter(key => stations[key].lines.includes(line));
  const currentIndex = stationsOnLine.indexOf(currentStation);
  const destinationIndex = stationsOnLine.indexOf(destinationStation);

  if (currentIndex < destinationIndex) {
    // Direction towards the last station of the line
    return stations[stationsOnLine[stationsOnLine.length - 1]].direction;
  } else {
    // Direction towards the first station of the line
    return stations[stationsOnLine[0]].direction;
  }
}

// Function to show directions in the result paragraph
function showDirection() {
  const currentStationSelect = document.getElementById('currentStation');
  const destinationStationSelect = document.getElementById('destinationStation');
  const resultParagraph = document.getElementById('result');

  const currentStation = currentStationSelect.value;
  const destinationStation = destinationStationSelect.value;

  if (currentStation === destinationStation) {
    resultParagraph.textContent = "You're already at your destination!";
    return;
  }

  const currentStationLine = stations[currentStation].lines[0];
  const destinationStationLine = stations[destinationStation].lines[0];

  let directionMessage = '';

  if (currentStationLine !== destinationStationLine) {
    const transitionStation = findNearestTransitionStation(currentStationLine, destinationStationLine);
    const directionToTransition = getDirection(currentStation, transitionStation, currentStationLine);
    const directionFromTransition = getDirection(transitionStation, destinationStation, destinationStationLine);
    
    directionMessage = `In line ${currentStationLine} ${directionToTransition} from ${currentStation} to ${transitionStation}, then switch to line ${destinationStationLine} in the direction of ${directionFromTransition} to reach ${destinationStation}.`;
  } else {
    const direction = getDirection(currentStation, destinationStation, currentStationLine);
    directionMessage = `In line ${currentStationLine} move in the direction of ${direction} from ${currentStation} to ${destinationStation}.`;
  }

  resultParagraph.textContent = directionMessage;
}
;

