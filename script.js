/// Arrays for Letters and Characters

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "{", "}", "<", ">", "?", "/", "~"];

var charactersUsed = [];

// Functions

//Main Function

function generatePassword() {

// Confirm Length

    var confirmLength = parseInt(prompt("How many characters will your password have? Choose between 8 - 120 characters"));

console.log(confirmLength);

    if(confirmLength === "") {
        alert("Please enter a number between 8 - 120.");
        return;
    }

    if(confirmLength < 8 || confirmLength > 120) {
        alert("Error: Please Enter a Password Length between 8 and 120");
        return;
    }

        var confirmNumeric = confirm("Would you like to include numbers? Select 'OK' if you would, select 'Cancel' for no.");
        var confirmUppercase = confirm("Would you like to include uppercase letters? Select 'OK' if you would, select 'Cancel' for no.");
        var confirmLowercase = confirm("Would you like to include lowercase letters? Select 'OK' if you would, select 'Cancel' for no.");
        var confirmSpecialCharacters = confirm("Would you like to include special characters? Select 'OK' if you would, select 'Cancel' for no.");

             if (confirmNumeric) {
                 charactersUsed = charactersUsed.concat(numbers);
                console.log("charactersUsed",charactersUsed);
             }

             if (confirmUppercase) {
                 charactersUsed = charactersUsed.concat(uppercase);
                console.log("charactersUsed",charactersUsed);
             }

             if (confirmLowercase) {
                charactersUsed = charactersUsed.concat(lowercase);
               console.log("charactersUsed",charactersUsed);
            }

            if (confirmSpecialCharacters) {
                charactersUsed = charactersUsed.concat(specialCharacters);
               console.log("charactersUsed",charactersUsed);
            }
// Characters Used in String
console.log(confirmNumeric);

    var finalPassword = "";

        for (var i = 0; i < confirmLength; i++) {
        finalPassword = charactersUsed[Math.floor(Math.random() * charactersUsed.length)] + finalPassword;
        console.log(finalPassword)
        }

        return finalPassword;


    }
generatePassword()
// Password Generation
// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = function generatePassword()
  {var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);}
