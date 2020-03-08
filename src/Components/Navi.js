import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navi(props) {

    return (
        <>
            <Navbar fixed="top" bg="light" variant="light">
                <Navbar.Brand href="home">Dominic Chu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="projects">Projects</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navi; 