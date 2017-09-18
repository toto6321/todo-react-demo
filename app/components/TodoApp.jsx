var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Give Weg Wubs'
        },
        {
          id: uuid(),
          text: 'Hug Bastian'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    var todoArray = this.state.todos;
    todoArray.push({id: uuid(), text: text});
    this.setState({todos: todoArray});
  },
  handleSearch: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowercase()
    });
  },
  render: function() {
    var {todos} = this.state;
    return(
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
    );
  }
});

module.exports = TodoApp;
