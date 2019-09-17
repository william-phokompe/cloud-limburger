import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import { AddTodo } from './components/AddTodo';
import About from './components/pages/About';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: []
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
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }

  addTodo = (title) => {
    // Static data
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // }

    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => {
        this.setState({ todos: res.data });
        console.log(res.data);
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header /> 
            <Route exact path="/home" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos } 
                    markComplete={this.markComplete} 
                    delteItem={ this.deleteItem }/>
              </React.Fragment>
            )}
            />
          <Route path="/about" component={ About }/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;