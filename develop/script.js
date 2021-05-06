/*library of Password Characters*/
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var specialChars = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+',',','.','/','?','<','>','[',']','{','}','|',';'];

var numericalChar = ['0','1','2','3','4','5','6','7','8','9'];



/* Function for Password Options */

function getpassOptions() {
/*User Input Variables*/
  var charNumber = parseInt(prompt("Enter a number between 8 and 128!"));

  var lowerConfirm = confirm("Would you like lower case letters?"); 
  
  var upperConfirm = confirm("Would you like upper case letters?");
  
  var specialConfirm = confirm("Would you like special characters?");
  
  var numericalConfirm = confirm("Would you like numerical characters?");

//Sets Char limit

if(charNumber < 8){
  alert("Must be greater than 8 characters!")
  return;
};

if(charNumber > 128){
  alert("Must be less than 128 characters!");
  return;
};

  /*Stops Code if No Input*/
if(
  lowerConfirm === false &&
  upperConfirm === false &&
  specialConfirm === false &&
  numericalConfirm === false
  ){
    alert("Must select at least one character type!");
    return;
  };
  // End of Return Code
    var passOptions = {
      charNumber:charNumber,
      lowerConfirm:lowerConfirm,
      upperConfirm:upperConfirm,
      specialConfirm:specialConfirm,
      numericalConfirm:numericalConfirm
    };

    return passOptions;
};
/*End of Password Options Function*/

//Function to Get Random Element From an Array
function getRand(arr){
  Math.floor(Math.random * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

//Function to Generate Password
 function passGen() {

// Create Password String
return result.join('');
 };
// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  ;
}
console.log(password);
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
