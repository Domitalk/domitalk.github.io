import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, BrowserRouter as Router } from 'react-router-dom'


function Navi(props) {

    return (
        <>
            <Navbar static="top" bg="light" variant="light">                
            <Router>
                <Navbar.Brand as={Link} onTouchStartCapture="/">Dominic Chu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                </Router>
            </Navbar>
        </>
    )
}

export default Navi; 