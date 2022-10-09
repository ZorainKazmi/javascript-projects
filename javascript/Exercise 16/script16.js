// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.





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