// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician_name = ["David Blaine", "Lance Burton", "Shin Lim", "David Devant"];

function show_magicians(magician_name)
{
    console.log(magician_name);
}
function make_great(array)
{
    for(let i = 0; i < array.length; i++)
    {
        array[i] = " The Great " + array[i];
    }
    return array;
}
make_great(magician_name);
show_magicians(magician_name);
