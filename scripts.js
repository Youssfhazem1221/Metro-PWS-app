function getDirection() {
  const currentStation = document.getElementById('currentStation').value;
  const destinationStation = document.getElementById('destinationStation').value;

 const firstLine = ["marj", "azbt", "ain shams", "matarya", "helmyazaton", "hadayekzaton", "saray", "hamamat", "kobry", "sadr", "demerdash", "ghamra", "shohadaa", "oraby", "naser", "sadat", "zaghloul", "zeinab", "saleh", "margergis", "zahraa", "darelsalam", "hadayekmaadi", "maadi", "thakanat", "torabalad", "kozzika", "turaelesmant", "masaraa", "hadayekhelwan", "wadihof", "helwanuni", "ainhelwan", "helwan"];

 const secondLine = ["shubra", "mezalat", "khalafawi", "sainttrase", "rodelfarag", "masarrah", "shohadaa", "atabba", "abdeen", "sadat", "opera", "dokki", "bohooth", "cairouni", "faisal", "giza", "omelmasr", "sakyet", "moneb"];

 const thirdLine = ["adly", "hayksteb", "omar", "qubaa", "heshambarakat", "nozha", "elshams", "alf", "heliopolis", "haroun", "alahram", "kollyet", "stadium", "fairzone", "abasya", "abdobasha", "geish", "babelsharia", "atabba", "naser", "masbero", "safaa", "kitkat"];

  const marjDirection = "Helwan";
  const helwanDirection = "Marj";
  const adlyDirection = "kitkat";
  const kitkatDirection = "Adly";
  const shubraDirection = "Moneeb"; 
  const monebDirection = "Shubra";

  
 


  const currentIndex = firstLine.indexOf(currentStation);
  const destinationIndex = firstLine.indexOf(destinationStation);

  if (currentIndex < destinationIndex) {
      document.getElementById('result').textContent = "Take " + marjDirection + " direction.";
  } else if (currentIndex > destinationIndex) {
      document.getElementById('result').textContent = "Take " + helwanDirection + " direction.";
  } else {
      document.getElementById('result').textContent = "You are already at your destination!";
  }
}