/*
//-------------------------//
// -- Start of Section 2 --//
//-------------------------//

var firstName = 'Roi';
var lastName = 'Susi';
var age = 33;
var fullAge = true;
var job,isMarried;
console.log(firstName + ' ' + age);

job = 'Teacher';
isMarried = false;

console.log(firstName + " is a " + age + " years old " + job +". Is he maried? " + isMarried);

age = "Ten";
job = 'driver';

alert(firstName + " is a " + age + " years old " + job +". Is he maried? " + isMarried);


var lastName = prompt('What is his last Name');

console.log(firstName + " " + lastName);

// type of operatoer

console.log(typeof lastName);
*/


/*
var now =2018;
var yearjhon=1989
var fullAge = 18;

var isFUllAge = now -yearjhon >= fullAge;
console.log(isFUllAge);


console.log (fullAge);*/

//------------------//
// -- Challenge 1 --//
//------------------//

/*
var markHeight=1.69,johnHeight=1.95,markMass=78,johnMass=92;

var markBMI,johnBMI;
markBMI = markMass / Math.pow(markHeight,2);
johnBMI = johnMass / Math.pow(johnHeight,2);
var higherBMI = markBMI > johnBMI ;
console.log(markBMI,johnBMI);
console.log("is Mark's MBI higher ? " + higherBMI);
*/




//---------------//
// -- if else -- //
//---------------//


/*var firstname ='Roi';
var civilStatus ='Married';
var isMarried = true;

if (!isMarried){
    
    console.log(firstname + ' is Single');
    
}
else{
    console.log(firstname + ' is Maried');
}*/



//------------------//
// -- Challenge 2 --//
//------------------//


/*var johnAvg = (112+120+103)/3;
var mikeAvg = (116+94+123)/3;
var maryAvg = (97+134+105)/3;

var winner = johnAvg;

switch (true){
    case mikeAvg > johnAvg && mikeAvg > maryAvg :
        console.log('Mike is the Winner ' + mikeAvg);
        break;
    case maryAvg > johnAvg && maryAvg > mikeAvg :
        console.log('Mary is the Winner ' + maryAvg);
        break;
    case mikeAvg === johnAvg && johnAvg === maryAvg :
        console.log('all are Winnters Draw ' + maryAvg);
        break;
    case johnAvg === mikeAvg && johnAvg > maryAvg :
        console.log('Jonn and Mike are Winnters Draw ' + maryAvg);
        break;
    case mikeAvg === maryAvg && mikeAvg > johnAvg :
        console.log('Mary and Mike are Winnters Draw ' + maryAvg);
        break;
    case johnAvg === maryAvg && johnAvg > mikeAvg :
        console.log('Jonn and Mary are Winnters Draw ' + maryAvg);
        break;
    default:
        console.log('Jonn is the Winner ' + johnAvg);
        break;
        
}*/



//-----------------//
// -- Functions -- //
//-----------------//


/*
function calculateAge(birthYear){
    console.log(birthYear);
}

calculateAge(1999)
*/


//-------------------------------------------//
// -- Functions Statments and Expressions -- //
//-------------------------------------------//

/*


var whatDoYouDO = function (job,firstName){
    
    if (job === 22 )
        firstName = 'Young kid'
    else
        firstName = 'Roi susi;'
    
    return firstName;
}


console.log(whatDoYouDO(14,'Roi'));
*/

//--------------//
// -- Arrays -- //
//--------------//

/*

var names =['Roi' , 'Susi' , 'Hadar'];
var years = new Array(2020,1986,1989);


console.log(names.length);
console.log(years[0]);
years[2] = 3000;
console.log(years[2]);


// cas use puse - put element to the end
names.push('Susi2');
console.log(names);

// cas use unshift - put element to the beggning
names.unshift(123);
console.log(names);

// cas use pop - take element from the end
names.pop();
console.log(names);
// cas use pop - take element from the beggining
names.shift();
console.log(names);

// which positions is 'Susi' at == 1 , -1 for not found
console.log(names.indexOf('Susiw'));
*/



//------------------//
// -- Challenge 3 --//
//------------------//




// bills = new Array();
// finalBill = new Array();
// function calctip(bill){
//         bills.push(bill);
//     if (bill > 200){
//         return bill + bill*0.1;
//         }
        
//     if (bill < 200 && bill >50){
//         return bill + bill*0.1;
//         }
//     if (bill < 50){
//         return bill + bill*0.2;
//         }
// }



// finalBill.push(calctip(124));
// finalBill.push(calctip(48));
// finalBill.push(calctip(268));
// console.log(bills);
// console.log(finalBill);


//-----------------------------//
// -- Objects and properties --//
//-----------------------------//


// // Object Literal
// var john = {
//     firstName:'john',
//     lastName:'Smith',
//     birthYear: 1990,
//     family: ['Jane','Mark','Bob','Emily'],
//     job: 'techer',
//     isMarried: false
// };


// console.log(john.firstName,john.family[0],john['job']);

// var x='birthYear';

// john.birthYear = 1986;
// console.log(john[x]);


// // new Object Syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 2000;
// jane['lastName'] = 'Smith';
// console.log(jane);



//--------------------------//
// -- Objects and methods --//
//--------------------------//


// var john = {
//     firstName:'john',
//     lastName:'Smith',
//     birthYear: 1986,
//     family: ['Jane','Mark','Bob','Emily'],
//     job: 'techer',
//     isMarried: false,
//     calcAge: function(birthYear){
//         this.age = 2020 - this.birthYear;
//     }
// };

// john.calcAge();

// console.log(john);



//------------------//
// -- Challenge 4 --//
//------------------//



// var john = {
//     fullName:'John Smith',
//     mass: 92,
//     highet: 1.95,
//     calcBMI: function(){
//         return this.bmi = this.mass / (this.highet * this.highet );
//     }
// };

// var mike = {
//     fullName:'Mike Koka',
//     mass: 78,
//     highet: 1.69,
//     calcBMI: function(){
//         return this.bmi = this.mass / (this.highet * this.highet );
//     }
// };

// if (mike.calcBMI() == john.calcBMI())
//     console.log("Same BMI");

// if (mike.calcBMI() > john.calcBMI()){
//     console.log(mike);
// }
// else{
//     console.log(john);
// }

    


//------------//
// -- Loops --//
//------------//

 
// for (var i=0;i<10;i++){
//     console.log(i);
// }

// var john = ['john','Smith',1990,'Mapa'];

// for (var i=0 ; i < john.length;i++){
//     console.log(john[i]);
//     document.write("<br>");
//     document.writeln(john[i]);
    
// }
// document.write("<br>");
// var i=0;
// while (i< john.length){
//     console.log(john[i]);
//     document.write("<br>");
//     document.writeln(john[i]);
//     i++;
// }



//------------------//
// -- Challenge 5 --//
//------------------//

// var john = {
//     bills: [124,48,268,180,42],
//     finalTips:[],
// }


// finalBill = new Array();
// function calcTip(bill){
//     if (bill > 200){
//         return bill + bill*0.1;
//         }
        
//     if (bill < 200 && bill >50){
//         return bill + bill*0.15;
//         }
//     if (bill < 50){
//         return bill + bill*0.2;
//         }
// }


// for (var i=0 ; i < john.bills.length; i++){
//     finalBill.push(calcTip(john.bills[i]));
//     john.finalTips[i] = calcTip(john.bills[i]);
// }
// console.log(john.bills);
// console.log(finalBill);
// console.log(john);













