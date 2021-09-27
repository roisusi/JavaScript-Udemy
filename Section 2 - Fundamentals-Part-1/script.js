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

//------------//
// let VS var //
//------------//
