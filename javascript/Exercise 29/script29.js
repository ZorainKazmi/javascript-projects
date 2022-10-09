// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!



const favourite_fruits = ["Mango", "Banana", "Orange"];

if(favourite_fruits.includes("Apple")){
    console.log(`You really like Apple!`);
}
if(favourite_fruits.includes("Banana")){
    console.log(`You really like Bananas!`);
}
if(favourite_fruits.includes("Mangoes")){
    console.log(`You really like Mangoes!`);
}
if(favourite_fruits.includes("Orange")){
    console.log(`You really like Oranges!`);
}
if(favourite_fruits.includes("Peach")){
    console.log(`You really like Peach!`);
}