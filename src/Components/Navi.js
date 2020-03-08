import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, BrowserRouter as Router } from 'react-router-dom'


function Navi(props) {
    // For some reason I need to refresh with as={Link} to="/" in order to change the view. 
    // Either fix this issue or else leave as a non-SPA

    return (
        <>
            <Navbar static="top" bg="light" variant="light">                
                <Navbar.Brand >Dominic Chu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar>
            {/* <Navbar static="top" bg="light" variant="light">                
            <Router>
                <Navbar.Brand as={Link} to="/">Dominic Chu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
                </Router>
            </Navbar> */}
        </>
    )
}

export default Navi; 