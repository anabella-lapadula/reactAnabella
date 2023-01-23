import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
       
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Personajes de Disney</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Animales
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cuentos </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Contacto</Nav.Link>
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
              Carrito 🛒
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar