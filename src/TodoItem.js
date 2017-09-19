import React from 'react'

class TodoItem extends React.Component{
  render(){
    return <li className='todo' key={this.props.index}><span>{this.props.todo}</span><button className="operations" onClick={()=>this.props.deleteTodo(this.props.index)}>DELETE</button></li>
  }
}

export default TodoItem;
