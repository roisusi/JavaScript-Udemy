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




bills = new Array();
finalBill = new Array();
function calctip(bill){
        bills.push(bill);
    if (bill > 200){
        return bill + bill*0.1;
        }
        
    if (bill < 200 && bill >50){
        return bill + bill*0.1;
        }
    if (bill < 50){
        return bill + bill*0.2;
        }
}



finalBill.push(calctip(124));
finalBill.push(calctip(48));
finalBill.push(calctip(268));
console.log(bills);
console.log(finalBill);





















