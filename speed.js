// Speed Detector Program
//checkSpeed
//if speed is <= 70  print Ok
//if speed is more than 70, for every 5km/s above the speed limit, print points
//if points exceed 12, print "License suspended"

// Step 1: example input (you can replace this with prompt to get user input)
const speed = "115";

// Convert input to a number
function speedOfCar(speed) {
  speed = Number(speed);
}

// Step 3: Check if input is valid (not a number or negative)
if (isNaN(speed) || speed < 0) {
  console.log("Invalid input! Please enter a valid speed.");
} else {
  // Step 4: Define the speed limit
  const speedLimit = 70;

  // Step 5: If speed is less than or equal to 70, print "Ok"
  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    // Step 6: Calculate how much the speed exceeds the limit
    const excessSpeed = speed - speedLimit;

    // Step 7: Calculate demerit points (1 point for every 5 km/s above limit)
    const points = Math.floor(excessSpeed / 5);

    // Step 8: Check if points exceed 12
    if (points > 12) {
      console.log("License suspended");
    } else {
      // Step 9: Print the total points
      console.log(`Points: ${points}`);
    }
  }
}
