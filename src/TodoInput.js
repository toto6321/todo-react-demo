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
      <div>
          <input type='text' class='todoInput' onChange={this.show}/>
          <button type="submit" class='button' id='submitButton' onClick={this.saveTodo}>SUBMIT</button>
      </div>
    );
  }
}

export default TodoInput;
