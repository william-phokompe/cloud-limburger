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
        // Destructuring to get values
        const { id, title } = this.props.task;
        return (
            <div style={ this.getStyle() }>
                <input type="checkbox" onChange={ this.props.markComplete.bind(this, id) } /> {' '} 
                { title }
                <button style={ btnStyle } onClick={ this.props.deleteItem.bind(this, id) }>x</button>
            </div>
        )
    }
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '30%',
    cursor: 'pointer',
    float: 'right'
};
// Validation for properties that a component should have
// Property types
TodoItem.protoType = {
    todo: PropTypes.object.isRequired
};

export default TodoItem
