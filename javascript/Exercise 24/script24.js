// // More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// example1:
let no = "20";

if(no === 20){
    console.log(`Tests for equality with strings is "true"`);
}else{
    console.log(`Tests for equality with strings is "false"`);
}

//Example 2:
let a = "4";
let b = "8";

if (a !== b){
    console.log(`Tests for inequality with strings is "true"`);
}else{
    console.log(`Tests for inequality with strings is "false"`);
}

//Example 3
let nun = "new user";

if( num === "New User"){
    console.log(`Strings are equals`);
}else{
    console.log(`Strings are not equal`);
}

//Example 4:
let num1 = 16;
let num2 = 16;

if (num1 === num2){
    console.log(`Numbers are equal`);
}else{
    console.log(`Numbers are not equal`);
}

//Example 5:
let num3 = 23;
let num4 = 25;

if (num3 === num4){
    console.log(`Numbers are equal`);
}else{
    console.log(`Numbers are not equal`);
}

//Example 6:
if(num4 > num3){
    console.log(`${num4} is greater than ${num3}`);
}else{
    console.log(`${num4} is not greater than ${num3} `);
}

//Example 7:
if(num3 < num4){
    console.log(`${num3} is less than ${num4}`);
}else{
    console.log(`${num3} is not less than ${num4}`);
}

//Example 8:
if(num3 <= num4){
    console.log(`${num3} is less than and equal to ${num4}`);
}else{
    console.log(`${num3} is not less than and equal to ${num4}`);
}

//Example 9:
if(num1 >= num2){
    console.log(`${num1} is greater than and equal to ${num2}`);
}else{
    console.log(`${num1} is not greater than and equal to ${num2}`);
}


//Example 10:

if(num1 == num2 && num3 < num4){
    console.log(`Conditions are True for an AND operator.`);
}else{
    console.log(`Conditions are not True for an AND operator.`);
}

//Example 11:

if(num1 != num2 && num3 < num4){
    console.log(`Conditions are True for an AND operator.`);
}else{
    console.log(`Conditions are not True for an AND operator.`);
}

//Example 12: 
if(num1 != num2 || num3 < num4){
    console.log(`Any one condition is True for an OR operator.`);
}else{
    console.log(`No condition is True for an OR operator.`);
}

//Example 13:
if(num1 != num2 || num3 > num4){
    console.log(`Any one condition is True for an OR operator.`);
}else{
    console.log(`No condition is True for an OR operator.`);
}

//Example 14:

let arr = ["zeee", "Zek", "zk"];

if (arr.includes("Zek")){
    console.log(`true`);
}else{
    console.log(`false`);
}

//Example 15:

let arr2 = ["zeee", "Zek", "zk"];

if (arr.includes("Bil")){
    console.log(`Correct`);
}else{
    console.log(`not correct`);
}


// --------------------------------------------------------------------