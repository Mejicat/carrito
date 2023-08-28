import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';


const NavBar = () => {
    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to= '/'>Mis Autitos</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to= '/'>Inicio</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to= '/category/Hot_Wheels'>Hot Wheels</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to= '/category/Maisto'>Maisto</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to= '/category/Monster_Jam'>Monster Jam</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget />
        </Navbar>
    )
}

export default NavBar