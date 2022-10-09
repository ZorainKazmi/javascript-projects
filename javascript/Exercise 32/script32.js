// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



let current_user = ["ali12", "Zain15", "Bisma_Ashraf", "Amna34", "Zorain19"];
let new_users = ["Ali77", "ali12", "Zain15", "Ahmad.m", "Zara22"];
for(let i = 0; i < new_users.length; i++){
  for(let j = 0; j < current_user.length; j++){
    if(new_users[i].includes(current_user[j])){
      console.log(`Username ${new_users[i]} is not available. Person need to enter new username`);
    }
  }
}