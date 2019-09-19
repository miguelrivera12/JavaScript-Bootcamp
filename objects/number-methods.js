let num = 10.845

console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))


// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
// console.log(randomNum)


// CHALLENGE AREA

// Guessing game - Guess the number between 1 and 5
// Return true if guess ir right, false if is not.

let min = 1
let max = 5

let randomNum = Math.floor(Math.random() * (max - min +1)) + min
console.log(randomNum)

let makeGuess = function (number) {
    if (number === randomNum) {
    return true
    } else {
        return false
    }
}



console.log(makeGuess(3))