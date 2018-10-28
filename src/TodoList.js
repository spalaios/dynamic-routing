import React from 'react';
import _ from 'lodash';



function handleTodoClick(value) {
    // console.log(value);
    // console.log('todo item clicked...');
    // this.history.push(`/todo/${value}`);
}

const TodoList = ({data, handleTodoItemClick}) => {

    function renderTodoList(todosArray) {
        return _.map(todosArray, (todoObject) => {
            return (
                <div key={todoObject.id} id={todoObject.id} className="todo-list" onClick={() => handleTodoItemClick(todoObject.id-1)}>
                    <p className="todo-item">{todoObject.title}</p>
                </div>
            )
        })
    }


    return ( 
            <div>
                {renderTodoList(data)}
            </div>
        );
}
 
export default TodoList;