// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.



function car_info(manyfacturer, model_namee, ...arguments)
{
    let car = {
        car_manyfacturer: manyfacturer,
        car_model:model_namee,
        color: arguments,
    }
    return car
}

console.log(car_info("Porsche", "911", ["Black", "Red"]));
console.log(car_info("McLaren", "720S", ["Black", "Red", "Yellow"]));
console.log(car_info("Ford",  "Mustang",["Black", "Blue", "Red"]));


