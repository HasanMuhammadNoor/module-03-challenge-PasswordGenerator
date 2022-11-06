// Assignment code here
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmPasswordLength;
var confirmPasswordItems;
var confirmNumbers;
var confirmSpecialCharacters;
var confirmLowercaseLetters;
var confirmUppercaseLetters;

function generatePassword(){
  confirmPasswordLength = prompt("How long do you want your password to be? You MUST pick a value between 8 and 128.");
  console.log("Your password is " + confirmPasswordLength + " characters long.");
  if(!confirmPasswordLength){
    alert("You MUST pick a value between 8 and 128.");
  } else if(confirmPasswordLength < 8 || confirmPasswordLength > 128){
    confirmPasswordLength = prompt("You MUST pick a value between 8 and 128.")
    console.log("Your password is " + confirmPasswordLength + " characters long.");
  } else{
    confirmNumbers = confirm("Do you want to include number(s) in your password?");
    console.log(confirmNumbers);
    confirmSpecialCharacters = confirm("Do you want to include special character(s) in your password?");
    console.log(confirmSpecialCharacters);
    confirmLowercaseLetters = confirm("Do you want to include lowercase letter(s) in your password?");
    console.log(confirmLowercaseLetters);
    confirmUppercaseLetters = confirm("Do you want to include uppercase letter(s) in your password?");
    console.log(confirmUppercaseLetters);
  }

  if(!confirmNumbers && !confirmSpecialCharacters && !confirmLowercaseLetters && !confirmUppercaseLetters){
    confirmPasswordItems = alert("You MUST pick 'OK' or 'CANCEL'");
  } else if(confirmNumbers && confirmSpecialCharacters && confirmLowercaseLetters && confirmUppercaseLetters){
    confirmPasswordItems = numbers.concat(specialCharacters, lowercaseLetters, uppercaseLetters);
    console.log(confirmPasswordItems);
  } else if(confirmNumbers && confirmSpecialCharacters && confirmLowercaseLetters){
    confirmPasswordItems = numbers.concat(specialCharacters, lowercaseLetters);
    console.log(confirmPasswordItems);
  } else if(confirmNumbers && confirmSpecialCharacters && confirmUppercaseLetters){
    confirmPasswordItems = numbers.concat(specialCharacters, uppercaseLetters);
    console.log(confirmPasswordItems);
  } else if(confirmSpecialCharacters && confirmLowercaseLetters && confirmUppercaseLetters){
    confirmPasswordItems = specialCharacters.concat(lowercaseLetters, uppercaseLetters);
    console.log(confirmPasswordItems);
  } else if(confirmNumbers && confirmSpecialCharacters){
    confirmPasswordItems = numbers.concat(specialCharacters);
    console.log(confirmPasswordItems)
  } else if(confirmUppercaseLetters && confirmNumbers){
    confirmPasswordItems = uppercaseLetters.concat(numbers);
    console.log(confirmPasswordItems);
  } else if(confirmLowercaseLetters && confirmUppercaseLetters){
    confirmPasswordItems = lowercaseLetters.concat(uppercaseLetters);
    console.log(confirmPasswordItems);
  } else if(confirmSpecialCharacters && confirmLowercaseLetters){
    confirmPasswordItems = specialCharacters.concat(lowercaseLetters);
    console.log(confirmPasswordItems);
  } else if(confirmNumbers){
    confirmPasswordItems = numbers;
    console.log(confirmPasswordItems);
  } else if(confirmSpecialCharacters){
    confirmPasswordItems = specialCharacters;
    console.log(confirmPasswordItems);
  } else if(confirmLowercaseLetters){
    confirmPasswordItems = lowercaseLetters;
    console.log(confirmPasswordItems);
  } else if(confirmUppercaseLetters){
    confirmPasswordItems = uppercaseLetters;
    console.log(confirmPasswordItems);
  }

  var randomGeneratedPasswordVariable = [];
  for(var i = 0; i < confirmPasswordLength; i++){
    var includeAllItems = confirmPasswordItems[Math.floor(Math.random() * confirmPasswordItems.length)];
    randomGeneratedPasswordVariable.push(includeAllItems);
    console.log(includeAllItems);
  }

  var theGeneratedPassword = randomGeneratedPasswordVariable.join("");
  console.log("Your password is " + theGeneratedPassword);
  return theGeneratedPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
