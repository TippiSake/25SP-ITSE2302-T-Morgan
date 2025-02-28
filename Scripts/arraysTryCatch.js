//  Arrays declaration
let siteTopics = ["Healthcare", "Finance", "Housing", "Education", "Government"];

let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let myName = ["Tiffany"];

let greatYear = [1981];

// I used the push() method to add the topic "Socials" to the sitetopics array, and named the new array newTopics
let newTopics = siteTopics.push("Socials");
console.log("The siteTopics array now contains " + newTopics + " items.");

// I used concatenation and the length method to display the following message and the length of the array
console.log("The length of the siteTopics array is " + siteTopics.length);

// I used a while loop to print out each index item to the console
let t = 0;

do {
    console.log(siteTopics[t]);
    t++;
}  while (t< siteTopics.length);
    console.log("");

// I used the reverse method to reverse the dayNames array
// let dayNames2 = 
dayNames.reverse();
console.log("The new order of days is: " + dayNames);

// I used a for loop to print out the DayNames to the console 
for (index in dayNames) {
    console.log(dayNames[index]);
}
console.log("");

// Removing the first item in the dayNames array with the shift method
let missingDay = dayNames.shift();
console.log("The dayNames array is missing " + missingDay);
console.log("The dayNames array is missing a day: " + dayNames);

// I used a try/throw/catch/finally statement to check if the first value in the dayNames array was Sunday, it should not be, and if that was true, it would throw and error message and print the error to the console. I also added a finally statement to utilize the variables I created earlier for my name and my birth year and printed the statement to the console
try {
    if(dayNames[0] == "Sunday") {
        throw "Error: Sunday should be missing!";
    }
}   catch (error) {
    console.log(error);
}
finally {
    console.log(myName + " was born in the year " + greatYear + ". I think the day was either a " + dayNames[1] + " or " + dayNames[3] + ". April 1st was definitely a " + dayNames[3] + " that year!");

}