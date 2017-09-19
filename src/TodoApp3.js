import React from 'react';
import TodoItem from './TodoItem';
import './TodoApp2.css';
class TodoApp2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content:"",
      todos:[]
    };
    this.saveTodo = this.saveTodo.bind(this);
    this.keyDown = this.keyDown.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  saveTodo(event){
    this.setState({content:event.target.value});
  }

  keyDown(event){
    var ENTER_KEY = 13;
    if(event.which === ENTER_KEY){
      this.setState({content:event.target.value});
    }
  }

  addTodo(){
    var todoArray = this.state.todos;
    todoArray.push(this.state.content);
    this.setState({todos:todoArray});
  }

  deleteTodo(index){
    var todoArray = this.state.todos;
    todoArray.splice(index,1);
    this.setState({todos:todoArray});
  }

  render(){
    const todoLis = this.state.todos.map((todoItem,index) => <TodoItem key={index} index={index} todo={todoItem} deleteTodo={this.deleteTodo} />);
    const todoList = (<ul id="todoList">{todoLis}</ul>);
    return (
      <div id="container">
        <div id="inputGroup">
          <input type='text' id='todoInput' placeholder='what is going to do?' onChange={this.saveTodo} onMouseLeave={this.saveTodo} onBlur={this.saveTodo} onKeyDown={this.keyDown}/>
          <button type="button" id='addTodoButton'  onClick={this.addTodo}>ADD</button>
        </div>
        <div id="todoListContainer">
          {todoList}
        </div>
      </div>
    );
  }

}


export default TodoApp2;
