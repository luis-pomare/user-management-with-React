// Users' array of objects to practice high order array methods
const users = [
  { id: 1, name: "Ana", active: true },
  { id: 2, name: "Luis", active: false },
  { id: 3, name: "Maria", active: true }
];

// Create a new array only with the names of the users
let names = users.map(user => user.name)

console.log(names)

// Create a new array of objects with only the active users

// Return the second object with the active property toggled without mutating the original "users"

// Return one number that tells the amount of active users
