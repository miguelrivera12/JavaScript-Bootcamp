const todos  = [{
    text: 'Learn JavaScript',
    completed: true
    }, {
        text: 'Learn React',
        completed: false
    }, {
        text: 'Find a Job in Tech',
        completed: true
    }, {
        text: 'Pay my debts',
        completed: false
    }, {
        text: 'Get a tatoo',
        completed: true
    }
]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        const isCompleted = todo.completed
        return isCompleted === false
    })
}

const sortTodos = function (todos) {
    todos.sort(function (a) {
        if (!a.completed) {
            return -1
        } else if (a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortTodos(todos)
console.log(todos)

//console.log(getThingsToDo(todos))

// deleteTodo(todos, 'pay my debtsiu')
// console.log(todos)