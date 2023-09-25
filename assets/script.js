// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function createPassword (length) {
  var lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  var possibleCharacters = lowerAlphabet;
  var password = "";
  password += lowerAlphabet[Math.floor(Math.random() * lowerAlphabet.length)]
  for (var i=1; i<length; i++){
    password +=possibleCharacters[Math.floor(Math.random() *possibleCharacters.length)];
  }
  return password.split("").sort(function(){ return 0.5 - Math.random()}).join("")
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
