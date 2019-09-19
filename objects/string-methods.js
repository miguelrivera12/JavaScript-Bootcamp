let name = ' Miguel Rivera '

// Lenght Property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Inclides method
let password = 'abc123098'
console.log(password.includes('password'))

// Trim
console.log(name.trim())


// CHALLENGE AREA

// isValidPassword 
// only return true if the lenght is more than 8 - 
//and it doesn't contain the word password
let isValidPassword = function (password) {
    passLenght = password.length
    passInclusion = password.includes('password')

    if (passLenght <= 8) {
        return `Your password is too short.`
    }
    else if (passInclusion === true) {
        return `You need a stronger password.`
    }
    else {
        return `Your password has been accepted`
    }

}


console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%'))
console.log(isValidPassword('asdfpasdfpoipassword'))