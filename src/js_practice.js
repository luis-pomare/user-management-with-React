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
let activeUsers = users.filter((user) => {
  return user.active
})

console.log(activeUsers)

// Return the second object with the active property toggled without mutating the original "users"
let toggledUser = users.map((user) => {
  return user.id === 2
    ? { ...user, active: !user.active }
    : user
})

console.log(toggledUser)

// Return one number that tells the amount of active users
let amountOfActive = users.reduce((acummulator, user) => {
  if (user.active) {
    return acummulator + 1
  } else {
    return acummulator
  }
}, 0)

console.log(amountOfActive)

// Return a new array absed on the users one but removing the element with the ID of 2

let usersWithoutTwo = users.filter(user => user.id != 2)

console.log(usersWithoutTwo)
