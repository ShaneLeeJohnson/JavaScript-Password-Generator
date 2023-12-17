// Assignment code here
// Generates a function that returns a random password
function generatePassword() {
  // creates variables that contain the different charactes a user can choose to include in their password
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const numbers = '0123456789';
  const symblos = '!@#$%^&*()-_=+[]{};:",<.>/?';

  // Creates a variable called passwordLength that asks a user to choose a length for their password from 8 to 128 characters
  // Then it converts that string into a number and stores it in the variable
  let passwordLength = parseInt(prompt('Choose a length for your password between 8 and 128 characters: '));

  // Tests if the password length is Not a Number or if it is less than 8 or more than 128 characters.
  // If any of these are true the user is alerted and the program stops
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Password length must be between 8 and 128 characters.');
    return;
  }

  // Creates a variable to store the chosen password characters and sets it to an empty string
  let passwordCharacters = '';

  // Asks the user if they want to include lowercase letters and if selected adds the lowercase letters string to the passwordCharacters variable
  if (confirm('Include lowercase letters?')) {
    passwordCharacters += lowercaseLetters;
  }

  // Asks the user if they want to include uppercase letters and if selected adds the uppercase letters string to the passwordCharacters variable
  if (confirm('Include uppercase letters?')) {
    passwordCharacters += uppercaseLetters;
  }

  // Asks the user if they want to include numbers and if selected adds the numbers string to the passwordCharacters variable
  if (confirm('Include numbers?')) {
    passwordCharacters += numbers;
  }

  // Asks the user if they want to include symbols and if selected adds the symbols string to the passwordCharacters variable
  if (confirm('Include symbols?')) {
    passwordCharacters += symblos;
  }

  // Checks if the passwordCharacters variable is empty and if yes alerts the user that they must select at least one type of character to include
  if (passwordCharacters === '') {
    alert('At least one character type must be selected.');
    return;
  }

  // Creates a variable called password and sets it to an empty string.
  let password = '';
  // Creates a for loop that will repeat a number of times equal to the passwordLength that the user chose.
  // Each time the loop runs, it will select a character from the list of passwordCharacters based on a random index of the passwordCharacters string
  // and add it to the password variable. 
  for (let i = 0; i < passwordLength; i++) {
    const randomCharacter = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[randomCharacter];
  }

  // returns the value of the password variable
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
