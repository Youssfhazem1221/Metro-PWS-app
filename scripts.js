function getDirection() {
  const currentStation = document.getElementById('currentStation').value;
  const destinationStation = document.getElementById('destinationStation').value;

 const metroStations = ["marj", "azbt", "ain shams", "matarya", "helmyazaton", "hadayekzaton", "saray", "hamamat", "kobry", "sadr", "demerdash", "ghamra", "shohadaa", "oraby", "naser", "sadat", "zaghloul", "zeinab", "saleh", "margergis", "zahraa", "darelsalam", "hadayekmaadi", "maadi", "thakanat", "torabalad", "kozzika", "turaelesmant", "masaraa", "hadayekhelwan", "wadihof", "helwanuni", "ainhelwan", "helwan"];

  const marjDirection = "Helwan";
  const helwanDirection = "Marj";

  const currentIndex = metroStations.indexOf(currentStation);
  const destinationIndex = metroStations.indexOf(destinationStation);

  if (currentIndex < destinationIndex) {
      document.getElementById('result').textContent = "Take " + marjDirection + " direction.";
  } else if (currentIndex > destinationIndex) {
      document.getElementById('result').textContent = "Take " + helwanDirection + " direction.";
  } else {
      document.getElementById('result').textContent = "You are already at your destination!";
  }
}