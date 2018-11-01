import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class NewTodo extends Component {
     constructor(props) {
        super(props);
        this.state = {
            todo: {
                title: '', 
                content: '', 
                id: 0
            },
            errors: {}
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({errors: nextProps.errors})
    }

    handleInputChange = (e) => {
        let inputValue = e.target.value;
        let id = Math.floor(Math.random() * 100);
        let key = [e.target.name];
        if(this.state.errors[e.target.name]) {
            var errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
            this.setState(prevState => ({
                todo:{
                    ...prevState.todo,
                    [key] : inputValue,
                    id
                },
                errors
            }))

        } else {
            this.setState(prevState => ({
                todo:{
                    ...prevState.todo,
                    [key] : inputValue,
                    id
                }
            }))
        }
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.checkValidation(this.state.todo)){
            this.props.addTodo(this.state.todo);
            this.setState({todo:{title: '', content: ''}});
            this.props.history.push('/');
        }
    }

    render() {
        return (
        <div className="row">
            <div className="col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Todo Title:</label>
                        <input type="text" id="title" name="title" className="form-control" value={this.state.todo.title} onChange={this.handleInputChange}/>
                         {this.state.errors.title && <div className="alert alert-danger" role="alert">
                           {this.state.errors.title}
                        </div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Todo content:</label>
                         <textarea className="form-control" id="content" name="content" value={this.state.todo.content} onChange={this.handleInputChange}></textarea>
                         {this.state.errors.content && <div className="alert alert-danger" role="alert">{this.state.errors.content}
                    </div>}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => {dispatch(addTodo(todo))}
  }
}


export default connect(null, mapDispatchToProps)(NewTodo);