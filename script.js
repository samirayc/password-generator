
// Assignment Code
var generateBtn = document.querySelector("generate");

// Defines characters that the password must be
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#$,&'()*+,-./:;<=>?@[]/^_`{|}~";

// Define the function generatePassword
function generatePassword() {
  var password = "";
  var passwordCharacters = "";
  // Prompt to select how long the password will be (8-128 char)
  var passwordLength = prompt("How long will your password be? Valid length is between 8-128 characters.");
  passwordLength = parseInt(passwordLength);



  // Makes sure password is within character limit (8-128)

  if (passwordLength < 8) {
    alert("Invalid entry. Password must be at least 8 characters.");
    return "";
  }

  if (passwordLength > 128) {
    alert("Invalid entry. Password must not be longer than 128 characters.");
    return "";
  }
}

// Prompts user if they would like to use lowercase characters.
var lowercasePreference = confirm("Would you like your password to have lowercase characters?");
if (lowercasePreference === true) {
  passwordCharacters += lowercase;
}

// Prompts user if they would like to use uppercase characters.
var uppercasePreference = confirm("Would you like your password to have uppercase characters?");
if (uppercasePreference === true) {
  passwordCharacters += uppercase;
}

// Prompts user if they would like to use numerical characters.
var numberPreference = confirm("Would you like your password to have numbers?");
if (numberPreference === true) {
  passwordCharacters += numbers;
}

// Prompts user if they would like to use special characters.
var specialCharactersPreference = confirm("Would you like your password to have special characters?");
if (specialCharactersPreference === true) {
  passwordCharacters += specialCharacters;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");
  passwordText.value = password;

}
console.log(writePassword);

//Creates random password, adding for loop to continue to add letters until user-defined max is hit.
for (var i = 0; i < passwordLength; i++) {
  passwordGenerated = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
