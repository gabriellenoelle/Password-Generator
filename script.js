/// Write variables first

var confirmLength = " ";
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecialCharacters;
var charactersUsed = [];
var finalPassword;

/// Then write arrays for letters and characters

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "{", "}", "<", ">", "?", "/", "~"];

// Functions

function generatePassword() {

  var confirmLength = (prompt("How many characters will your password have? Choose between 8 - 120 characters."));

  var confirmLowercase = (prompt("Would you like to include lowercase letters? Select 'OK' if you would, select 'Cancel' for no."))


}

// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
