// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


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



