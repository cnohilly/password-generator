// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordMin = 8, passwordMax = 128;
var charTypes = ["lowercase","uppercase","numeric","special"];

// 8min - 128max Characters
// Characters Types - at least 1
//  lowercase
//  uppercase
//  numberic
//  special
// generate

function generatePassword() {
  // add your logic here
  var passwordSize = passwordSizePrompt();
  var validCharacters = validCharactersPrompt();

  console.log(validCharacters);
  console.log(passwordSize);
  return;
}

// Will ask user for input repeatedly until a non-empty or null response
function getValidResponse(message){
  var resp = window.prompt(message);
  while(resp === null || resp === ""){
    window.alert("Please enter a valid response.");
    resp = window.prompt(message);
  }
  return resp;
}

// Prompts the user for size of desired password
// Loops until a valid length is specified
function passwordSizePrompt() {
  var response = "";
  var validResponse = false;
  while (!validResponse) {
    response = parseInt(getValidResponse("What length would you like your password to be? (Min: " + passwordMin + ", Max: " + passwordMax + ")"));
    if (response < passwordMin || response > passwordMax) {
      window.alert("Please enter a number between " + passwordMin + " and " + passwordMax + ".");
    } else {
      validResponse = true;
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
        validChars += getValidCharacters(charTypes[i])
      }
    }
  }
  return validChars;
}

// Returns a string with of the valid characters for the given character type
function getValidCharacters(charType){
  var char1, char2;
  var returnString = "";
  switch (charType) {
    case "lowercase":
      char1 = 'a';
      char2 = 'z';  
      break;
    case "uppercase":
      char1 = 'A';
      char2 = 'Z';
      break;
    case "numeric":
      char1 = '0';
      char2 = '9';
      break;
    case "special":
      char1 = '!';
      char2 = '/';
      break;
  }
  for(let i = char1.charCodeAt(); i <= char2.charCodeAt(); i++){
    returnString += String.fromCharCode(i);
  }
  console.log(returnString);
  return returnString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
