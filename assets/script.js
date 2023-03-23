// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var lenghtpass = parseInt(prompt("enter password lenght"))
  if (lenghtpass < 8 || lenghtpass > 128 || isNaN(lenghtpass)) {
    return "Invalid length entered, please enter any integer between 8-128"
  }
  var acceptUpper = confirm("Do you like to have uppercase letters in your password?")
  var acceptLower = confirm("Do you like to have lowercase letters in your password?")
  var acceptSymbols = confirm("Do you like to have symbols letters in your password?")
  var acceptNumbers = confirm("Do you like to have numbers letters in your password?")
  var acceptedCharacterList = []
  if (acceptLower) {
    acceptedCharacterList += "abcdefghijklmnopqrstuvwxyz" //26
  }

  if (acceptUpper) {
    acceptedCharacterList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //26
  }

  if (acceptSymbols) {
    acceptedCharacterList += "!@#$%^&*()_-+=" //14
  }

  if (acceptNumbers) {
    acceptedCharacterList += "1234567890" //10
  }
//  console.log(acceptedCharacterList)
  var password = ""
 if(acceptedCharacterList.length === 0){
  return "Please choose at least 1 option"
 }
  for (let i = 0; i < lenghtpass; i++) { // i = i+1
    var index = Math.floor(Math.random() * acceptedCharacterList.length)
    password += acceptedCharacterList[index]
  }
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
