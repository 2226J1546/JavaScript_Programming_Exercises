// Guess the random number

var getGuesser = function () {
    var secret = Math.floor(Math.random() * 50 + 30);
	console.log(secret)
  
    return function (userNumber) {
      if (userNumber === secret) {
        return "Well done!";
      } else {
        return "Unlucky, try again.";
      }
    };
  }
  var guess = getGuesser();
  function between(min, max) {
	// Generate a random number between 0 (inclusive) and 1 (exclusive)
	const randomFraction = Math.random();
  
	// Calculate the random whole number within the range [min, max]
	const randomInRange = Math.floor(randomFraction * (max - min + 1)) + min;
  
	return randomInRange;
  }
  
  // Example usage:
  const result = between(10, 20); // Returns a random whole number between 10 and 20 (inclusive)
  console.log(result);
      
  
  
  /* Further Adventures
   *
   * 1) Run the program.
   *
   * 2) Play the game a few times on the console.
   *    e.g. guess(2)
   *
   * 3) Change the code so the secret number is
   *    between 30 and 50.
   *
   * 4) Test your changes.
   *
   * CHALLENGE: Create a function called 'between'
   * that returns a random whole number between two
   * numbers passed as arguments.
   *
   * e.g. between(1, 5)      //   1 <= whole number <= 5
   *      between(100, 200)  // 100 <= whole number <= 200
   *
   */
