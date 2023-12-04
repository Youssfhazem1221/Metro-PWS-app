function getDirection(currentLocation, destination) {
  const stations = [1, 2, 3, 4, 5];

  // Ensure valid input
  if (!stations.includes(currentLocation) || !stations.includes(destination)) {
      return "Invalid station number.";
  }

  // Calculate distances to last and first stations
  const distanceToLast = Math.abs(stations.indexOf(currentLocation) - (stations.length - 1));
  const distanceToFirst = stations.indexOf(currentLocation);

  // Compare distances to determine direction
  if (distanceToLast <= distanceToFirst) {
      return "Keep moving towards the last station (Station 5).";
  } else {
      return "Move towards the first station (Station 1).";
  }
}

// Example usage:
const currentLocation = 2; // Replace with your current station number
const destination = 4;    // Replace with your destination station number

const direction = getDirection(currentLocation, destination);
console.log(direction);
