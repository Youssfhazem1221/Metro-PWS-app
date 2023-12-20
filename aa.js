const line1 =  ["marj", "azbt", "ainshams", "matarya", "helmyazaton", "hadayekzaton", "saray", "hamamat", "kobry", "sadr", "demerdash", "ghamra", "shohadaa", "oraby", "naser", "sadat", "zaghloul", "zeinab", "saleh", "margergis", "zahraa", "darelsalam", "hadayekmaadi", "maadi", "thakanat", "torabalad", "kozzika", "turaelesmant", "masaraa", "hadayekhelwan", "wadihof", "helwanuni", "ainhelwan", "helwan"];
const line2 =  ["shubra", "mezalat", "khalafawi", "sainttrase", "rodelfarag", "masarrah", "shohadaa", "atabba", "abdeen", "sadat", "opera", "dokki", "bohooth", "cairouni", "faisal", "giza", "omelmasr", "sakyet", "moneb"];
const line3 =  ["adly", "hayksteb", "omar", "qubaa", "heshambarakat", "nozha", "elshams", "alf", "heliopolis", "haroun", "alahram", "kollyet", "stadium", "fairzone", "abasya", "abdobasha", "geish", "babelsharia", "atabba", "naser", "masbero", "safaa", "kitkat"];

const stations = {
  // Line 1
  "marj": { name: "marj", lines: [1] },
  "azbt": { name: "azbt", lines: [1] },
  "ainshams": { name: "ainshams", lines: [1] },
  "matarya": { name: "matarya", lines: [1] },
  "helmyazaton": { name: "helmyazaton", lines: [1] },
  "hadayekzaton": { name: "hadayekzaton", lines: [1] },
  "saray": { name: "saray", lines: [1] },
  "hamamat": { name: "hamamat", lines: [1] },
  "kobry": { name: "kobry", lines: [1] },
  "sadr": { name: "sadr", lines: [1] },
  "demerdash": { name: "demerdash", lines: [1] },
  "ghamra": { name: "ghamra", lines: [1] },
  "shohadaa": { name: "shohadaa", lines: [1, 2], isTransition: true, transferTo: "line2", transferDirection: "moneb" },
  "oraby": { name: "oraby", lines: [1] },
  "naser": { name: "naser", lines: [1, 3], isTransition: true, transferTo: "line3", transferDirection: "safaa" },
  "sadat": { name: "sadat", lines: [1, 2] },
  "zaghloul": { name: "zaghloul", lines: [1] },
  "zeinab": { name: "zeinab", lines: [1] },
  "saleh": { name: "saleh", lines: [1] },
  "margergis": { name: "margergis", lines: [1] },
  "zahraa": { name: "zahraa", lines: [1] },
  "darelsalam": { name: "darelsalam", lines: [1] },
  "hadayekmaadi": { name: "hadayekmaadi", lines: [1] },
  "maadi": { name: "maadi", lines: [1] },
  "thakanat": { name: "thakanat", lines: [1] },
  "torabalad": { name: "torabalad", lines: [1] },
  "kozzika": { name: "kozzika", lines: [1] },
  "turaelesmant": { name: "turaelesmant", lines: [1] },
  "masaraa": { name: "masaraa", lines: [1] },
  "hadayekhelwan": { name: "hadayekhelwan", lines: [1] },
  "wadihof": { name: "wadihof", lines: [1] },
  "helwanuni": { name: "helwanuni", lines: [1] },
  "ainhelwan": { name: "ainhelwan", lines: [1] },
  "helwan": { name: "helwan", lines: [1] },

  // Line 2
  "shubra": { name: "shubra", lines: [2] },
  "mezalat": { name: "mezalat", lines: [2] },
  "khalafawi": { name: "khalafawi", lines: [2] },
  "sainttrase": { name: "sainttrase", lines: [2] },
  "rodelfarag": { name: "rodelfarag", lines: [2] },
  "masarrah": { name: "masarrah", lines: [2] },
  "shohadaa": { name: "shohadaa", lines: [1, 2], isTransition: true, transferTo: "line3", transferDirection: "adly" },
  "atabba": { name: "atabba", lines: [2], isTransition: true, transferTo: "line3", transferDirection: "adly" },
  "abdeen": { name: "abdeen", lines: [2] },
  "sadat": { name: "sadat", lines: [1, 2], isTransition: true },
  "opera": { name: "opera", lines: [2] },
  "dokki": { name: "dokki", lines: [2] },
  "bohooth": { name: "bohooth", lines: [2] },
  "cairouni": { name: "cairouni", lines: [2] },
  "faisal": { name: "faisal", lines: [2] },
  "giza": { name: "giza", lines: [2] },
  "omelmasr": { name: "omelmasr", lines: [2] },
  "sakyet": { name: "sakyet", lines: [2] },
  "moneb": { name: "moneb", lines: [2] },

  // Line 3
  "adly": { name: "adly", lines: [3] },
  "hayksteb": { name: "hayksteb", lines: [3] },
  "omar": { name: "omar", lines: [3] },
  "qubaa": { name: "qubaa", lines: [3] },
  "heshambarakat": { name: "heshambarakat", lines: [3] },
  "nozha": { name: "nozha", lines: [3] },
  "elshams": { name: "elshams", lines: [3] },
  "alf": { name: "alf", lines: [3] },
  "heliopolis": { name: "heliopolis", lines: [3] },
  "haroun": { name: "haroun", lines: [3] },
  "alahram": { name: "alahram", lines: [3] },
  "kollyet": { name: "kollyet", lines: [3] },
  "stadium": { name: "stadium", lines: [3] },
  "fairzone": { name: "fairzone", lines: [3] },
  "abasya": { name: "abasya", lines: [3] },
  "abdobasha": { name: "abdobasha", lines: [3] },
  "geish": { name: "geish", lines: [3] },
  "babelsharia": { name: "babelsharia", lines: [3] },
  "atabba": { name: "atabba", lines: [2], isTransition: true, transferTo: "line3", transferDirection: "adly" },
  "naser": { name: "naser", lines: [1, 3] },
  "masbero": { name: "masbero", lines: [3] },
  "safaa": { name: "safaa", lines: [3] },
  "kitkat": { name: "kitkat", lines: [3] },
};





const stations = {
  // Line 1
  // ... (your Line 1 stations)

  // Line 2
  // ... (your Line 2 stations)

  // Line 3
  // ... (your Line 3 stations)
};

function showDirection() {
  // Get the selected current and destination stations from the dropdown menu
  const currentStation = document.getElementById("currentStation").value;
  const destinationStation = document.getElementById("destinationStation").value;

  // Find the station objects for the selected stations
  const currentStationObj = stations[currentStation];
  const destinationStationObj = stations[destinationStation];


  const destinationStationLines = destinationStationObj.lines;
  const currentStationLines = currentStationObj.lines;


  // Access the first line of the destination station
  const currentStationLine = currentStationLines[0];
  const destinationStationLine = destinationStationLines[0];

  console.log("Current Station Line:", currentStationLine);
  console.log("Destination Station Line:", destinationStationLine);

  // Debugging: Log the retrieved station objects
  console.log("Current Station Object:", currentStationObj);
  console.log("Destination Station Object:", destinationStationObj);

  // Check if the selected stations are on the same line
  if (currentStationLine === destinationStationLine) {
    // Get the order of the stations in the current line array
    const currentLineStations = Object.keys(stations).filter(
      (station) => stations[station].lines.includes(currentStationLine)
    );

    // Find the indices of the current and destination stations in the current line array
    const currentIndex = currentLineStations.indexOf(currentStation);
    const destinationIndex = currentLineStations.indexOf(destinationStation);

    // Compare the order of stations
    if (currentIndex < destinationIndex) {
      console.log(`Go towards Direction on Line ${currentStationLine}`);
    } else if (currentIndex > destinationIndex) {
      console.log(`Go towards Direction on Line ${currentStationLine}`);
    } else {
      console.log(`You are already on the same station on Line ${currentStationLine}`);
    }
  } else {
    console.log("Stations are on different lines. No direction to show.");
  }

  // ... rest of the code
}

// Example usage:
showDirection();







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
  "shohadaa": { station: "shohadaa", lines: [1, 2], isTransition: true, transferTo: "line2",  },
  "oraby": { station: "oraby", lines: [1] },
  "naser": { station: "naser", lines: [1, 3], isTransition: true, },
  "sadat": { station: "sadat", lines: [1, 2] },
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
  "helwan": { direction: "helwanDirection" ,station: "helwan", lines: [1] },

  // Line 2
  "shubra": { direction: "shubraDirection" ,station: "shubra", lines: [2] },
  "mezalat": { station: "mezalat", lines: [2] },
  "khalafawi": { station: "khalafawi", lines: [2] },
  "sainttrase": { station: "sainttrase", lines: [2] },
  "rodelfarag": { station: "rodelfarag", lines: [2] },
  "masarrah": { station: "masarrah", lines: [2] },
  "shohadaa": { station: "shohadaa", lines: [1, 2], isTransition: true, transferTo: "line3", transferDirection: "adly" },
  "atabba": { station: "atabba", lines: [2], isTransition: true, transferTo: "line3", transferDirection: "adly" },
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
  "moneb": { direction: "monebDirection" , station: "moneb", lines: [2] },

  // Line 3
  "adly": { adly: "adlyDirection" , station: "adly", lines: [3] },
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
  "atabba": { station: "atabba", lines: [2], isTransition: true, transferTo: "line3", transferDirection: "adly" },
  "naser": { station: "naser", lines: [1, 3] },
  "masbero": { station: "masbero", lines: [3] },
  "safaa": { station: "safaa", lines: [3] },
  "kitkat": { direction: "kitkatDirection", station: "kitkat", lines: [3] },
};



function showDirection() {

  const currentStation = document.getElementById("currentStation").value;
  const destinationStation = document.getElementById("destinationStation").value;


  const currentStationObj = stations[currentStation];
  const destinationStationObj = stations[destinationStation];



  const line1Stations = Object.keys(stations).filter(
    (station) => stations[station].lines.includes(1)
  );


  const line2Stations = Object.keys(stations).filter(
    (station) => stations[station].lines.includes(2)
  );


  const line3Stations = Object.keys(stations).filter(
     (station) => stations[station].lines.includes(3)
  );

 
  const currentIndexLine1 = line1Stations.indexOf(currentStation);
  const destinationIndexLine1 = line1Stations.indexOf(destinationStation);


  const currentIndexLine2 = line2Stations.indexOf(currentStation);
  const destinationIndexLine2 = line2Stations.indexOf(destinationStation);


  const currentIndexLine3 = line3Stations.indexOf(currentStation);
  const destinationIndextLine3 = line3Stations.indexOf(destinationStation);


  if (currentIndexLine1 < destinationIndexLine1) {
    console.log("Go towards Helwan Direction on Line 1");
  } else if (currentIndexLine1 > destinationIndexLine1) {
    console.log("Go towards Marj Direction on Line 1");
  } else {
    console.log("You are already on the same station on Line 1");
  }

  if (currentIndexLine2 < destinationIndexLine2) {
    console.log("Go towards Moneeb Direction");
  } else if (currentIndexLine2 > destinationIndexLine2) {
    console.log("Go towards Shubra direction");
  } else {
    console.log("You are already on the same station on Line 2");
  }

if (currentIndexLine3 < destinationIndextLine3) { 
  console.log("Go towards Kitkat station") ;
} else if ( currentIndexLine3 > destinationIndextLine3) {
  console.log("Go towards Adly Mansour Station"); 
} else {
  console.log("You are already at the same station on line 3");
}
   

 
}

// Example usage:
showDirection();



/* 

check if current station and destination station are the same line.
if they are -, just print the direction they need to go.
to get direction follow this code's logic 

function showDirection() {
  
    const currentStation = document.getElementById("currentStation").value;
    const destinationStation = document.getElementById("destinationStation").value;
  

    const currentStationObj = stations[currentStation];
    const destinationStationObj = stations[destinationStation];
  
  
  
    const line1Stations = Object.keys(stations).filter(
      (station) => stations[station].lines.includes(1)
    );
  
 
    const line2Stations = Object.keys(stations).filter(
      (station) => stations[station].lines.includes(2)
    );


    const line3Stations = Object.keys(stations).filter(
       (station) => stations[station].lines.includes(3)
    );
  
   
    const currentIndexLine1 = line1Stations.indexOf(currentStation);
    const destinationIndexLine1 = line1Stations.indexOf(destinationStation);
  

    const currentIndexLine2 = line2Stations.indexOf(currentStation);
    const destinationIndexLine2 = line2Stations.indexOf(destinationStation);


    const currentIndexLine3 = line3Stations.indexOf(currentStation);
    const destinationIndextLine3 = line3Stations.indexOf(destinationStation);

  
    if (currentIndexLine1 < destinationIndexLine1) {
      console.log("Go towards Helwan Direction on Line 1");
    } else if (currentIndexLine1 > destinationIndexLine1) {
      console.log("Go towards Marj Direction on Line 1");
    } else {
      console.log("You are already on the same station on Line 1");
    }
  
    if (currentIndexLine2 < destinationIndexLine2) {
      console.log("Go towards Moneeb Direction");
    } else if (currentIndexLine2 > destinationIndexLine2) {
      console.log("Go towards Shubra direction");
    } else {
      console.log("You are already on the same station on Line 2");
    }

  if (currentIndexLine3 < destinationIndextLine3) { 
    console.log("Go towards Kitkat station") ;
  } else if ( currentIndexLine3 > destinationIndextLine3) {
    console.log("Go towards Adly Mansour Station"); 
  } else {
    console.log("You are already at the same station on line 3");
  }
     
  
   
  }
x


if they're not, find the transtion station for the destination line. This can be done by filtering your object and finding the entry with isTranstionStation: true for the destination line.
then, use the information in that object (transferTo, direction) to figure out where to go in that case

*/ 


/*


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
    "helwan": { direction: "helwanDirection" ,station: "helwan", lines: [1] },

    // Line 2
    "shubra": { direction: "shubraDirection" ,station: "shubra", lines: [2] },
    "mezalat": { station: "mezalat", lines: [2] },
    "khalafawi": { station: "khalafawi", lines: [2] },
    "sainttrase": { station: "sainttrase", lines: [2] },
    "rodelfarag": { station: "rodelfarag", lines: [2] },
    "masarrah": { station: "masarrah", lines: [2] },
    "shohadaa": { station: "shohadaa", lines: [1, 2], isTransition: true, transferto: "line1" },
    "atabba": { station: "atabba", lines: [2], isTransition: true, transferto: "line3", },
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
    "moneb": { direction: "monebDirection" , station: "moneb", lines: [2] },

    // Line 3
    "adly": { adly: "adlyDirection" , station: "adly", lines: [3] },
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
    "atabba": { station: "atabba", lines: [2], isTransition: true, transferto: "line2",  },
    "naser": { station: "naser", lines: [1, 3], isTransition: true, transferto: "line1" },
    "masbero": { station: "masbero", lines: [3] },
    "safaa": { station: "safaa", lines: [3] },
    "kitkat": { direction: "kitkatDirection", station: "kitkat", lines: [3] },
  };



  function showDirection() {
    const currentStation = document.getElementById("currentStation").value;
    const destinationStation = document.getElementById("destinationStation").value;
  
    const currentStationObj = stations[currentStation];
    const destinationStationObj = stations[destinationStation];
  
    const line1Stations = Object.keys(stations).filter(
      (station) => stations[station].lines && stations[station].lines.includes(1)
    );
  
    const line2Stations = Object.keys(stations).filter(
      (station) => stations[station].lines && stations[station].lines.includes(2)
    );
  
    const line3Stations = Object.keys(stations).filter(
      (station) => stations[station].lines && stations[station].lines.includes(3)
    );
  
    const helwanDirection = " Helwan ";
    const moneebDirection = " Moneeb ";
    const kitkatDirection = " KitKat ";
    const adlyDirection = " Adly Mansour ";
    const shubraDirection = " Shubra ";
    const marjDirection = " Marj ";
  
    const currentIndexLine1 = line1Stations.indexOf(currentStation);
    const destinationIndexLine1 = line1Stations.indexOf(destinationStation);
  
    const currentIndexLine2 = line2Stations.indexOf(currentStation);
    const destinationIndexLine2 = line2Stations.indexOf(destinationStation);
  
    const currentIndexLine3 = line3Stations.indexOf(currentStation);
    const destinationIndexLine3 = line3Stations.indexOf(destinationStation);
  
    let firstTransitionStation = findFirstTransitionStation(currentStationObj, destinationStation);
  
    console.log(` Current Station : ${currentStation}`, ` Distanation Station ${destinationStation}`);
  
    if (currentIndexLine1 < destinationIndexLine1) {
      console.log("Go towards" + helwanDirection + "Direction on the first line");
    } else if (currentIndexLine1 > destinationIndexLine1) {
      console.log("Go towards" + marjDirection + "Direction on the first line");
    }
  
    if (currentIndexLine2 < destinationIndexLine2) {
      console.log("Go towards" + moneebDirection + "Direction on the second line");
    } else if (currentIndexLine2 > destinationIndexLine2) {
      console.log("Go towards" + shubraDirection + "Direction on the second line");
    }
  
    if (currentIndexLine3 < destinationIndexLine3) {
      console.log("Go towards" + kitkatDirection + "Station on the third line");
    } else if (currentIndexLine3 > destinationIndexLine3) {
      console.log("Go towards" + adlyDirection + "Station on the third line");
    }
  
    if (firstTransitionStation) {
      console.log("First Transition Station:", firstTransitionStation);
    }
  }
  
  function findFirstTransitionStation(currentStationObj, destinationStation) {
    const lineStations = Object.keys(stations).filter(
      (station) => stations[station].lines && stations[station].lines.includes(currentStationObj.lines[0])
    );
  
    const currentIndex = lineStations.indexOf(currentStationObj.station);
    const destinationIndex = lineStations.indexOf(destinationStation);
  
    if (currentIndex === -1 || destinationIndex === -1) {
      console.error("Invalid current or destination station");
      return null;
    }
  
    const direction = currentIndex < destinationIndex ? "forward" : "backward";
  
    for (let i = currentIndex + 1; i < destinationIndex; i++) {
      const station = lineStations[i];
      if (stations[station].isTransition) {
        return station;
      }
    }
  
    return null;
  }

*/


/*  const stations = {
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
    "helwan": { direction: "helwanDirection" ,station: "helwan", lines: [1] },

    // Line 2
    "shubra": { direction: "shubraDirection" ,station: "shubra", lines: [2] },
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
    "moneb": { direction: "monebDirection" , station: "moneb", lines: [2] },

    // Line 3
    "adly": { adly: "adlyDirection" , station: "adly", lines: [3] },
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
    "kitkat": { direction: "kitkatDirection", station: "kitkat", lines: [3] },
  };

*/


