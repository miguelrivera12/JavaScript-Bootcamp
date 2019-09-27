// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName =  firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        return `${this.fullName} is a ${this.position}.`
        // Miguel is a Retiree
    }

    getYearsLeft() {
        return 65 - this.age
    }
}

class Students extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        if (this.grade >= 70){
            return `${this.firstName} is PASSING the class.`
        } else {
            return `${this.firstName} is FAILING the class.`
        }
    }
    updateGrade(amount) {
        this.grade += amount
        return this.grade
    }
}

const me = new Employee('Miguel', 'Rivera', 29, 'Retiree', [])
me.fullName = 'Gaby Rive'
console.log(me.getBio())
