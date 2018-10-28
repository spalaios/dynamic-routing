import React, { Component } from 'react';
import './App.css';
import Todos from './Todos';
import TodoGrid from './TodoGrid';
import TodoList from './TodoList';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TodoDetail from './History';
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/todo/:id" component={TodoDetail} />
          <Route path="/todo"  component={(data) => <Todos {...data}  render={(todoData, handleTodoItemClick) => <TodoList data={todoData} handleTodoItemClick={handleTodoItemClick}/>} />} />
        </Switch>
      </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
