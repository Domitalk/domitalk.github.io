import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navi() {

    return (
        <>
            <Navbar 
                fixed="top" 
                bg="light" 
                variant="light"
                // style={navbarStyle}
            >
                <Navbar.Brand as={AnchorLink} href="#Home">Dominic M. Chu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={AnchorLink} href="#About">About</Nav.Link>
                    <Nav.Link as={AnchorLink} href="#Projects">Projects</Nav.Link>
                    <Nav.Link as={AnchorLink} href="#Blogs">Blogs</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Navi; 