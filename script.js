// Assignment code here
function generatePassword() {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = lowercaseLetters.toUpperCase();
  const numbers = '0123456789';
  const symblos = '!@#$%^&*()-_=+[]{};:",<.>/?';

  let passwordLength = parseInt(prompt('Choose a length for your password between 8 and 128 characters: '));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Password length must be between 8 and 128 characters.');
    return;
  }

  let passwordCharacters = '';

  if (confirm('Include lowercase letters?')) {
    passwordCharacters += lowercaseLetters;
  }

  if (confirm('Include uppercase letters?')) {
    passwordCharacters += uppercaseLetters;
  }

  if (confirm('Include numbers?')) {
    passwordCharacters += numbers;
  }

  if (confirm('Include symbols?')) {
    passwordCharacters += symblos;
  }

  if (passwordCharacters === '') {
    alert('At least one character type must be selected.');
    return;
  }

  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomCharacter = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters[randomCharacter];
  }

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
