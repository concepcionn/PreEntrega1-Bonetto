import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { CardWidget } from "./CardWidget"

export const NavBar = () => {
    return (
        <> 
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">BARO'S GOURMET</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Importados</Nav.Link>
                        <Nav.Link href="#pricing">Naturales</Nav.Link>
                    </Nav>
                    <CardWidget/>
                </Container>
            </Navbar>
            
        </>
    )        
}