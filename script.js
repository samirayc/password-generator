// Assignment code
var generateButton = document.getElementById('generateBtn');
generateButton.addEventListener('click', writePassword);

// Defines characters that the password must be
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#$,&'()*+,-./:;<=>?@[]/^_`{|}~";
var items = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Prompts user to make and customize their password
function generatePassword() {

  var passwordLength = prompt("Please enter the number of characters you want for you new password. It must be between 8 and 128 characters.");

  var numberPrompt = confirm("Do you want numbers in your password?");

  var lowercasePrompt = confirm("Do you want lowercases in your password?");

  var uppercasePrompt = confirm("Do you want uppercases in your password?");

  var specialCharPrompt = confirm("Do you want special characters in your password?");


  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;


  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";

    // Empty string variable for the for loop 
    var randomPasswordGenerated = "";

  // Functions that generate the password
  var functionArray = [
    function getnumbers() {
      return numbers[Math.floor(Math.random() * numbers.length)];
    },
    function getlowercase() {
      return lowercase[Math.floor(Math.random() * lowercase.length)];
    },
    function getuppercase() {
      return uppercase[Math.floor(Math.random() * uppercase.length)];
    },
    function getSpecialCharacters() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    }
  ];

  // Checks user preference and applies it

  if (numberPrompt === true) {
    items += numbers;
    minimumNumbers = functionArray[0];
    randomPasswordGenerated += minimumNumbers();
    minimumCount++;

  }

  if (lowercasePrompt === true) {
    items += lowercase;
    minimumLowerCases = functionArray[1];
    randomPasswordGenerated += minimumLowerCases();
    minimumCount++;

  }

  if (uppercasePrompt === true) {
    items += uppercase;
    minimumUpperCases = functionArray[2];
    randomPasswordGenerated += minimumUpperCases();
    minimumCount++;

  }

  if (specialCharPrompt === true) {
    items += specialCharacters;
    minimumSpecialCharacters = functionArray[3];
    randomPasswordGenerated += minimumSpecialCharacters();
    minimumCount++;

  }

  // Randomizing characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomCharPicked = items[Math.floor(Math.random()*items.length)];

    randomPasswordGenerated += randomCharPicked;

  }



  return randomPasswordGenerated;
}

