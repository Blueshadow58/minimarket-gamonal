import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

function navBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="test">
          GM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
            <NavDropdown title="Productos">
              <NavDropdown.Item href="#action/3.1">Café</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Conservas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dulces</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Limpieza</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;
