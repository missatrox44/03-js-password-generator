 // Assignment code here
  //array
  var specialCharacters = ["!", "", "#", "$", "%", "&", " ' ", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // console.log(specialCharacters);
  // console.log(lowerCase);
  // console.log(upperCase);
  // console.log(numbers);

//function to validate user answers
function userChoices() {
//prompt = length 
let pwdLength = prompt("Type desired password length between 8-128 characters");
// let pwdLength = prompt("Type desired password length between 8-128 characters", "8 - 128 characters");
// console.log(pwdLength);
if (pwdLength >= 8 && pwdLength <= 128) {
  if (confirm("Password length recorded!")); 
} else {
  alert("You MUST choose a number between 8-128");
  return null;
}
//confirm - lowercase, uppercase, numeric, special characters
// if (confirm("Password length recorded!")); 
var wantsLowerCase = confirm('change text!Your password will include lowercase letters.');
// console.log(wantsLowerCase);

//create var to hold answer to prompt/confirm
var wantsUpperCase = confirm('Your password will include uppercase letters.');
var wantsNumbers = confirm('Message here');
var wantsSpecialChar = confirm('Your password will include special characters.');


// if (wantsLowerCase) {
//   console.log(wantsLowerCase);
// } else {
//   console.log(wantsLowerCase);
// }



//list of numbers, special chars, uppercase adn lower case
//Object
var user = {
  yesLowerCase: wantsLowerCase,
  yesUpperCase: wantsUpperCase,
  yesNumbers: wantsNumbers,
  yesSpecialChar: wantsSpecialChar,
  totalLength: pwdLength
}
// console.log(user);
return user;
} 

function generatePassword () {
  
  var options = userChoices();
    //combine all arrays
    var pwdArray = specialCharacters.concat(lowerCase, upperCase, numbers);
    // console.log(pwdArray);

empty array possibel character
empty array/string final pwdAr?
guarentee choices included at least one 
if statesm for each options- if yes option add to empty array

    //random choose characters
  var randomCharacters = pwdArray[Math.floor(Math.random() * pwdArray.length)];
  // console.log(randomCharacters);

    //create a string set equal to password var
    
  //generate random password
  //return password

  return password;
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

