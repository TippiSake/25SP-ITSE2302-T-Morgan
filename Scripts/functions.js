// declaring variables
var firstName = "Tiffany";
var lastName = "Morgan-Hill";
var dob =  "1981";
var address = "421 JavaScript Lane, Sugar Land, TX, 77498";
var currentYear = "2024";



// Testing: call the displayName function
displayName();

// Testing: call the calculateAge function
let returnedAge = calculateAge(dob);
console.log("Age: " + returnedAge);

// Testing: call the weirdSentence function
weirdSentence(firstName, lastName, address);

// defining functions below

//  function created for a firstname and LastName
function displayName() {
    console.log(firstName + " " + lastName);
}

// function created for calculating a person's age, accepts a year as an argument and will substract the given year from the current year, and returns the difference
function calculateAge(birthYear) {
     age = currentYear - birthYear;
     return age;
}



// functions for displaying the sentence to include name, address, and age with a call back function for age
function weirdSentence(first, last, address) {
    let theAge = calculateAge(dob);
    console.log("My name is " + first + " " + last + ". I am " + theAge + " years old. I live at " + address + ". I'm Catwoman.");
}

// // function for accepting a first name, last name, and address with a callback function to display the age
// function displayDetails(  first, last, address) {
//      = "My name is " + first + " " + last + ",  I am " + address;
//     calculateAge();
//     console.log();
// }
// sentenceFunction(name1, name2, myAddress);

// practice functions with Morten videos for this module
// function findBiggestFraction(a, b) {
//     var result;
//     a>b ? result =["firstFraction", a] : result = ["secondFraction", b];
//         return result;
// }

// var firstFraction = 3/4;
// var secondFraction = 5/7;



// var fractionResult = findBiggestFraction(firstFraction, secondFraction);
// console.log(fractionResult);
// console.log("First fraction result: ", firstFraction);
// console.log("Second fraction result: ", secondFraction);
// console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");

// practice with Tony's instructional videos on functions

//1 name the function, name it after whatever task you are assigning it to, has parameters in ()
// function nameFunction(number1, number2) {
//     var sum = number1 * number2;
//     var value = "";

//    if(sum > 20) {
//     value = "The value is greater than 20";
//     return value;
//    } if (sum < 10) {
//     value = "The value is less than 20";
//     return value;
//    }
//    return value;
// }

// var num1 = 2;
// var num2 = 4;

// //2  function call, has arguments in the ()

// // catchesValue = functionCall
// // this caughtValue is made to catch the sum from the function or value, the sum /value from the function defined below is being stored in CaughtValue when you set it equal to and call the function.
// var caughtValue = nameFunction(num1, num2);
// // this Is where I can put the validation for empty inputs in the big mod 5 Mas Ass
// if (caughtValue == "" ) {
//     console.log("The value was less than 10, so the value never changed");
// }

// console.log(caughtValue);



// does the function accept arguments

// validates something script example


var num1 = 2;
var num2 = 4;

//2  function call, has arguments in the ()

// catchesValue = functionCall
// this caughtValue is made to catch the sum from the function, the sum /value from the function defined below is being stored in CaughtValue when you set it equal to and call the function.
var caughtValue = nameFunction(num1, num2);

// this Is where I can put the validation for empty inputs in the big mod 5 Mas Ass
if (caughtValue == "" ) {
    console.log("The value was less than 10, so the value never changed");
} else {
    console.log(caughtValue);
}

function anotherFunction(sumVal) {
    var value = "";
    if(sumVal > 10) {
    value = "The value is greater than 10";

   
   } else {
    value = "The value is less than 10";
   
   }
   return value;
}


function nameFunction(number1, number2) {
    var sum = number1 * number2;
    var catchVal = anotherFunction(sum);
    return catchVal;

}





// practice for mastery with Joe's videos, calling a function for collecting data and validating input

// document.getElementById(contact).addEventListener('submit', calculateTotal);

// function calculateTotal(event) {
//     event.preventDefault();
//     console.log("YOu submitted da form")
// }