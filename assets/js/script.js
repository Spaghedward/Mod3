// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function createPassword() {
// Defined the arrays to pull from and the variables for the function
  var lowercaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "{", "}", "|"]
  var charArray = [];
  var generatedPassword = "";
  // Prompt for character length and a return incase the password length did not match my parameters.
  var passwordLength = prompt("How many characters (8-128)?");

    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must be between 8-128 characters in length.");
      return;
  } 

  // Confirms asking about what characters to use and then adding them to an array.  Alerts were setup confirming selections.  
    var lowercase = confirm("Use lowercase letters?");
    if (lowercase) {
      charArray = charArray.concat(lowercaseChar);
      alert("Lowercase characters will be included.");
    } else {
      alert("lowercase character will not be included.");
  }

    var uppercase = confirm("Use Uppercase letters?");
    if (uppercase) {
      charArray = charArray.concat(uppercaseChar);
      alert("Uppercase characters will be included.");
    } else {
      alert("Uppercase character will not be included.");
  }

    var numbers = confirm("Use numeric characters?");
    if (numbers) {
      charArray = charArray.concat(numericChar);
      alert("Numeric characters will be included.");
    } else {
      alert("Numeric characters will not be included.");
  }

    var special = confirm("Use special characters?");
    if (special) {
      charArray = charArray.concat(specialChar);
      alert("Special characters will be included.");
    } else {
      alert("Special characters will not be included.")
  }
// An alert was setup to return if the user didn't select any characters
    if (!(lowercase || uppercase || numbers || special)) {
      alert("You must select at least one group of characters.");
    return;
  }
// used the console log to make sure my array was populating.
// console.log(charArray)
// Took forever to realize generatedPassword was being overridden for each value...
    for (i = 0; i < passwordLength; i++) {
      generatedPassword = generatedPassword + charArray[Math.floor(Math.random() * charArray.length)];
  }
  

  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
