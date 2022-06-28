// Assignment code here

/*
1. Click button to initialize prompts
2. Choose password length
3. Choose uppercase y/n, lowercase y/n, number y/n, special characters y/n
4. Validate input
5. Generate password
6. Display password
*/

var password =
[
  {
    randomLower: function()
    {
      var confirmLower = window.confirm("Do you want lowercase letters in your password?");
      if (confirmLower)
      {
        var lowercase = "abcdefghijklmnopqrstuvwxyz";
        return lowercase(Math.floor(Math.random() * lowercase.length));
      }
    }
  },
  {
    randomUpper: function()
    {
      var confirmUpper = window.confirm("Do you want uppercase letters in your password?");
      if (confirmUpper)
      {
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return uppercase(Math.floor(Math.random() * uppercase.length));
      }
    }
  },
  {
    randomNumber: function()
    {
      var number = "0123456789";
      return number(Math.floor(Math.random() * number.length));
    }
  },
  {
    randomSymbol: function()
    {
      var symbol = "!@#$%^&*=+./";
      return symbol(Math.floor(Math.random() * symbol.length));
    }
  }
]

var generatePassword = function()
{
  var passwordLength = window.prompt("How many characters will your password have?")
  if (passwordLength >= 8 && passwordLength <= 128)
  {
    passwordLength = parseInt(passwordLength);

  }
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
