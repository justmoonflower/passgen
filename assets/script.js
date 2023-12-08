// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
var upper = confirm("Would you like your password to contain an uppercase letter?");
var lower = confirm("Would you like your password to contain a lowercase letter?");
var numb = confirm("Would you like your password to contain numbers?");
var symb = confirm("Would you like your password to contain symbols?");
var keyLength = prompt("Your password must be between 8 and 128 characters. Please enter an amount between those two numbers.");


// Write password to the #password input
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "!#$%^&*"
var multiSelect =[];

if (keyLength < 8 || keyLength > 128) {
  prompt("Password length does not meet accepted character count! Please enter an amount 8 and 128 characters.")
}

if (uppercase) {multiSelect += uppercase}
if (lowercase) {multiSelect += lowercase;}
if (numbers) {multiSelect += numbers;}
if (symbols) {multiSelect += symbols;}

var finalPassword = ""
for (var i = 0; i < keyLength; i++) {
  var rng =[Math.floor(Math.random() * multiSelect.length)];
  finalPassword = finalPassword + multiSelect[rng];
}
return finalPassword;
};


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
