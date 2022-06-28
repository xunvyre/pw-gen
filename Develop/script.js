// Assignment code here

/*
1. Click button to initialize prompts
2. Choose password length
3. Choose uppercase y/n, lowercase y/n, number y/n, special characters y/n
4. Validate input
5. Generate password
6. Display password
*/

//------------------------------------------------define variable
var password =
{
  lowercase: (true || false),
  uppercase: (true || false),
  numbers: (true || false),
  symbols: (true || false)
}

//------------------------------------------------randomizer functions to call later
const randomLower = function()
{
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  return lowercase(Math.floor(Math.random() * lowercase.length));
};

const randomUpper = function()
{
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercase(Math.floor(Math.random() * uppercase.length));
};

const randomNumber = function()
{
  var number = "0123456789";
  return number(Math.floor(Math.random() * number.length));
};

const randomSymbol = function()
{
  var symbol = " `~!@#$%^&*/.,";
  return symbol(Math.floor(Math.random() * symbol.length));
};

//------------------------------------------------main generator function
const generatePassword = function()
{
  //user input
  let lengthChoice = window.prompt("How long would you like your password?");
  //convert string to interger
  lengthChoice = parseInt(lengthChoice);
    if (lengthChoice >= 8 && lengthChoice <= 128)
    {
      window.confirm("Your password will be " +lengthChoice+ " characters long.");
    }
    else
    {
      window.alert("Invalid input! Please choose a number between 8 and 128.");
      return generatePassword();
    };

  //set password criteria to true or false
  var confirmations = function()
  {
    //confirm lowercase
    let lowerChoice = window.confirm("Do you want lowercase letters in your password?");
      if (lowerChoice)
      {
        password.lowercase = true;
      }
      else
      {
        password.lowercase = false;
      }
    //confirm uppercase
    let upperChoice = window.confirm("Do you want uppercase letters in your password?");
      if (upperChoice)
      {
        password.uppercase = true;
      }
      else
      {
        password.uppercase = false;
      }
    //confirm numbers
    let numberChoice = window.confirm("Do you want numbers in your password?");
      if (numberChoice)
      {
        password.numbers = true;
      }
      else
      {
        password.numbers = false;
      }
    //confirm symbols
    let symbolChoice = window.confirm("Do you want symbols in your password?");
      if (symbolChoice)
      {
        password.symbols = true;
      }
      else
      {
        password.symbols = false;
      }

    if (!lowerChoice && !upperChoice && !numberChoice && !symbolChoice)
    {
      window.alert("Please choose at least one criterion!")
      confirmations();
    }
  };
  confirmations();
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
