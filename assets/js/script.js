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
//create vars to hold answer to prompt/confirm
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
var wantsLowerCase = confirm('Click OK to include lowercase letters or CANCEL to not include lowercase letters.');
// console.log(wantsLowerCase);
var wantsUpperCase = confirm('Click OK to include uppercase letters or CANCEL to not include uppercase letters.');
// console.log(wantsUpperCase);
var wantsNumbers = confirm('Click OK to include numbers or CANCEL to not include numbers.');
// console.log(wantsNumbers);
var wantsSpecialChar = confirm('Click OK to include special characters or CANCEl to not include special characters.');
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
return user;
} 



function generatePassword () {
  userChoices();
  // var options = userChoices();

//empty array to generate password from
  var pwdArray = [];
  // console.log(pwdArray); 

//If user chooses lowercase, add to pwdArray
if (user.yesLowerCase) {
  lowerCase.push(pwdArray);
}
  // console.log(pwdArray);

//If user chooses uppercase, add to pwdArray
if (user.yesUpperCase) {
  upperCase.push(pwdArray);
}
  // console.log(pwdArray);

//If user chooses numbers, add to pwdArray
if (user.yesNumbers) {
  numbers.push(pwdArray);
}
  // console.log(pwdArray);

//If user chooses special chracters, add to pwdArray
if (user.yesSpecialChar) {
  specialCharacters.push(pwdArray);
}
  // console.log(pwdArray);


console.log(pwdArray);
// console.log(pwdArray);


//Choose random characters
var randomCharacters = pwdArray[Math.floor(Math.random() * pwdArray.length)];
// console.log(randomCharacters);


//  var password =  created from randomCharacters and pwdLength

  //create a string set equal to password var
    
  //generate random password


  return password;
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

