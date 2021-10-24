// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// create arrays for each category 
let uppercaseArr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

let lowercaseArr = ["abcdefghijklmnopqrstuvwxyz"];

let specialChar = ["@#$%^&*_=+-/€.?<>)"];

let numbersChar = ["@#$%^&*_=+-/€.?<>)"];

var charTotalArr = [];
var finalPassword = [];

function generatePassword() {
      // 1. prompt passwordLength
      var passwordLength = window.prompt("Between 8 and 128 characters, how long do you want your password to be?");

      passwordLength = parseInt(passwordLength);

      console.log(passwordLength);

      if (passwordLength < 8 || passwordLength > 128) {
        alert("invalid. Enter a different number.")
        generatePassword();
      }
      else if (passwordLength === "") {
        alert("enter a valid length.")
        generatePassword();
      }
      else if (isNaN.passwordLength) {
        alert("enter a number.")
        generatePassword();
      }
      else if (passwordLength  > 8 || passwordLength < 128) {
        alert(passwordLength + ", Ok great.");
        sendPassword();
      }

      
      function sendPassword() {
        
        var addLowerCase = window.confirm("Lowercase Letters?");
        var addUpperCase = window.confirm("Uppercase Letters?");
        var addNumbers = window.confirm("Numbers?");
        var addSymbols = window.confirm("special characters?");

    if (!addLowerCase && !addUpperCase && !addNumbers && !addSymbols) {
    alert("Please select at least one or more character choices.");
      sendPassword();
  }
  else {
    if (addLowerCase) {
      charTotalArr += lowercaseArr;
    }
    if (addUpperCase) {
      charTotalArr += uppercaseArr;
    }
    if (addNumbers) {
      charTotalArr += numbersChar;
    }
    if (addSymbols) {
      charTotalArr += specialChar;
      console.log(charTotalArr);
    }
    // math random generator
      for (var i = 0; i < passwordLength; i++) {
      finalPassword = finalPassword + charTotalArr[Math.floor(Math.random() * charTotalArr.length)];
    }
  }
  // var finalPassword = finalPassword + Math.floor(Math.random(passwordLength));
  // console.log(finalPassword);
  
  console.log(typeof(finalPassword));
  // console.log(finalPassword.join(''));
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

// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated


// THEN the password is either displayed in an alert or written to the page
