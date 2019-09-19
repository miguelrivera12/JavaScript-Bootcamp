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

const filters = {
    searchText: '',
    hideCompleted: false
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const filterCompleted = todos.filter(function(todo) {
        return todo.text.includes(filters.hideCompleted)
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    const completedTodos = filterCompleted.filter(function (todo) {
        return todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h3')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const list = document.createElement('p')
        list.textContent = todo.text
        document.querySelector('#todos').appendChild(list)
    })

    // incompleteTodos.forEach(function (todo) {
    //     const list = document.createElement('p')
    //     list.textContent = todo.text
    //     document.querySelector('#todos').appendChild(list)
    // })

}

renderTodos (todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
    
})

document.querySelector('#add-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    const newTodo = e.target.elements.addTodo.value
    const addingTodo = document.createElement('p')
    addingTodo.textContent = todos.push({
        text: newTodo, 
        completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.addTodo.value = ''
})

document.querySelector('#on-off').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    console.log(filters.hideCompleted)
})


// 1. Create a checkbox and setup event listener -> "Hide completed" => DONE
// 2. Create new hideCompleted filter (default false) => DONE
// 3. Update hideCompleted and render list on checkbox change =>
// 4. Setup renderTools to remove completed items => 