// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


let people = ["Zia khan", "Imran khan", "Sami khan"];

console.log(`Hello, ${people[0]} I am inviting you to dinner. `);
console.log(`Hello, ${people[1]} I am inviting you to dinner. `);
console.log(`Hello, ${people[2]} I am inviting you to dinner. `);
console.log('');
console.log(`${people[1]} could'nt join us `);
console.log('');

people.splice(1, 1, "Daniyal");
console.log(`Hello, ${people[0]} I am inviting you to dinner. `);
console.log(`Hello, ${people[1]} I am inviting you to dinner. `);
console.log(`Hello, ${people[2]} I am inviting you to dinner. `);


people.unshift("Zain"); 
people.splice(1, 0, "Zorain"); 
people.push("Ali"); 

console.log('');
console.log('New Table New People.');

console.log(`Hello, ${people[0]} I am inviting you to dinner. `);
console.log(`Hello, ${people[1]} I am inviting you to dinner. `);
console.log(`Hello, ${people[2]} I am inviting you to dinner. `);
console.log(`Hello, ${people[3]} I am inviting you to dinner. `);
console.log(`Hello, ${people[4]} I am inviting you to dinner. `);
console.log(`Hello, ${people[5]} I am inviting you to dinner. `);


console.log('');
console.log("I can only invite 2 people for dinner.");
console.log('');

let people1 = people.pop();
let people2 = people.pop();
let people3 = people.pop();
let people4 = people.pop();
console.log(`${people1}, sorry  can't invite you .`);
console.log(`${people2}, sorry  can't invite you .`);
console.log(`${people3}, sorry  can't invite you o the dinner.`);
console.log(`${people4}, sorry  can't invite you `);

console.log(people);
console.log(`${people[0]}, you are still invited`);
console.log(`${people[1]}, you are still invited`);

people.pop();
people.pop();
console.log(people);
