var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Give Weg Wubs'
        },
        {
          id: 4,
          text: 'Hug Bastian'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    var todoArray = this.state.todos;
    todoArray.push({id: todoArray.length + 1, text: text});
    this.setState({todos: todoArray});
  },
  render: function() {
    var {todos} = this.state;
    return(
        <div>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
    );
  }
});

module.exports = TodoApp;
