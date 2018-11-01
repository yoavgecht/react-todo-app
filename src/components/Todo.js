import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoActions';

const Todo = ({ todo, handleDelete, handleEdit, deleteTodo }) => {
    handleDelete = (id) => {
        deleteTodo(id);
    }
    return (
        <div className="list-group-item text-center">
            <h5>{todo.title}</h5>
            <p>{todo.content}</p>
            <span className="fa fa-trash" onClick={(e) => handleDelete(todo.id)}></span>
            <Link to={{pathname:`/editTodo/${todo.id}`, state: {title: todo.title, content:todo.content, id:todo.id}}}><span className="fa fa-edit"></span></Link>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => { dispatch(deleteTodo(id))}
  }
}

export default connect(null, mapDispatchToProps)(Todo);