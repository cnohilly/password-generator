// Assignment Code
var generateBtn = document.querySelector("#generate");

// Specifying password minimum and maximum length and character types
var passwordMin = 8, passwordMax = 128;
var charTypes = ["lowercase","uppercase","numeric","special"];

// creates a password using the valid character types and password size input by user
function generatePassword() {
  // add your logic here
  var passwordSize = passwordSizePrompt();
  var validCharacters = validCharactersPrompt();

  var password = "";
  for (var i = 0; i < passwordSize; i++){
    password += validCharacters.charAt(Math.floor(Math.random() * (validCharacters.length)));
  }
  return password;
}

// Prompts the user for size of desired password
// Loops until a valid length is specified
function passwordSizePrompt() {
  var response = "";
  while (response === "") {
    response = window.prompt("What length would you like your password to be? (Min: " + passwordMin + ", Max: " + passwordMax + ")");
    if (response === null || response === ""){
      window.alert("Please enter a valid response.");
      response = "";
    } else if (!parseInt(response) || parseInt(response) < passwordMin || parseInt(response) > passwordMax){
      window.alert("Please enter a number between " + passwordMin + " and " + passwordMax + ".");
      response = "";
    } else {
      response = parseInt(response);
    }
  }
  return response;
}

// Loops to prompt the user to choose which character types to use
// Will not proceed if at least one character type is not selected
// Returns string of all valid characters based on user's choices
function validCharactersPrompt() {
  validChars = "";
  while (validChars === "") {
    window.alert("Please select at least one character type to use.");
    for (var i = 0; i < charTypes.length; i++) {
      if (window.confirm("Should your password contain " + charTypes[i] + " characters?")) {
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
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
