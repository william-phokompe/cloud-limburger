import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [{
      id: 1,
      title: 'Take out trash',
      completed: false
    }, {
      id: 2,
      title: 'Dinner',
      completed: false
    }, {
      id: 3,
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
    this.setState({ todo: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos } markComplete={this.markComplete} delteItem={ this.deleteItem }/>
      </div>
    );
  }
}

export default App;
