let generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //code with the help of study group/Zack, i had a lot of trouble getting this started
  //possible password choices, help from Anthony on below code
  const passSym = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
  const passLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const passUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const passNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


  let pwdchoices = [];
  //create somewhere for the user input of length of numbers.  Define them.
  let pwdinput = [];


  let numLength = "";


  //help from study group/anthony
  do {
    numLength = prompt("Choose a password length of 8-128")
  }
  while (numLength < 8 || numLength > 128);


 //prompts for different types of passwords with the help of Anthony
 
  const pwdSym = confirm("Choose ok if you want password that includes symbols");
  const pwdlower = confirm("Choose ok if you want password that includes lowercase letters");
  const pwdUpper = confirm("Choose ok if you want password that includes uppercase letters");
  const pwdNum = confirm("Choose ok if you want password that includes numbers");

  //if they say yes to symbols
  if (pwdSym) {
    pwdchoices = pwdchoices.concat(passSym);
  }
  //if they say yes to lowercase
  if (pwdlower) {
    pwdchoices = pwdchoices.concat(passLower);
  }
  //if they say yes to uppercase
  if (pwdUpper) {
    pwdchoices = pwdchoices.concat(passUpper);
  }
  //if they say yes to numbers
  if (pwdNum) {
    pwdchoices = pwdchoices.concat(passNum);
  }

  for (let i = 0; i < numLength; i++) {

    // taking all choices and smushing them together
    pwdinput.push(pwdchoices[Math.floor(Math.random() * pwdchoices.length)]);

  }


  return pwdinput.join("");
}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
  //alert with password, then putting on screen
  alert("Here comes your password!" + " : " + password)
}