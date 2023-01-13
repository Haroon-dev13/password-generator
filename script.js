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
let div = 0; 

// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(prompt("How much length do you want in password?"));
  if(length>=10 && length<=64){
    lower = confirm("Do you want lowercase characters in password?");
    upper = confirm("Do you want uppercase characters in password?");
    numeric = confirm("Do you want numeric characters in password?");
    special = confirm("Do you want special characters in password?");
    // console.log(special);
    if(lower != false || upper != false || numeric != false || special != false){
      if(lower != false){
        div++;
      }
      if(upper != false){
        div++;
      }
      if(numeric != false){
        div++;
      }
      if(special != false){
        div++;
      }
      div= Math.round(length/div);
      console.log(div);
      return true;
    }
    else{
      alert("Please choose at least one character type.")
      return false;
    }
  }
  else{
    alert("Please choose password length between 10 to 64.");
    return false;
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
  if(lower != false){
    for (let i = 0; i < div; i++) {
      let rand = getRandom(lowerCasedCharacters);
      getPassword.push(lowerCasedCharacters[rand])
    }
    console.log(getPassword);
  }
  if(upper != false){
    for (let i = 0; i < div; i++) {
      let rand = getRandom(upperCasedCharacters);
      getPassword.push(upperCasedCharacters[rand])
    }
    console.log(getPassword);

  }
  if(numeric != false){
    for (let i = 0; i < div; i++) {
      let rand = getRandom(numericCharacters);
      getPassword.push(numericCharacters[rand])
    }
    console.log(getPassword);


  }
  if(special != false){
    for (let i = 0; i < div; i++) {
      let rand = getRandom(specialCharacters);
      getPassword.push(specialCharacters[rand])
    }
    console.log(getPassword);

  }
  // if(diff){
  //   for (let i = 0; i < diff; i++) {
  //     let rand = getRandom(getPassword);
  //     getPassword.push(getPassword[rand])
  //   }
    // console.log(getPassword);

  // }
    console.log(getPassword);
    return getPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  getPassword = [];
  let opt = getPasswordOptions();
  if(opt){
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);