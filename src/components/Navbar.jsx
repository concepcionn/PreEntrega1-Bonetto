import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

import { CardWidget } from "./CardWidget"

export const NavBar = () => {
    return (
        <> 
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <a to="/">
                        <Navbar.Brand>BARO'S GOURMET</Navbar.Brand>
                    </a>
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                        <Nav.Link to="/categoria/natural" as={NavLink}>Naturales</Nav.Link>
                        <Nav.Link to="/categoria/gourmet" as={NavLink}>Gourmet</Nav.Link>
                    </Nav>
                    <CardWidget/>
                </Container>
            </Navbar>
            
        </>
    )        
}