// for this assignmemt I am working with user inputs. Here are the variables used to store user input:
 var num1 = window.prompt("Enter a number between 1-10");

//   code for translating the users numbers they input into a number with the parseInt function
 num1 = parseInt(num1);

 
//  while statement to run as long as the num1 is less than zero, larger than ten, is not a number character, or is zero
 while (num1 < 0 || num1 > 10 || num1 ==="" || isNaN(num1) || num1 === 0) {
    alert("Sorry, you must enter a number between 1 and 10. Please try again.")
    num1 = window.prompt("Enter a number between 1 - 10: ");
}

// variable declared for num2 used to store user input
 var num2 = window.prompt("Enter a number between 10-20");


//   code for translating the users numbers they input into a number with the parseInt function
num2 = parseInt(num2);


//  while statement to run as long as the num2 is less than ten, larger than twenty, is not a number character, or is zero
while (num2 < 10|| num2> 20 || num2 ==="" || isNaN(num2) || num2 === 0) {
    alert("Sorry, you must enter a number between 10 and 20. Please try again.")
    num2 = window.prompt("Enter a number between 10 - 20: ");
}

// variable for declaring a new number from the multiplication of num1 by num2, then prints to console the new number
var num3 = num1 * num2;
console.log(num3);

// if statement for deciding if the num3 is even or odd and printing  even or odd to the console
    if (num3 % 2 == 0) {
        console.log("even");
}      else {
    console.log("odd");
}
