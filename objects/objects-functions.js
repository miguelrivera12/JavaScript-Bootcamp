let myBook = {
    title: '1984',
    author: 'Geroge Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge Area

//Create funciton - take fahrenheit in - return object with all three

let tempCalculator = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    let kelvin = (celsius) + 273.15

    return {
        tempFahrenheit: `It is ${fahrenheit}*F, ${celsius}*C, and ${kelvin}K.`,
    }
}

let temperatures = tempCalculator(32)

console.log(temperatures.tempFahrenheit)