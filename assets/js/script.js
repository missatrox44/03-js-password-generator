 // Assignment code here

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

function generatePassword () {
  //prompt = length 
  let pwdLength = prompt("Type desired password length", "8 - 128 characters");
  // console.log(pwdLength);
  //confirm - lowercase, uppercase, numeric, special characters
  if (confirm("Password length recorded!")); 
  alert('Your password will include lowercase letters.');
  alert('Your password will include uppercase letters.');
  alert('Your password will include special characters.');
  //   let lowerCase = prompt("Okay to include lower case letters?", "Yes or no?");
  // } else {
  //   txt = "Yes";
  // }
    //let numbers = confirm("how mnay things");
  
  //create var to hold answer to prompt/confirm

  //function to validate user answers
  //if and equality operators
    //if(numbers){

    // }
  //list of numbers, special chars, uppercase adn lower case
    //array
    var specialCharacters = ["!", "", "#", "$", "%", "&", " ' ", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    // console.log(specialCharacters);
    // console.log(lowerCase);
    // console.log(upperCase);
    // console.log(numbers);

    //combine all arrays
    var pwdArray = specialCharacters.concat(lowerCase, upperCase, numbers);
    // console.log(pwdArray);

    //random choose characters
  var randomCharacters = pwdArray[Math.floor(Math.random() * pwdArray.length)];
  // console.log(randomCharacters);

    //create a string set equal to password var
    
  //generate random password
  //return password

  return password;
}

