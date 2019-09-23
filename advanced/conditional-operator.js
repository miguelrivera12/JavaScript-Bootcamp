// const myAge= 16
// const message = myAge >=18 ? 'You can vote!' : 'You cannot vote!'
// console.log(message)

const myAge = 20
const showPage = () => 'Showing the page'
const showErrorPage = () => 'Showing the error page'

const message = myAge >= 21 ? showPage() : showErrorPage()
console.log(message)

const team = ['Miguel', 'Gagriela']

const result = team.length <= 4 ? `Team size :${team.length}` : 'Too many people on your team'
console.log(result)
