// these variables are for the Module 2 mastery assessment
//          0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123    
var str1 = "Oscar has 5 kids and a beautiful wife named Stella. 4 of the children are twins and the other child is the oldest by 1 year.";
console.log(str1);
// variable for extracting the number 5 from the variable str1
var str2 = str1.slice(10, 11);
// console.log(str2);

// // variable for extracting the number 4 from the variable str1
var str3 = str1.slice(52, 53);
// console.log(str3);

// // variable for extracting the number 1 from the variable str1
var str4 = str1.slice(117, 118);
// console.log(str4);


//          0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567
var str5 = "The family has 6 relatives living in the San Antonio area, and 2 more relatives that live within 100 miles of the area.";
// console.log(str5);

// // variable for extracting & storing the number 6 from the variable str5 to var str6
var str6 = str5.slice(15, 16);
// console.log(str6);

// // variable for extracting & storing the number 2 from the variable str5 to var str7
var str7 = str5.slice(63, 64);
// console.log(str7);

// // variable for extracting & storing the number 100 from the variable str5 to var str8
var str8 = str5.slice(97, 100);
// console.log(str8);

// // variable for extracting & storing the number 10 from the variable str8 to var str9
var str9 = str8.slice(0, 2);
// console.log(str9);

// // variable for extracting & storing the number 0 from the variable str8 to var str10
var str10 = str8.slice(0, 2);
// console.log(str10);

//            01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678
 var str11 = "This summer they plan on traveling to El Paso to visit as many family members as possible.";

// Variables for changing a string to a number

// variable for changing the extracted number of 5 from first sentence str1
let num1 = parseInt(str2, 10);
console.log(num1);

// variable for changing the extracted number of 4 from first sentence str1
let num2 = parseInt(str3, 10);
console.log(num2);

// variable for changing the extracted number of 1 from first sentence str1
let num3 = parseInt(str4, 10);
console.log(num3);

// variable for changing the extracted number of 6 from second sentence str5
let num4= parseInt(str6, 10);
console.log(num4);

// variable for changing the extracted number of 2 from second sentence str5
let num5 = parseInt(str7, 10);
console.log(num5);

// variable for changing the extracted number of 10 from str8
let num6 = parseInt(str9, 10);
console.log(num6);

//  variable for adding the nums into a sumTotal
let sumTotal = num1 + num2 + num3 + num4 + num5 + num6;
console.log(sumTotal);

// variable for concatenating and displaying the sumTotal into a sentence
var storeSentence = "The variable sumTotal is storing ";
let concatSentence = storeSentence.concat(" ", sumTotal);
console.log(concatSentence);

// variable for extracting san Antonio from sentence "str5"
let sanAntonio = str5.slice(41, 52);
console.log(sanAntonio);


// /variable for changing str11 to display San Antonio instead of El Paso
let elToSan = str11.replace("El Paso", sanAntonio);
console.log(elToSan);

// while Loop created from numeric variables storing 1( num3) and 10(num6) to display "I saw # car(s) on my trip", 1-10 instances

// num3 = 1;
// num6 = 10;


while(num3 <= num6) {
    console.log("I saw " + num3 + " car(s) on my trip.");
    num3++;
}