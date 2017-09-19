import React from 'react';
import './TodoList.css';

class TodoList extends React.Component{
  render(){
    const todoLis = this.props.todos.map((todo) => <li key={todo.toString()}>{todo}</li>);
    const todoList = (<ul id="todoList">{todoLis}</ul>);
    return (
      <div class="todoListContainer">
        {todoList}
      </div>
  );
  }
};

export default TodoList;
