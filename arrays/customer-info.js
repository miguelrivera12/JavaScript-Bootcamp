const customers = {
    name: [],
    phone: [],
    address: [],
    addName: function (name) {
        this.name.push(name)
    },
    addPhone: function (phone) {
        this.phone.push(phone)
    },
    addAddress: function (address) {
        this.address.push(address)
    },
    customerSummary: function () {
        return `${this.name} phone number is ${this.phone} and lives at ${this.address}`
    }
}


customers.addName('Miguel Rivera')
customers.addPhone('787.413.8300')
customers.addAddress('414 Benson Ave NE Apt 1123')
console.log(customers.customerSummary())

// Create an array with customer information,
// in customer it'll have name, phone (description, number),
// address (description, address -> string)