// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Decleare variables with Global scope
let lower=0;
let upper=0;
let numeric=0;
let special=0;
let diff = 0; 

// Function to prompt user for password options
function getPasswordOptions() {
  let length = prompt("How much length do you want in password?");
  if(length>=1 && length<=64){
    lower = parseInt(prompt("How many lowercase character you want in password?"));
    upper = parseInt(prompt("Do you want uppercase character in password?"));
    numeric = parseInt(prompt("Do you want numeric character in password?"));
    special = parseInt(prompt("Do you want special characters?"));
    if(lower>=1 || upper>=1 || numeric>=1 || special>=1){
      let sum = lower+upper+numeric+special;
      console.log(sum);
      if(sum > length){
        alert("Your specified characters length more than your choosen length.Please try again!")
      }
      else{
        diff = length-sum;
        console.log(diff);
        generatePassword();
      }
    }
    else{
      alert("Please choose at least one character type.")
    }
  }
  else{
    alert("Please choose password length between 1 to 64.");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  // min = Math.ceil(0);
  min = 0;
  max = Math.floor(arr.length-1);
  return Math.floor(Math.random() * (max - min + 1) + min);

}

// Function to generate password with user input
let getPassword =[];
function generatePassword() {
  if(lower){
    for (let i = 0; i < lower; i++) {
      let rand = getRandom(lowerCasedCharacters);
      getPassword.push(lowerCasedCharacters[rand])
    }
    // console.log(getPassword);
  }
  if(upper){
    for (let i = 0; i < upper; i++) {
      let rand = getRandom(upperCasedCharacters);
      getPassword.push(upperCasedCharacters[rand])
    }
    // console.log(getPassword);

  }
  if(numeric){
    for (let i = 0; i < numeric; i++) {
      let rand = getRandom(numericCharacters);
      getPassword.push(numericCharacters[rand])
    }
    // console.log(getPassword);


  }
  if(special){
    for (let i = 0; i < special; i++) {
      let rand = getRandom(specialCharacters);
      getPassword.push(specialCharacters[rand])
    }
    // console.log(getPassword);

  }
  if(diff){
    for (let i = 0; i < diff; i++) {
      let rand = getRandom(getPassword);
      getPassword.push(getPassword[rand])
    }
    // console.log(getPassword);

  }
    console.log(getPassword);
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

getPasswordOptions();