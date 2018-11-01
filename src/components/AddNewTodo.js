import React from 'react';
import { Link } from 'react-router-dom'

const AddNewTodo = () => {
    return (
       <Link to='/newTodo'><button className="btn btn-primary">Add New Todo</button></Link>
    );
}

export default AddNewTodo;