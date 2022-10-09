// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.



let magician_name = ["David Blaine", "Lance Burton", "Shin Lim", "David Devant"];
let magician_name_copy = [];

function show_magicians(array)
{
    console.log(array);
}
function make_great(magician_name)
{
    for(let i = 0; i < magician_name.length; i++)
    {
        magician_name_copy.push("The Great "+magician_name[i]); 
    }
    return magician_name_copy;
}

make_great(magician_name);
show_magicians("Original Array: "+magician_name);
show_magicians("Copy Array: "+magician_name_copy);