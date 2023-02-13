import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
const NavBar = () => {
  return (
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link to='/'>  <Navbar.Brand href="#home">E-commerce</Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
            <Link to='/categoria/animales'> <NavDropdown.Item href="#action/3.2"> Animales </NavDropdown.Item>    </Link> 
               <Link to='categoria/personajes'> <NavDropdown.Item href="#action/3.3">Personajes 
                </NavDropdown.Item>    </Link> 
            </NavDropdown>
         <Nav.Link href="#deets">Contacto</Nav.Link>
          </Nav>
          <Nav>
           <Link to='/cart'> <CartWidget/> </Link>
            <Nav.Link eventKey={2} href="#memes">
          
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar