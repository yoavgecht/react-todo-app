export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        todo
    }    
}

export const editTodo = (todo) => {
    return {
        type: 'EDIT_TODO',
        editedTodo: todo 
    }    
}