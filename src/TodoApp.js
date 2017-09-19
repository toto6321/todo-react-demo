import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import './TodoList.css';

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos:[]
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(content){
    var todoArray = this.state.todos;
    todoArray.push(content);
    this.setState({todos:todoArray});
  }

  render(){
    const todos = this.state.todos;
    return (
      <div>
        <TodoInput add={this.addTodo}/>
        <TodoList todos={todos}/>
      </div>
    );
  }
}


export default TodoApp;
