let js = "amazing";
//if (js === "amazing") alert("This is my first JS");
console.log(48 - 10 + 5 - 4 * 6);

//---------------------//
//Values and Variables //
//---------------------//
let firstName = "Roi";
console.log(firstName);
console.log(typeof firstName);

//------------//
// Data Types //
//------------//

/*
Number, String, Boolean, Undefined, null, Symbol, BigInt
Symbol - Uniqe and cannot be change
BigInt - Larger integers numbers.
JS has Dynamic typing which we dont need to specipy the Type
Variable can be String once and then integer, but is isnt recommanded 
*/

let isFun = false;
console.log(isFun);
console.log(typeof isFun); //boolean

//Now let show Dynamic Typing
isFun = 21;
console.log(isFun);
console.log(typeof isFun); // now it is number

//some undefine
isFun = undefined;
console.log(typeof isFun); //undefine

//some null
isFun = null;
console.log(typeof isFun); //not an object!!! this is a null

//------------------//
// let,const VS var //
//------------------//

//let - reassign variables - function scope
let age;
age = 30;
console.log(age);

//const - one assgin once and then never again

const myAge = 40; //must be assign on declaration
//myAge = 30; //error
console.log(myAge);

//var is global scope - never use it
var myOnlyAge = 35;
console.log(myOnlyAge);

//------------//
// Operations //
//------------//

console.log(2 * 6, 2 ** 4); //6*2=12 , 2^4=16
let x;
x = 10;
x += 5;
console.log(x); //15

console.log(++x); //16
x++;
console.log(x); //17

console.log(x == 17); //true
console.log(x == "17"); //true
console.log(x === "17"); //false - because 17 string isnt a 17 number
console.log(x === 17); //true

//Operator precedence

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence?retiredLocale=he

//Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

let MarkH = 1.69;
let JhonH = 1.95;
let MarkW = 78;
let JhonW = 92;
console.log(MarkW / MarkH ** 2);
console.log(JhonW / JhonH ** 2);

markHigherBMI = MarkW / MarkH ** 2 > JhonW / JhonH ** 2;
console.log(markHigherBMI);

MarkW = 95;
JhonW = 85;
MarkH = 1.88;
JhonH = 1.76;

console.log(MarkW / MarkH ** 2);
console.log(JhonW / JhonH ** 2);
markHigherBMI = MarkW / MarkH ** 2 > JhonW / JhonH ** 2;
console.log(markHigherBMI);

//---------//
// Strings //
//---------//

//string literals
const literalString = `I'm ${firstName}, a nice looking guy`;
console.log(literalString);
console.log(`this is looks as i print it
i just moved line down`);

//-----------//
// if - else //
//-----------//

age = 8;
const isOld = age >= 18;
console.log(isOld);
//or

if (isOld) {
  console.log(`You are old 😎`);
} else {
  console.log(`You are young 🤷‍♀️`);
}

// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK �

if (markHigherBMI) {
  console.log(
    `Mark's BMI (${MarkW / MarkH ** 2}) is higher than John's (${
      JhonW / JhonH ** 2
    })! `
  );
} else {
  console.log(
    `John's's BMI (${JhonW / JhonH ** 2}) is higher than Mike's (${
      MarkW / MarkH ** 2
    })! `
  );
}

//----------------------------//
//Type Conversion and Coercion//
//----------------------------//

//Conversion
const inputYear = "1991"; //string
console.log(inputYear + 18); //199118
console.log(Number(inputYear) + 18); //2009 - i convert it to number but inputYear is still a String

console.log(String(23), 23); // convert to string

//Coercion
