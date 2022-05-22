// Assignment Code
var generateBtn = document.querySelector("#generate");

// Specifying password minimum and maximum length and character types
var passwordMin = 8, passwordMax = 128;
var charTypes = ["lowercase", "uppercase", "numeric", "special"];

/* 
creates a password using the desired character types and password size 
input by the user
*/
function generatePassword() {
  // add your logic here
  var passwordSize = passwordSizePrompt();
  var validCharacters = validCharactersPrompt();

  var password = "";
  for (var i = 0; i < passwordSize; i++) {
    password += validCharacters.charAt(Math.floor(Math.random() * (validCharacters.length)));
  }
  return password;
} // end of generatePassword function

/* 
Prompts the user for the desired size of generated password
and loops until a valid length is given
*/
function passwordSizePrompt() {
  var response = "";
  while (!response) {
    response = prompt("What length would you like your password to be? (Min: " + passwordMin + ", Max: " + passwordMax + ")");
    if (response === null || response === "") {
      alert("Please enter a valid response.");
      response = "";
    } else if (!parseInt(response) || parseInt(response) < passwordMin || parseInt(response) > passwordMax) {
      alert("Please enter a number between " + passwordMin + " and " + passwordMax + ".");
      response = "";
    } else {
      response = parseInt(response);
    }
  }
  return response;
} // end of passwordSizePrompt function

/* 
Loops to prompt the user to choose which character types to use
will not proceed if at least one character type is not selected
returns string of all valid characters based on user's choices
*/
function validCharactersPrompt() {
  validChars = "";
  while (!validChars) {
    alert("Please select at least one character type to use.");
    for (var i = 0; i < charTypes.length; i++) {
      if (confirm("Should your password contain " + charTypes[i] + " characters?")) {
        switch (charTypes[i]) {
          case "lowercase":
            validChars += "abcdefghijklmnopqrstuvwxyz";
            break;
          case "uppercase":
            validChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
          case "numeric":
            validChars += "0123456789";
            break;
          case "special":
            validChars += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
            break;
        }
      }
    }
  }
  return validChars;
} // end of validCharactersPrompt function

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
} // end of writePassword function

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);