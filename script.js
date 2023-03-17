// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword (){
var lenghtpass = parseInt(prompt("enter password lenght"))
if(lenghtpass < 8 || lenghtpass > 128 || isNaN(lenghtpass)){
  return "Invalid length entered, please enter any integer between 8-128"
}
var acceptUpper = confirm("Do you like to have uppercase letters in your password?")
var acceptLower = confirm("Do you like to have lowercase letters in your password?")
var acceptSymbols = confirm("Do you like to have symbols letters in your password?")
var acceptNumbers = confirm("Do you like to have numbers letters in your password?")
var acceptedCharacterList = []
if(acceptLower){
  acceptedCharacterList += "abcdefghijklmnopqrstuvwxyz"
}

if(acceptUpper){
  acceptedCharacterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

if(acceptSymbols){
  acceptedCharacterList += "!@#$%^&*()_-+="
}

if(acceptNumbers){
  acceptedCharacterList += "1234567890"
}
console.log(acceptedCharacterList)
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
