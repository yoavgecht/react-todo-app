import React from 'react';
import Todo from './Todo';
import AddNewTodo from './AddNewTodo';

const TodoList = ({todos}) => {
    const allTodos = todos.length > 0 ? (todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />
    })) : (<div>No todos yet...</div>)
    return (
        <div className="form-group">
            {allTodos}
            <AddNewTodo />
        </div>
    )
}

export default TodoList;

