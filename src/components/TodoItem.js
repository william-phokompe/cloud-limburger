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

    render() {
        return (
            <div style={ this.getStyle() }>
                <input type="checkbox" onChange={ this.props.markComplete.bind(this, this.props.task.id) } /> {' '} 
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
