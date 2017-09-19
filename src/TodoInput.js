import React from 'react'
import './TodoInput.css'


class TodoInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo:""
    };
    //to bind event listener
    this.show = this.show.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
  }

  saveTodo(){
    this.props.add(this.state.todo);
  }

  show(event){
    this.setState({todo:event.target.value});
  }

  render(){
    return (
      <div id="inputGroup">
        <input type='text' id='todoInput' placeholder='what is going to do?' onChange={this.saveTodo} onMouseLeave={this.saveTodo} onBlur={this.saveTodo} onKeyDown={this.keyDown}/>
        <button type="button" id='addTodoButton'  onClick={this.addTodo}>ADD</button>
      </div>
    );
  }
}

export default TodoInput;
