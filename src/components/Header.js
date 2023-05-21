import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Core UI Admin Next JS</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#features">Table</Nav.Link>
                    <Nav.Link href="#features">Log Out</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header