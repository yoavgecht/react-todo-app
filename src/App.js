import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import EditTodo from './components/EditTodo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props) 
    this.checkValidation = this.checkValidation.bind(this);
    this.state={errors: {}};
  }

      checkValidation(todo) {
         let errors = {};
         let isValid = true;
       
         this.props.todos.forEach((singleTodo) => {
             if(todo.title === singleTodo.title && todo.content === singleTodo.content){
                   errors.title = "Todo already exists...";
                   isValid = false;
             }
         })

         if (typeof todo.title === 'string' && todo.title === '') {
            errors.title = "Title can't be empty";
            isValid = false
         }

         if(typeof todo.title === 'string' && todo.title.length < 2 && todo.title !== '') {
             errors.title = "Title must be more then 1 char";
             isValid = false
         }

         if (typeof todo.content === 'string' && todo.content === '') {
              errors.content = "Content can't be empty";
              isValid = false
         }

         if(typeof todo.content === 'string' && todo.content.length < 2 && todo.content !== '') {
             errors.content = "Content must be more then 1 char";
             isValid = false
         }

         this.setState({errors});
         return isValid;
    }



  render() {
    const { todos } = this.props;
    return (
      <div className="container">
        <Header />
        <BrowserRouter>
          <Switch>
              <Route exact path='/' render={(props) => <TodoList {...props} todos={todos} />} /> 
              <Route path='/newTodo' render={(props) => <NewTodo {...props} checkValidation={this.checkValidation} errors={this.state.errors}/> } />
              <Route path='/editTodo/:id' render={(props) => <EditTodo {...props} checkValidation={this.checkValidation} errors={this.state.errors}/>} />
          </Switch>
         </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(App);
