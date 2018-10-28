import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import Todolist from './TodoList';
import TodoGrid from './TodoGrid';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todosList : [],
        }
    }

    componentDidMount() {
        console.log(this.props);
        Axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                console.log(response);
                const {data} = response;
                this.setState({ 
                    todosList: data
                });
            })
            .catch((error) => {
                console.log(error);
            })

    }

    handleTodoItemClick = (value) => {
        console.log('logging from parent todo ');
        console.log(value);
        this.props.history.push(`/todo/${value}`);
    }

    render() {
        return this.props.render(this.state.todosList, this.handleTodoItemClick)
    }
}

export default Todos;