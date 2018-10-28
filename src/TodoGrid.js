import React from 'react';
import _ from 'lodash';

function renderTodoList(todosArray) {
    return _.map(todosArray, (todoObject) => {
        return (
            <div key={todoObject.id} id={todoObject.id} className="todo-list" style={{maxWidth: 'fit-content', border: '1px solid #e15253', padding: '8px 12px', margin: '0 auto'}}>
                <p className="todo-item">{todoObject.title}</p>
            </div>
        )
    })
}



const TodoGrid = ({data}) => {
    return ( 
            <div>
                {renderTodoList(data)}
            </div>
        );
}
 
export default TodoGrid;