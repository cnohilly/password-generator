// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordMin = 8, passwordMax = 128;

// 8min - 128max Characters
// Characters Types - at least 1
//  lowercase
//  uppercase
//  numberic
//  special
// generate

function generatePassword() {
  // add your logic here
  passwordSize = passwordSizePrompt();

  var passwordInfo = {
    passwordSize: passwordSizePrompt(),
    charTypes: [
      {type:"lowercase", valid: false},
      {type:"uppercase", valid: false},
      {type:"numeric", valid: false},
      {type:"special", valid: false}
    ]
  };    
  var validCharacters = "";
  while (validCharacters === "") {
    window.alert("Please select at least one character type to use.");
    for (var i = 0; i < passwordInfo.charTypes.length; i++) {
      passwordInfo.charTypes[i].valid = characterTypePrompt(passwordInfo.charTypes[i].type);
      if (passwordInfo.charTypes[i].valid) {
        switch (passwordInfo.charTypes[i].type) {
          case "lowercase":
            validCharacters += getValidCharacters('a', 'z');
            break;
          case "uppercase":
            validCharacters += getValidCharacters('A', 'Z');
            break;
          case "numeric":
            validCharacters += getValidCharacters('0', '9');
            break;
          case "special":
            validCharacters += getValidCharacters('!', '/');
            break;
        }
      }
    }
  }
  console.log(validCharacters);
  console.log(passwordInfo);
  return;
}

function getValidResponse(message){
  var resp = window.prompt(message);
  while(resp === null || resp === ""){
    window.alert("Please enter a valid response.");
    resp = window.prompt(message);
  }
  return resp;
}

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

function characterTypePrompt(charType){
  return window.confirm("Should your password contain " + charType + " characters?");
}

function getValidCharacters(char1,char2){
  var returnString = "";
  for(let i = char1.charCodeAt(); i <= char2.charCodeAt(); i++){
    returnString += String.fromCharCode(i);
  }
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
