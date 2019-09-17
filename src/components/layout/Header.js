import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to='/home' style={linkStyle}>Home</Link> |
            <Link to='/about' style={linkStyle}> About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
