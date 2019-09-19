// Undefined for variable

let name

name = 'Miguel'

if (name == undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}


// Undefined for functions arguments
// Undefined as a function return default value
let square = function (num) {
    console.log(num)
}

let result = square()

console.log(result)

// Null as assigned value
let age = 29

age = null

console.log(age)