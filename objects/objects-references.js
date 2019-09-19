let myAccount = {
    name: 'Miguel Rivera',
    expenses: 0,
    income: 0
}


let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

//CHALLENGE AREA

// addIncome
let addIncome = function (account, income) {
    account.income = account.income + income
}


// resetAccount
let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

// getAccountSummary
// output: Account for Miguel has $900, $1000 in income. $100 in expenses.
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses

    return `Account for ${account.name} has $${balance}, $${account.income}. $${account.expenses}.`
}

//addIncome of $1,000
addIncome(myAccount, 1000)

//addExpense of $50
addExpense(myAccount, 50)

//addExpense of $50
addExpense(myAccount, 50)

//getAccountSummary of myAccount
console.log(getAccountSummary(myAccount))

//resetAccount - myAccount
resetAccount(myAccount)

//getAccountSummary of myAccount
console.log(getAccountSummary(myAccount))