import React from 'react'

export default function Header() {
    return (
        <header>
            <h1 style={headerStyle}>
                TodoList
            </h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: 'grey',
    textAlign: 'center',
    padding: '10px'
}
