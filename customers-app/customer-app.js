const customer = [{
    name: 'Miguel Rivera',
    phone: '787.222.3435',
    address: '213 Mars Ave Apt 23'
    },
    {
    name: 'Gabriela Rivera',
    phone: '787.444.3435',
    address: '213 Mars Ave Apt 23'
}]

const customerName = customer.filter(function (customers) {
    return customers.name
})

const names = document.createElement('h3')

names.textContent = `You have ${customerName.length} customers`
document.querySelector('body').appendChild(names)

customer.forEach(function (name) {
    const customerNames = document.createElement('h4')
    const customerPhone = document.createElement('p')
    const customerAddress = document.createElement('p')
    customerNames.textContent = name.name
    customerPhone.textContent = name.phone
    customerAddress.textContent = name.address
    document.querySelector('body').appendChild(customerNames)
    document.querySelector('body').appendChild(customerPhone)
    document.querySelector('body').appendChild(customerAddress)
})

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)