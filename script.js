// Global variables.
const targetArray = generateRandomArray();
// Print to console to verify the array.
console.log(targetArray);
// Function to generate an array of 5 random numbers between 1 and 10.
function generateRandomArray() {
    const randomArray = [];
    for (let i = 0; i < 5; i++) {
      randomArray.push(Math.floor(Math.random() * 10) + 1);
    }
    return randomArray;
  }
// Function to check the user's guess.
function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const resultElement = document.getElementById('result');

    // Check if the input is a valid number.
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
      resultElement.innerText = 'Please enter a valid number between 1 and 10.';
      return;
    }

    // Count how many times the guessed number appears in the array.
    const count = targetArray.filter(num => num === parseInt(userGuess)).length;

    // Display the result.
    resultElement.innerText = `The number ${userGuess} appears ${count} time(s) in the array.`;
}