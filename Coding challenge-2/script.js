/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/
const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;
let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);
console.log("Mark's BMI:", markBmi);
console.log("John's BMI:", johnBmi);
let markHasHigherBMI = markBmi > johnBmi;
if(markHasHigherBMI)
    console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
else
    console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);