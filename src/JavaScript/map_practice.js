const myArray = [1, 2, 3, 4, 5, 6, 7]

// Function that prints an array of doubles
let arrayOfDoubles = myArray.map(number => number * 2)

console.log(arrayOfDoubles)

// Function that creates an array with objets with the key "number" and the corresponding string of the number as a value
let arrayOfObjects = myArray.map(number => ({ "number": number.toString() }))

console.log(arrayOfObjects)

// Function that prints an array of li elements with the number as the inher html
let arrayOfListItems = myArray.map(number => `<li>${number}<li/>`)

console.log(arrayOfListItems)
