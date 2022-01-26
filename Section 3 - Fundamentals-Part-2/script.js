//-------------//
// Strict mode //
//-------------//

//for secure mode
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  //hasDriverLicense = true; // this is fail but console dont help with out use strict mode
}

if (passTest) {
  hasDriversLicense = true;
}

//const interface = "Roi"; // also a error

//------------------//
//   Functions 🌕  //
//-----------------//

function logger() {
  console.log("My name is Roi");
}

//calling/invoke/running the function
logger();

//with paramaters and return
function fruitProccessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

console.log(fruitProccessor(3, 5));

//----------------------------------------------//
//   Function Declarations vs. Expressions 🌕  //
//----------------------------------------------//

//Function Declarations

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

//or

function calcAge(birthYear) {
  return 2037 - birthYear;
}

console.log(calcAge(1991));

//Function Expressions also called anonymous function

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

console.log(calcAge2(1991));

//Function Declarations can call before you defined them

// ********************//
// Coding Challenge #1 //
// ********************//

const calcAverage = (val1, val2, val3) => {
  return (val1 + val2 + val3) / 3;
};

function checkWinner(avgDolhins, avgKoalas) {
  if (avgKoalas > 2 * avgDolhins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
  } else if (avgDolhins > 2 * avgKoalas) {
    console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
  } else {
    console.log("No one wins");
  }
}
console.log("Data 1 :");
checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
console.log("Data 2 :");
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

//-----------------//
// Arrow Functions //
//-----------------//

const calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1991));

//{} must have return
const yearsUntilRetirrment = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} will retire in ${retirement}`;
};
console.log(yearsUntilRetirrment(1991, "Roi"));

//-----------------------------------//
// Functions Calling Other Functions //
//-----------------------------------//

function fruitProccessor2(apples, oranges) {
  const applePieces = CutFruits(apples);
  const orangePieces = CutFruits(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}

function CutFruits(fruits) {
  return fruits * 4;
}

console.log(fruitProccessor2(2, 3));

//---------//
// Arrays //
//---------//

const firstName7 = "Roi";
const myArray = [firstName7, "susi", 2000 - 1923, new Array("a", "b", "c")];
arrFun(myArray);

function arrFun(showArray) {
  return console.log(showArray);
}

//----------------------------------//
// Basic Array Operations (Methods) //
//----------------------------------//

//functions to Add :
//funtion push 📍 to the last of the array//
const arr = ["Roi", "Susi", "Hadar"];
console.log(arr);
const returnLength = arr.push("Susi");
console.log(arr);
console.log(`Return the length that is ${returnLength}`);
//funtion unshift 📍 to the beginning of the array//
arr.unshift("Hello");
console.log(arr);

//functions to Remove :
//funtion pop 📍 of the last cell of the array//
const returenWhoPoped = arr.pop();
console.log(`Return the pop element that is ${returenWhoPoped}`);
console.log(arr);
//funtion shist 📍 of the first cell of the array//
const returenWhoShifted = arr.shift();
console.log(`Return the pop element that is ${returenWhoShifted}`);
console.log(arr);

//positions :
//indexOf 0 to infi the location if found in the array , -1 if not found
console.log(arr.indexOf("Susi"));
//includes true if found false otherwise ** doesn't do type corection
console.log(arr.includes("Susi"));
