import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { CardWidget } from "./CardWidget"

export const NavBar = () => {
    return (
        <> 
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">BARO'S GOURMET</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="categoria/natural">Naturales</Nav.Link>
                        <Nav.Link href="/categoria/gourmet">Gourmet</Nav.Link>
                    </Nav>
                    <CardWidget/>
                </Container>
            </Navbar>
            
        </>
    )        
}