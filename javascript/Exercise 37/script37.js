// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.




function make_shirt(size = "large", message = "I love javascript.")
{
    console.log(`Size of shirt is:${size}, and message displaying  is: ${message}`);
}

make_shirt(); 
make_shirt("medium"); 
make_shirt("small", "This Is actual Metaverse");
