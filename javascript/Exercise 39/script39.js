// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.


function city_country(city, country)
{
    let str = city + ","+ country;
    return str;
}

console.log(city_country("Basel", " Switzerland"));
console.log(city_country("Capr town", " South Africa"));
console.log(city_country("Rome", " Italy"));