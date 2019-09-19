// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()


let square = function (num) {
    let result = num * num
    return result

}

let value = square(3)
let otherValue = square(10)
console.log(value)
console.log(otherValue)


// Challenge Area

//Function called convertFahrenheitToCelsius
let convertFahrenheitToCelsius = function (num) {
    let result = (num - 32) * 5/9
    return result
}

//Call a couple of times (32 => 0) (68 => 20)
let firstResult = convertFahrenheitToCelsius(32)
let secondResult = convertFahrenheitToCelsius(68)

//print the converted values
console.log(firstResult)
console.log(secondResult)