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

//empty vars to generate password from
  var pwdArray = [];
  var password = "";
  var pwdLength = 0;
// console.log(pwdArray); 

//function to validate user answers
function userChoices() {
//create vars to hold answer to prompt/confirm
//prompt = length 
var pwdLength = prompt("Type desired password length between 8-128 characters");
// let pwdLength = prompt("Type desired password length between 8-128 characters", "8 - 128 characters");
// console.log(pwdLength);
if (pwdLength >= 8 && pwdLength <= 128) {
  if (confirm("Password length recorded!")); 
} else {
  alert("You MUST choose a number between 8-128");
  return null;
}

//confirm - lowercase, uppercase, numeric, special characters
var wantsLowerCase = confirm('Click OK to include lowercase letters or CANCEL to omit lowercase letters.');
// console.log(wantsLowerCase);
var wantsUpperCase = confirm('Click OK to include uppercase letters or CANCEL to omit uppercase letters.');
// console.log(wantsUpperCase);
var wantsNumbers = confirm('Click OK to include numbers or CANCEL to omit numbers.');
// console.log(wantsNumbers);
var wantsSpecialChar = confirm('Click OK to include special characters or CANCEl to omit special characters.');
// console.log(wantsSpecialChar);

//test that choices are logged correctly - total overkill
// if (wantsLowerCase) {
//   console.log(wantsLowerCase);
// } else {
//   console.log(wantsLowerCase);
// }

// if (wantsUpperCase) {
//   console.log(wantsUpperCase);
// } else {
//   console.log(wantsUpperCase);
// }


// if (wantsNumbers) {
//   console.log(wantsNumbers);
// } else {
//   console.log(wantsNumbers);
// }


// if (wantsSpecialChar) {
//   console.log(wantsSpecialChar);
// } else {
//   console.log(wantsSpecialChar);
// }

//user choices for lowercase, uppercase, numbers, special character, pwdLength SAVED to object
var user = {
  yesLowerCase: wantsLowerCase,
  yesUpperCase: wantsUpperCase,
  yesNumbers: wantsNumbers,
  yesSpecialChar: wantsSpecialChar,
  totalLength: pwdLength
}

// console.log(user);
// return user;

//If user chooses lowercase, add to pwdArray
if (user.yesLowerCase) {
  pwdArray.push(lowerCase);
}
  // console.log(pwdArray);

//If user chooses uppercase, add to pwdArray
if (user.yesUpperCase) {
  pwdArray.push(upperCase);
}
  // console.log(pwdArray);

//If user chooses numbers, add to pwdArray
if (user.yesNumbers) {
  pwdArray.push(numbers);
}
  // console.log(pwdArray);

//If user chooses special chracters, add to pwdArray
if (user.yesSpecialChar) {
  pwdArray.push(specialCharacters);
}
  // console.log(pwdArray);
} 

function generatePassword () {
  userChoices();
//  var options = userChoices();

// merge nested arrays in pwdArray
var merged = pwdArray.flat(1);
// console.log(merged);
//convert array to string
let mergedString = merged.join();

//Choose random character
// var randomCharacters = merged[Math.floor(Math.random() * merged.length)];
var randomCharacters = "";
// console.log(randomCharacters);

//generate random password with pwdLength and randomCharacters
for (var i = 0; i <= pwdLength; i++) {
  var randomCharacters = Math.floor(Math.random() * mergedString.length);
  password += mergedString.substring(randomCharacters, randomCharacters +1);
  
  return password;
}

}


//UTA Bootcamp starter code
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