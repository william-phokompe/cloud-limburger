import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import { AddTodo } from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [{
      id: uuid.v4(),
      title: 'Take out trash',
      completed: false
    }, {
      id: uuid.v4(),
      title: 'Dinner',
      completed: false
    }, {
      id: uuid.v4(),
      title: 'Meeting',
      completed: false
    }]
  };

  // Toggle complete
  markComplete = (id) => {
    this.setState({ todo: this.state.todos.map((todo) => {
        if (todo.id === id)
          todo.completed = !todo.completed;
        return todo;
      }) 
    });
  }

  // Detele item
  deleteItem = (id) => {
    // Dealing with todos
    // Copying everything that's there and use the spread operator [...]
    // 
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos } 
              markComplete={this.markComplete} 
              delteItem={ this.deleteItem }/>
        </div>
      </div>
    );
  }
}

export default App;