import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, BrowserRouter as Router } from 'react-router-dom'


function Navi() {
    // For some reason I need to refresh with as={Link} to="/" in order to change the view. 
    // Either fix this issue or else leave as a non-SPA

    return (
        <>
            <Navbar static="top" bg="light" variant="light">                
                <Navbar.Brand >Dominic Chu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/portfolio">Home</Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/portfolio/about">About</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navi; 