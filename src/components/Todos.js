import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
    
    
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} task={todo} markComplete={ this.props.markComplete }/>
        ));
    }
}

// Property types
Todos.protoType = {
    todos: PropTypes.array.isRequired
};

export default Todos;
