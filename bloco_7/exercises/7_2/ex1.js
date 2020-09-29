// playerNumber should be a number
// The variable player should be a string
// The value of player should be "Montana"
// You should use bracket notation to access testObj
// You should not assign the value Montana to the variable player directly.
// You should be using the variable playerNumber in your bracket notation

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  
  const playerNumber = 16;       // Change this line
  let player = testObj[playerNumber];   // Change this line

  console.log(playerNumber);
  console.log(player);

