import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            textDecoration: this.props.task.completed ? 'line-through' : 'none',
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    };

    markComplete = (e) => {
        console.log(this.props);
    };

    render() {
        return (
            <div style={ this.getStyle() }>
                <input type="checkbox" onChange={ this.props.markComplete } /> {' '} 
              { this.props.task.title }
            </div>
        )
    }
}

// Validation for properties that a component should have
// Property types
TodoItem.protoType = {
    todo: PropTypes.object.isRequired
};

export default TodoItem
