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
                    <Navbar.Brand to="/">BARO'S GOURMET</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="categoria/natural" as={NavLink}>Naturales</Nav.Link>
                        <Nav.Link to="/categoria/gourmet" as={NavLink}>Gourmet</Nav.Link>
                    </Nav>
                    <CardWidget/>
                </Container>
            </Navbar>
            
        </>
    )        
}