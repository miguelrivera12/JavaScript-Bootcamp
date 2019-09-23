const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))


const people = [{
    name: 'Miguel',
    age: 29
}, {
    name: 'Gabriela',
    age: 28
}, {
    name: 'Diego',
    age: 6
}]

const under20 = people.filter((person) => person.age < 20)

console.log(under20)

const has29 = people.filter((person) => person.age === 29)

console.log(has29)

// 1. Find the person with age 29
// 2. Print that persons name