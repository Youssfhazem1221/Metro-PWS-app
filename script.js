


const stations = {
  // Line 1
  "marj": { direction: "Marj direction " ,station: "marj", lines: [1] },
  "azbt-el nakhl": { station: "azbt", lines: [1] },
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
  "Oraby": { station: "oraby", lines: [1] },
  "Naser": { station: "naser", lines: [1, 3], isTransition: true, transferto: "line3" },
  "Sadat": { station: "sadat", lines: [1, 2], isTransition: true, transferto: "line2" },
  "Zaghloul": { station: "zaghloul", lines: [1] },
  "Zeinab": { station: "zeinab", lines: [1] },
  "Saleh": { station: "saleh", lines: [1] },
  "Margergis": { station: "margergis", lines: [1] },
  "Zahraa": { station: "zahraa", lines: [1] },
  "Dar el-salam": { station: "darelsalam", lines: [1] },
  "Hadayekmaadi": { station: "hadayekmaadi", lines: [1] },
  "Maadi": { station: "maadi", lines: [1] },
  "Thakanat": { station: "thakanat", lines: [1] },
  "Torabalad": { station: "torabalad", lines: [1] },
  "Kozzika": { station: "kozzika", lines: [1] },
  "Turaelesmant": { station: "turaelesmant", lines: [1] },
  "Masaraa": { station: "masaraa", lines: [1] },
  "Hadayekhelwan": { station: "hadayekhelwan", lines: [1] },
  "Wadihof": { station: "wadihof", lines: [1] },
  "Helwanuni": { station: "helwanuni", lines: [1] },
  "Ain helwan": { station: "ainhelwan", lines: [1] },
  "Helwan": { direction: "Helwan Direction" ,station: "helwan", lines: [1] },

  // Line 2
  "Shubra": { direction: "Shubra Direction" ,station: "shubra", lines: [2] },
  "Mezalat": { station: "mezalat", lines: [2] },
  "Khalafawi": { station: "khalafawi", lines: [2] },
  "Sainttrase": { station: "sainttrase", lines: [2] },
  "Rodelfarag": { station: "rodelfarag", lines: [2] },
  "Masarrah": { station: "masarrah", lines: [2] },
  "Shohadaa": { station: "shohadaa", lines: [1, 2], isTransition: true, transferto: "line1" },
  "Atabba": { isTransition: true, station: "atabba", lines: [3 , 2] },
  "Abdeen": { station: "abdeen", lines: [2] },
  "Sadat": { station: "sadat", lines: [1, 2], isTransition: true },
  "Opera": { station: "opera", lines: [2] },
  "Dokki": { station: "dokki", lines: [2] },
  "Bohooth": { station: "bohooth", lines: [2] },
  "Cairouni": { station: "cairouni", lines: [2] },
  "Faisal": { station: "faisal", lines: [2] },
  "Giza": { station: "giza", lines: [2] },
  "Om elmasryeen": { station: "omelmasr", lines: [2] },
  "Sakyet": { station: "sakyet", lines: [2] },
  "Moneb": { direction: "Moneeb Direction" , station: "moneb", lines: [2] },

  // Line 3
  "Adly": { adly: "Adly Direction" , station: "adly", lines: [3] },
  "Hayksteb": { station: "hayksteb", lines: [3] },
  "Omar": { station: "omar", lines: [3] },
  "Qubaa": { station: "qubaa", lines: [3] },
  "Hesham barakat": { station: "heshambarakat", lines: [3] },
  "Nozha": { station: "nozha", lines: [3] },
  "El-shams": { station: "elshams", lines: [3] },
  "Alf Maskan": { station: "alf", lines: [3] },
  "Heliopolis": { station: "heliopolis", lines: [3] },
  "Haroun": { station: "haroun", lines: [3] },
  "Alahram": { station: "alahram", lines: [3] },
  "Kollyet": { station: "kollyet", lines: [3] },
  "Stadium": { station: "stadium", lines: [3] },
  "Fairzone": { station: "fairzone", lines: [3] },
  "Abasya": { station: "abasya", lines: [3] },
  "Abdobasha": { station: "abdobasha", lines: [3] },
  "Geish": { station: "geish", lines: [3] },
  "Babelsharia": { station: "babelsharia", lines: [3] },
  "Atabba": { station: "atabba", lines: [2, 3], isTransition: true, },
  "Naser": { station: "naser", lines: [1, 3], isTransition: true, transferto: "line1" },
  "Masbero": { station: "masbero", lines: [3] },
  "Safaa": { station: "safaa", lines: [3] },
  "Kitkat": { direction: "Kitkat Direction", station: "kitkat", lines: [3] },
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
  directionMessage = `In line ${currentStationLine} Move in the direction of ${direction} from ${currentStation} to ${destinationStation}.`;
}

resultParagraph.textContent = directionMessage;
}
