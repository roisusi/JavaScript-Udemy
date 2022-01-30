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

console.log("//*********************//");
console.log("// Coding Challenge #1 //");
console.log("//*********************//");
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

console.log("-------------------------------------------");

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

console.log("//*********************//");
console.log("// Coding Challenge #2 //");
console.log("//*********************//");
// ********************//
// Coding Challenge #2 //
// ********************//

function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    billValue *= 1.15;
  } else {
    billValue *= 1.2;
  }
  return billValue;
}

const bills = [125, 555, 44];
let tips = [];

bills.map((bill) => {
  tips.push(calcTip(bill));
});

console.log(tips);

console.log("-------------------------------------------");

//---------//
// Objests //
//---------//

const obj = {
  firstName: "Roi",
  lastName: "Susi",
  birthYear: 35,
  job: "DevOps",
  // calcAge: function (birthYear) {
  //   return 2022 - birthYear;
  // },
  //1 time property (will calc 1 time)
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
};
console.log(obj);

//--------------------------//
// Dot vs. Bracket Notation //
//--------------------------//

//Data from objects with Dot
console.log(obj.lastName);

//Data from objects with Bracket
console.log(obj["lastName"]);
//we can write expressions
const myName = "Name";
console.log(obj["first" + myName]);

//Get from the user
// const intrested = prompt(
//   "What do you want to know ? \nfirstName, lastName, age, job?"
// );

// if (obj[intrested]) {
//   console.log(obj[intrested]);
// } else {
//   console.log("Not correct input");
// }

//assignd

obj.lastName = "Susa";
console.log(obj.lastName);

//add anoter property
obj["dog"] = "Load";
console.log(obj);

//----------------//
// Object Methods //
//----------------//
console.log(obj.calcAge());

//insted of calc age all the time we can use 1 time calc property
console.log(obj.age);

console.log("//*********************//");
console.log("// Coding Challenge #3 //");
console.log("//*********************//");
// ********************//
// Coding Challenge #3 //
// ********************//

const BMI = (mass, height) => {
  return mass / height ** 2;
};

const Person1 = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
};
const Person2 = {
  firstName: "John",
  lastName: "Smith)",
  mass: 92,
  height: 1.95,
};

function calcBMI(person) {
  const calcBMI = BMI(person.mass, person.height);
  return calcBMI;
}

console.log(
  `John's BMI ${calcBMI(Person1)} is higher than Mark's ${calcBMI(Person2)}!"`
);
console.log("-------------------------------------------");

//-------------------------//
// Iteration: The for Loop //
//-------------------------//

//for loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Repetitation is ${rep} `);
}
let types = [];

//----------------------------------------//
//Looping Arrays, Breaking and Continuing //
//----------------------------------------//

//loop to arrays
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  //types[i] = typeof arr[i];
  types.push(typeof arr[i]);
}

console.log(types);

//continue
const cont = [1991, 2007, "Roi", 1331, "Susi"];
for (let i = 0; i < cont.length; i++) {
  if (typeof cont[i] !== "string") continue;
  console.log(cont[i]);
}
//break
for (let i = 0; i < cont.length; i++) {
  if (typeof cont[i] !== "number") break;
  console.log(cont[i]);
}

//--------------------------------------//
// Looping Backwards and Loops in Loops //
//--------------------------------------//

console.log("--------------loop backwards---------------------");
//looping 🔙
for (let i = cont.length - 1; i >= 0; i--) {
  console.log(cont[i]);
}

//loops in loops

for (let ex = 1; ex <= 3; ex++) {
  console.log("----This is ex number " + ex);
  for (let rep = 1; rep <= 5; rep++) {
    console.log("Logs number " + rep);
  }
}

//while loop
//this is for not knowing how many time this loop will 🏃 (run)
let index = 0;
while (index < 10) {
  console.log("I am index number: " + index);
  index++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
if (dice === 6) console.log(`Now you rolled ${dice} exiting...`);

while (dice !== 6) {
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Now you rolled ${dice} exiting...`);
}

//*********************//
// Coding Challenge #4 //
//*********************//

console.log("//*********************//");
console.log("// Coding Challenge #4 //");
console.log("//*********************//");

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const total = [];
for (let i = 0; i < bills2.length; i++) {
  total.push(calcTip(bills2[i]));
}
console.log(total);

const calcAverage2 = (arr) => {
  let avg = 0;
  arr.map((el) => {
    avg += el;
  });
  return avg / arr.length;
};

console.log(`Average is : ${calcAverage2(total)}`);
console.log("-------------------------------------------");
