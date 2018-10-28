import React, { Component } from 'react';
import Axios from 'axios';
import _ from 'lodash';

class TodoDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            todoData: {}
        }
    }


    componentDidMount() {
        console.log(this.props);
        const id = this.props.match.params.id;
        console.log(id);
        Axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                const {data} = response;
                console.log(data[`${id}`]);
                const todoObject =  data[`${id}`];
                // const {data} = response;
                if(!_.isEmpty(todoObject)) {
                    this.setState({ 
                        ...this.state,
                        isLoading: false,
                        todoData: todoObject
                    });
                }else {
                    this.setState({ 
                        ...this.state,
                        isLoading: false,
                        todoData: data['0']
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    handleGoBack = () => {
        this.props.history.goBack();
    }

    render() {
        // console.log(this.state.todoData);
        if(this.state.isLoading) {
            return <div>Loading...</div>
        }
        
        const { id, completed, title, userId } = this.state.todoData;
        console.log(this.state.todoData);

        return (
            <div>
                <p onClick={this.handleGoBack}>{id}</p>
                <p>{completed}</p>
                <p>{title}</p>
                <p>{userId}</p>
            </div>
        )
    }
}

export default TodoDetail;