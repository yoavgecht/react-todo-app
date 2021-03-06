const initState = {
    todos: [
        { id: 1, title: 'Test todo', content: 'Just a test todo'},
      ]
    }

const todosReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_TODO':
        const todos = state.filter((todo) => {
            return todo.id !== action.id
        });

        return todos
        
        case 'ADD_TODO':
        return [
            ...state, action.todo
        ]

        case 'EDIT_TODO':
        const newTodos = [...state];
        const index = newTodos.findIndex((todo) => {
            return action.editedTodo.id === todo.id
        })
        newTodos[index].title = action.editedTodo.title;
        newTodos[index].content = action.editedTodo.content;
        return newTodos;
    }
    return state.todos;
}

export default todosReducer;